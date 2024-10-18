import { useEffect, useState } from "react";
import RestNavbar from "../../components/RestNavbar";
import Content from "../../dawn-ui/components/Content";
import Page from "../../dawn-ui/components/Page";
import Panel from "../../dawn-ui/components/Panel";
import PanelRow from "../../dawn-ui/components/PanelRow";
import axios from "axios";
import { showErrorAlert } from "../../dawn-ui/components/AlertManager";
import Link from "../../dawn-ui/components/Link";

export interface DawnFile {
  id: number;
  title: string;
  description: string;
  tags: string[];
  script: string;
}

export default function FilePage() {
  const [files, setFiles] = useState<DawnFile[]>([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await axios.get("/api/file-list");
        if (result.status !== 200) {
          throw result.data?.message || "Status code was not 200.";
        }

        setFiles(result.data);
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
          {files.map((f) => (
            <Link
              href={`/hypno/files/${f.id}-${
                f.title.replace(/ /g, "-").toLowerCase()
              }`}
            >
              <Panel title={`${f.id} - ${f.title}`}>
                {f.description}
              </Panel>
            </Link>
          ))}
        </PanelRow>
      </Content>
    </Page>
  );
}
