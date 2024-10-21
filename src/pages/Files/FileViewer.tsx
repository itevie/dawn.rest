import { useEffect, useRef, useState } from "react";
import RestNavbar from "../../components/RestNavbar";
import Content from "../../dawn-ui/components/Content";
import Page from "../../dawn-ui/components/Page";
import Panel from "../../dawn-ui/components/Panel";
import PanelRow from "../../dawn-ui/components/PanelRow";
import { DawnFile } from "./FilePage";
import { Text } from "../../dawn-ui";
import axios from "axios";
import { baseUrl } from "../..";
import VisualViewer from "../VisualPage/VisualViewer";
import PanelColumn from "../../dawn-ui/components/PanelColumn";
import allVisuals from "../VisualPage/visuals/allVisuals";
import { axiosWrapper } from "../../dawn-ui/util";
import Row from "../../dawn-ui/components/Row";

export default function FileViewer() {
  const [file, setFile] = useState<DawnFile | null>(null);
  const [selectedVisual, setSelectedVisual] = useState<number | null>(null);
  const [viewAdded, setViewAdded] = useState<boolean>(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    (async () => {
      const idMatch = window.location.pathname.match(/files\/([0-9]+)/);
      if (!idMatch || !parseInt(idMatch[1])) {
        return window.location.href = "/hypno/files";
      }
      const id = parseInt(idMatch[1]);

      try {
        const result = await axiosWrapper("get", `${baseUrl}/api/files/${id}`);
        setFile(result.data);

        const timeChecker = setInterval(async () => {
          if ((audioRef.current?.currentTime || 0) > 60 && !viewAdded) {
            setViewAdded(true);
            clearInterval(timeChecker);
            try {
              await axios.post(`${baseUrl}/api/files/${result.data.id}/views`);
            } catch { }
          }
        }, 1000);
      } catch { }

      if (localStorage.getItem("file_selected_visual")) {
        setSelectedVisual(parseInt(localStorage.getItem("file_selected_visual") || "0"));
      }
    })();
  }, [viewAdded]);

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

                  <audio controls ref={audioRef}>
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
                <tr>
                  <td>
                    <b>Plays</b>
                  </td>
                  <td>
                    <label>{file?.views}</label>
                  </td>
                </tr>
              </tbody></table>
            </Panel>
          </PanelRow>
          <Panel width="full" title="Visual">
            <Row>
              <Text>Play a visual while you listen: </Text>
              <select style={{ width: "200px" }} defaultValue={selectedVisual || -1} onChange={e => visualSetSelected((e.currentTarget[e.currentTarget.selectedIndex] as any).value)}>
                <option value={-1}>None</option>
                {allVisuals.map((x, i) => <option selected={selectedVisual === i} key={i} value={i}>{new x().name}</option>)}
              </select>
            </Row>
            {
              (selectedVisual !== null && selectedVisual > -1) &&
              <VisualViewer setId={selectedVisual} inFrame={true} />
            }
          </Panel>
        </PanelColumn>
      </Content>
    </Page>
  );
}
