import { useRef, useState } from "react";
import RestNavbar from "../../components/RestNavbar";
import { Text } from "../../dawn-ui";
import Content from "../../dawn-ui/components/Content";
import MultiSelect from "../../dawn-ui/components/MultiSelect";
import Page from "../../dawn-ui/components/Page";
import Panel from "../../dawn-ui/components/Panel";
import PanelRow from "../../dawn-ui/components/PanelRow";
import Button from "../../dawn-ui/components/Button";
import UploadFile from "../../dawn-ui/components/FileUpload";
import axios from "axios";
import {
  showErrorAlert,
  showInformation,
  showInputModel,
  showLoadingAlert,
} from "../../dawn-ui/components/AlertManager";
import { baseUrl } from "../..";
import { axiosWrapper } from "../../dawn-ui/util";
import { DawnFile } from "../Files/FilePage";

const fileTags: string[] = [
  "fractionation",
  "open ended",
  "sleep",
  "induction",
  "trigger",
  "confusion"
];

export default function FileUpload() {
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const scriptRef = useRef<HTMLInputElement>(null);
  const adminKeyRef = useRef<HTMLInputElement>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [file, setFile] = useState<string | null>(null);
  const [ums, sums] = useState<number>(Math.random());
  const [editId, setEditId] = useState<number | null>(null);

  async function upload() {
    const details = {
      title: nameRef.current?.value || "",
      description: descriptionRef.current?.value || "",
      script: scriptRef.current?.value || "",
      auth: adminKeyRef.current?.value || "",
      duration: 0,
      tags,
    };

    try {
      if (editId) {
        await axiosWrapper("patch", `${baseUrl}/api/admin/edit-file/${editId}`, details);
        return showInformation("Edited!");
      }
    } catch { }

    const audioFile = new Audio(file || "");

    audioFile.onloadedmetadata = async e => {
      details.duration = parseInt(audioFile.duration.toString() || "0");

      try {

        await axiosWrapper("post",
          `${baseUrl}/api/admin/file-upload`,
          details,
        );

        const actualResult = await axiosWrapper("post",
          `${baseUrl}/api/admin/file-upload`,
          { ...details, file: file?.repeat(5) },
        );

        showInformation("Uploaded file!");
      } catch { }
    }
  }

  async function editFile() {
    const id = await showInputModel("Enter file ID");

    try {
      const data = (await axiosWrapper("get", `${baseUrl}/api/files/${id}`)).data as DawnFile;
      setEditId(parseInt(id as string));
      if (nameRef.current && descriptionRef.current && scriptRef.current) {
        nameRef.current.value = data.title;
        descriptionRef.current.value = data.description;
        scriptRef.current.value = data.script;
        setTags(data.tags.split(","));
        setTimeout(() => {
          sums(Math.random());
        }, 100);
      }
    } catch { };
  }

  return (
    <Page>
      <RestNavbar />
      <Content>
        <PanelRow>
          <Panel width="full" title="Upload a new file">
            <Button onClick={editFile}>Edit Instead</Button>
            <table>
              <tbody>
                <tr>
                  <td>
                    <Text>
                      Name
                    </Text>
                  </td>
                  <td>
                    <input ref={nameRef} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text>
                      Description
                    </Text>
                  </td>
                  <td>
                    <input ref={descriptionRef} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text>
                      Script URL
                    </Text>
                  </td>
                  <td>
                    <input ref={scriptRef} />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text>
                      Tags
                    </Text>
                  </td>
                  <td>
                    <MultiSelect
                      updateSelectedKey={ums}
                      onChange={(elements) => setTags(elements)}
                      selected={tags}
                      elements={fileTags}
                    />
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text>Upload File</Text>
                  </td>
                  <td>
                    <UploadFile
                      filter="audio/mpeg"
                      onChange={(d) => setFile(d)}
                    >
                      <Button>
                        Upload
                      </Button>
                    </UploadFile>
                  </td>
                </tr>
                <tr>
                  <td>
                    <Text>Admin Key</Text>
                  </td>
                  <td>
                    <input ref={adminKeyRef} />
                  </td>
                </tr>
              </tbody>
            </table>
            <Button big onClick={upload}>
              Upload
            </Button>
          </Panel>
        </PanelRow>
      </Content>
    </Page>
  );
}
