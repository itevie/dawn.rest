import { useEffect, useState } from "react";
import RestNavbar from "../../components/RestNavbar";
import Content from "../../dawn-ui/components/Content";
import Page from "../../dawn-ui/components/Page";
import Panel from "../../dawn-ui/components/Panel";
import PanelRow from "../../dawn-ui/components/PanelRow";
import axios from "axios";
import { showErrorAlert } from "../../dawn-ui/components/AlertManager";
import Link from "../../dawn-ui/components/Link";
import { baseUrl } from "../..";
import { Text } from "../../dawn-ui";
import Container from "../../dawn-ui/components/Container";

export interface DawnFile {
  id: number;
  title: string;
  description: string;
  tags: string;
  script: string;
  audio_length: number;
  uploaded_at: string;
  views: number;
}

export default function FilePage() {
  const [files, setFiles] = useState<DawnFile[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get(`${baseUrl}/api/file-list`);
        if (result.status !== 200) {
          throw result.data?.message || "Status code was not 200.";
        }

        setFiles(result.data.reverse());
      } catch (e) {
        return showErrorAlert(`Failed to fetch file list! ${e}`);
      }
    })();
  }, []);

  return (
    <Page>
      <RestNavbar />
      <Content>
        <PanelRow>
          <Panel width="full" title="File List">
            {files.map((f) => (
              <Link key={f.id}
                href={`/hypno/files/${f.id}-${f.title.replace(/ /g, "-").toLowerCase()
                  }`}
              >
                <Container >
                  <Text type="heading">{`${f.id} - ${f.title}`}</Text>
                  <Text>{f.description}</Text>
                  <small>{((f.audio_length / 60) - 1).toFixed(0)}m {f.audio_length % 60}s - {f.views} plays - {f.tags.split(",").join(", ")}</small>
                </Container>
              </Link>
            ))}
          </Panel>
        </PanelRow>
      </Content>
    </Page>
  );
}
