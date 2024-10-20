import { useEffect, useState } from "react";
import RestNavbar from "../../components/RestNavbar";
import Content from "../../dawn-ui/components/Content";
import Page from "../../dawn-ui/components/Page";
import Panel from "../../dawn-ui/components/Panel";
import PanelRow from "../../dawn-ui/components/PanelRow";
import { DawnFile } from "./FilePage";
import { Text } from "../../dawn-ui";
import { showErrorAlert } from "../../dawn-ui/components/AlertManager";
import axios from "axios";
import { baseUrl } from "../..";
import VisualViewer from "../VisualPage/VisualViewer";
import Column from "../../dawn-ui/components/Column";
import PanelColumn from "../../dawn-ui/components/PanelColumn";
import allVisuals from "../VisualPage/visuals/allVisuals";
import Link from "../../dawn-ui/components/Link";

export default function FileViewer() {
  const [file, setFile] = useState<DawnFile | null>(null);
  const [selectedVisual, setSelectedVisual] = useState<number | null>(null);

  useEffect(() => {
    (async () => {
      const idMatch = window.location.pathname.match(/files\/([0-9]+)/);
      if (!idMatch || !parseInt(idMatch[1])) {
        return window.location.href = "/hypno/files";
      }
      const id = parseInt(idMatch[1]);

      try {
        const result = await axios.get(`${baseUrl}/api/files/${id}`);

        if (result.status !== 200) {
          throw result.data?.message || "Did not get status code 200";
        }
        setFile(result.data);
      } catch (e) {
        return showErrorAlert(`Failed to load file data! ${e}`);
      }

      if (localStorage.getItem("file_selected_visual")) {
        setSelectedVisual(parseInt(localStorage.getItem("file_selected_visual") || "0"));
      }
    })();
  }, []);

  function visualSetSelected(index: number) {
    setSelectedVisual(index);
    localStorage.setItem("file_selected_visual", index.toString());
  }

  return (
    <Page>
      <RestNavbar />
      <Content>
        <PanelColumn>
          <PanelRow fullWidth>
            <Panel title={file?.title ?? "Loading..."}>
              {!file ? <>Loading...</> : (
                <>
                  <Text>{file?.description ?? "Loading..."}</Text>

                  <audio controls>
                    <source
                      src={`${baseUrl}/api/audios/${file?.id}`}
                      type="audio/mpeg"
                    >
                    </source>
                  </audio>
                </>
              )}
            </Panel>
            <Panel title="Details">
              <Text>Details about {file?.title}</Text>
              <table><tbody>
                <tr>
                  <td>
                    <b>Uploaded</b>
                  </td>
                  <td>
                    {new Date(file?.uploaded_at || 0).toDateString()}
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Tags</b>
                  </td>
                  <td>
                    {file?.tags.split(",").join(", ")}
                  </td>
                </tr>
                <tr>
                  <td>
                    <b>Script</b>
                  </td>
                  <td>
                    <a href={file?.script || ""}>Script Link</a>
                  </td>
                </tr>
              </tbody></table>
            </Panel>
          </PanelRow>
          <Panel width="full" title="Visual">
            <Text>Play a visual while you listen.</Text>
            <select defaultValue={selectedVisual || -1} onChange={e => visualSetSelected((e.currentTarget[e.currentTarget.selectedIndex] as any).value)}>
              <option value={-1}>None</option>
              {allVisuals.map((x, i) => <option key={i} value={i}>{new x().name}</option>)}
            </select>
            {
              (selectedVisual && selectedVisual > -1) &&
              <VisualViewer setId={selectedVisual} inFrame={true} />
            }
          </Panel>
        </PanelColumn>
      </Content>
    </Page>
  );
}
