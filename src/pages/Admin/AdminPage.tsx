import RestNavbar from "../../components/RestNavbar";
import { Text } from "../../dawn-ui";
import Banner from "../../dawn-ui/components/Banner";
import Content from "../../dawn-ui/components/Content";
import Link from "../../dawn-ui/components/Link";
import Page from "../../dawn-ui/components/Page";
import Panel from "../../dawn-ui/components/Panel";
import PanelRow from "../../dawn-ui/components/PanelRow";

export default function AdminPage() {
  return (
    <Page>
      <RestNavbar />
      <Content>
        <PanelRow>
          <Link href="/admin/file-upload">
            <Panel title="Upload File">
              <Text>Upload a new file</Text>
            </Panel>
          </Link>
        </PanelRow>
      </Content>
    </Page>
  );
}
