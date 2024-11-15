import { useRef, useState } from "react";
import MultiSelect from "../../dawn-ui/components/MultiSelect";
import Button from "../../dawn-ui/components/Button";
import UploadFile from "../../dawn-ui/components/FileUpload";
import {
  showInfoAlert,
  showInputAlert,
} from "../../dawn-ui/components/AlertManager";
import { baseUrl } from "../..";
import { axiosWrapper } from "../../dawn-ui/util";
import { DawnFile } from "../Files/FilePage";
import Row from "../../dawn-ui/components/Row";
import Container from "../../dawn-ui/components/Container";
import Words from "../../dawn-ui/components/Words";
import DawnPage from "../../components/DawnPage";

const fileTags: string[] = [
  "fractionation",
  "open ended",
  "sleep",
  "induction",
  "trigger",
  "confusion",
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
        await axiosWrapper(
          "patch",
          `${baseUrl}/api/admin/edit-file/${editId}`,
          details
        );
        return showInfoAlert("Edited!");
      }
    } catch {}

    const audioFile = new Audio(file || "");

    audioFile.onloadedmetadata = async (e) => {
      details.duration = parseInt(audioFile.duration.toString() || "0");

      try {
        await axiosWrapper("post", `${baseUrl}/api/admin/file-upload`, details);

        const actualResult = await axiosWrapper(
          "post",
          `${baseUrl}/api/admin/file-upload`,
          { ...details }
        );

        showInfoAlert(
          "Uploaded file. Please copy the audio file to " +
            actualResult.data.file_path
        );
      } catch {}
    };
  }

  async function editFile() {
    const id = await showInputAlert("Enter file ID");

    try {
      const data = (await axiosWrapper("get", `${baseUrl}/api/files/${id}`))
        .data as DawnFile;
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
    } catch {}
  }

  return (
    <DawnPage>
      <Row>
        <Container title="Upload a new file">
          <Button onClick={editFile}>Edit Instead</Button>
          <table>
            <tbody>
              <tr>
                <td>
                  <Words>Name</Words>
                </td>
                <td>
                  <input ref={nameRef} />
                </td>
              </tr>
              <tr>
                <td>
                  <Words>Description</Words>
                </td>
                <td>
                  <input ref={descriptionRef} />
                </td>
              </tr>
              <tr>
                <td>
                  <Words>Script URL</Words>
                </td>
                <td>
                  <input ref={scriptRef} />
                </td>
              </tr>
              <tr>
                <td>
                  <Words>Tags</Words>
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
                  <Words>Upload File</Words>
                </td>
                <td>
                  <UploadFile filter="audio/mpeg" onChange={(d) => setFile(d)}>
                    <Button>Upload</Button>
                  </UploadFile>
                </td>
              </tr>
              <tr>
                <td>
                  <Words>Admin Key</Words>
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
        </Container>
      </Row>
    </DawnPage>
  );
}
