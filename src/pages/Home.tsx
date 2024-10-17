import RestNabar from "../components/RestNavbar";
import Banner from "../dawn-ui/components/Banner";
import Content from "../dawn-ui/components/Content";
import Link from "../dawn-ui/components/Link";
import Page from "../dawn-ui/components/Page";
import Panel from "../dawn-ui/components/Panel";
import PanelRow from "../dawn-ui/components/PanelRow";
import Text from "../dawn-ui/components/Text";

function App() {
  return (
    <Page>
      <RestNabar />
      <Content>
        <Banner title="Welcome to dawn.rest">
          <Text>
            Hello, I am Dawn! This is my website where I'll put all my projects,
            hypnosis files, etc.
            <br />
            You can see my projects / things relating to me below!
          </Text>
        </Banner>
        <PanelRow>
          <Link href="/hypno">
            <Panel
              title="Hypnosis"
              style={{ backgroundImage: "url(/images/spiral.svg)" }}
            >
              <Text>
                Discover the wonders of hypnosis. See my hypno files,
                visualisations, and more.
              </Text>
            </Panel>
          </Link>
          <Link href="https://discord.gg/invite/zZw7ZCRy">
            <Panel
              title="Discord"
              style={{ backgroundImage: "url(/images/discord.svg)" }}
            >
              <Text>
                Join my Discord server where we talk about hypnosis, have fun
                events, and have a generally nice community.
              </Text>
            </Panel>
          </Link>
          <Link href="/trancer">
            <Panel
              title="Trancer"
              style={{ backgroundImage: "url(/images/discord.svg)" }}
            >
              <Text>See my hypnosis-related Discord bot: Trancer.</Text>
            </Panel>
          </Link>
          <Link href="https://youtube.com/@trancebydawn">
            <Panel
              title="Trance By Dawn"
              style={{ backgroundImage: "url(/images/youtube.svg)" }}
            >
              <Text>This is my YouTube channel where I post my files too.</Text>
            </Panel>
          </Link>
          <Link href="https://github.com/itevie">
            <Panel
              title="GitHub"
              style={{ backgroundImage: "url(/images/github.svg)" }}
            >
              <Text>See all my code projects I make here.</Text>
            </Panel>
          </Link>
        </PanelRow>
      </Content>
    </Page>
  );
}

export default App;
