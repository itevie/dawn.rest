import Button from "./dawn-ui/components/Button";
import ButtonLink from "./dawn-ui/components/ButtonLink";
import Column from "./dawn-ui/components/Column";
import Content from "./dawn-ui/components/Content";
import Link from "./dawn-ui/components/Link";
import Navbar from "./dawn-ui/components/Navbar";
import Page from "./dawn-ui/components/Page";
import Panel from "./dawn-ui/components/Panel";
import PanelRow from "./dawn-ui/components/PanelRow";
import Row from "./dawn-ui/components/Row";
import Text from "./dawn-ui/components/Text";

function App() {
  return (
    <Page>
      <Navbar>
        <Row>
          <Text type="navbar">
            <Link href="https://dawn.rest">
              dawn.rest
            </Link>
          </Text>
          <ButtonLink link="https://discord.dawn.rest/">Discord</ButtonLink>
        </Row>
      </Navbar>
      <Content>
        <PanelRow>
          <Panel title="Hypnosis">
            <Text>Discover the wonders of hypnosis.</Text>
            <Button big type="inherit" href="https://hypno.dawn.rest/">Hypnosis</Button>
          </Panel>
          <Panel title="Discord">
            <Text>Join my Discord server!</Text>
            <Column>
              <Button big type="inherit" href="https://discord.gg/xrjcHcAsj2">Join</Button>
              <Button big type="inherit" href="https://discord.dawn.rest/">Stats</Button>
            </Column>
          </Panel>
        </PanelRow>
      </Content>
    </Page>
  );
}

export default App;
