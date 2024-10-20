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

export default function FileViewer() {
  const [file, setFile] = useState<DawnFile | null>(null);

  useEffect(() => {
    (async () => {
      const idMatch = window.location.pathname.match(/files\/([0-9]+)/);
      if (!idMatch || !parseInt(idMatch[1])) {
        return window.location.href = "/hypno/files";
      }
      const id = parseInt(idMatch[1]);

      try {
        const result = await axios.get(`${baseUrl}/api/files/${id}`);
        console.log(result);
        if (result.status !== 200) {
          throw result.data?.message || "Did not get status code 200";
        }
        setFile(result.data);
      } catch (e) {
        return showErrorAlert(`Failed to load file data! ${e}`);
      }
    })();
  }, []);

  return (
    <Page>
      <RestNavbar />
      <Content>
        <PanelRow>
          <Panel width="full" title={file?.title ?? "Loading..."}>
            {!file ? <>Loading...</> : (
              <>
                <Text>{file?.description ?? "Loading..."}</Text>

                <audio controls>
                  <source
                    src={`/files/${file?.id}.mp3`}
                    type="audio/mpeg"
                  >
                  </source>
                </audio>
              </>
            )}
          </Panel>
        </PanelRow>
      </Content>
    </Page>
  );
}
