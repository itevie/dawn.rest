import Banner from "./dawn-ui/components/Banner";
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
import Rule from "./dawn-ui/components/Rule";
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
        <Banner title="Welcome to dawn.rest">
          <Text>
            Hello, I am Dawn! This is my website where I'll put all my projects, hypnosis files, etc.
            <br />
            You can see my projects / things relating to me below!
          </Text>
        </Banner>
        <PanelRow>
          <Link href="https://dawn.rest/hypno">
            <Panel title="Hypnosis">
              <Text>Discover the wonders of hypnosis. See my hypno files, visualisations, and more.</Text>
            </Panel>
          </Link>
          <Link href="https://discord.dawn.rest">
            <Panel title="Discord">
              <Text>Join my Discord server where we talk about hypnosis, have fun events, and have a generally nice community.</Text>
            </Panel>
          </Link>
          <Link href="https://discord.dawn.rest">
            <Panel title="Trancer">
              <Text>See my hypnosis-related Discord bot: Trancer.</Text>
            </Panel>
          </Link>
          <Link href="https://youtube.com/@trancebydawn">
            <Panel title="Trance By Dawn">
              <Text>This is my YouTube channel where I post my files too.</Text>
            </Panel>
          </Link>
          <Link href="https://github.com/itevie">
            <Panel title="GitHub">
              <Text>See all my code projects I make here.</Text>
            </Panel>
          </Link>
        </PanelRow>
      </Content>
    </Page>
  );
}

export default App;
