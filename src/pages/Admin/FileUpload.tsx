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
} from "../../dawn-ui/components/AlertManager";

const fileTags: string[] = [
  "fractionation",
  "open ended",
  "sleep",
  "induction",
];

export default function FileUpload() {
  const nameRef = useRef<HTMLInputElement>(null);
  const descriptionRef = useRef<HTMLInputElement>(null);
  const scriptRef = useRef<HTMLInputElement>(null);
  const adminKeyRef = useRef<HTMLInputElement>(null);
  const [tags, setTags] = useState<string[]>([]);
  const [file, setFile] = useState<string | null>(null);

  async function upload() {
    const details = {
      title: nameRef.current?.value || "",
      description: descriptionRef.current?.value || "",
      script: scriptRef.current?.value || "",
      tags,
      file,
    };

    try {
      const result = await axios.post(
        "/admin/file-upload?authorization=" + adminKeyRef.current?.value,
        {
          body: details,
        },
      );

      if (result.status !== 200) {
        return showErrorAlert(
          `${result.data?.message || JSON.stringify(result.data)}`,
        );
      }

      return showInformation("Uploaded!");
    } catch (e) {
      return showErrorAlert(`Failed to upload: ${e}`);
    }
  }

  return (
    <Page>
      <RestNavbar />
      <Content>
        <PanelRow>
          <Panel width="full" title="Upload a new file">
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
                      onChange={(elements) => setTags(elements)}
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
