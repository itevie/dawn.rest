import { useEffect, useState } from "react";
import RestNavbar from "../../components/RestNavbar";
import Content from "../../dawn-ui/components/Content";
import Page from "../../dawn-ui/components/Page";
import Panel from "../../dawn-ui/components/Panel";
import PanelRow from "../../dawn-ui/components/PanelRow";
import Link from "../../dawn-ui/components/Link";
import { baseUrl } from "../..";
import { Text } from "../../dawn-ui";
import Container from "../../dawn-ui/components/Container";
import { axiosWrapper } from "../../dawn-ui/util";

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
  const [search, setSearch] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        const result = await axiosWrapper("get", `${baseUrl}/api/file-list`);

        setFiles(result.data.reverse());
      } catch (e) { }
    })();
  }, []);

  return (
    <Page>
      <RestNavbar />
      <Content>
        <PanelRow>
          <Panel width="full" title="Filter">
            <table><tbody>
              <tr>
                <td>
                  <b>Search</b>
                </td>
                <td>
                  <input onChange={e => setSearch(e.currentTarget.value.toLowerCase())} />
                </td>
              </tr>
            </tbody></table>
          </Panel>
          <Panel width="full" title="File List">
            {files
              .filter(f => !search ? true : (
                f.id.toString() === search
                || f.title.toLowerCase().includes(search)
                || f.description.toLowerCase().includes(search)
                || f.tags.includes(search)
              ))
              .map((f) => (
                <Link key={f.id}
                  href={`/hypno/files/${f.id}-${f.title.replace(/ /g, "-").toLowerCase()
                    }`}
                >
                  <Container >
                    <Text type="heading">{`${f.id} - ${f.title}`}</Text>
                    <Text>{f.description}</Text>
                    <small>{Math.floor(f.audio_length / 60).toFixed(0)}m {f.audio_length % 60}s - {f.views} plays - {f.tags.split(",").join(", ")}</small>
                  </Container>
                </Link>
              ))}
          </Panel>
        </PanelRow>
      </Content>
    </Page>
  );
}
