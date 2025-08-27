import DawnPage from "../components/DawnPage";
import Banner from "../dawn-ui/components/Banner";
import Container from "../dawn-ui/components/Container";
import Link from "../dawn-ui/components/Link";
import Row from "../dawn-ui/components/Row";
import Words from "../dawn-ui/components/Words";

function App() {
  return (
    <DawnPage full>
      <Banner title="Welcome to dawn.rest">
        <Words>
          Hello, I am Dawn / Isabella! This is my website where I'll put all my
          projects.
        </Words>
      </Banner>
      <Row util={["justify-center", "flex-wrap"]}>
        <Link noHighlight href="https://kairo.dawn.rest">
          <Container
            small
            hover
            title="Kairo"
            style={{
              backgroundImage: "url(https://dawn.rest/images/check.svg)",
            }}
          >
            <label>A customisable to-do app for all your tasks.</label>
          </Container>
        </Link>
        <Link noHighlight href="/projects">
          <Container
            small
            hover
            title="Other Projects"
            style={{
              backgroundImage: "url(https://dawn.rest/images/github.svg)",
            }}
          >
            <label>A collection of smaller projects I have made.</label>
          </Container>
        </Link>
      </Row>
    </DawnPage>
  );
}

export default App;
