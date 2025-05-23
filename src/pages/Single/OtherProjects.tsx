import DawnPage from "../../components/DawnPage";
import Banner from "../../dawn-ui/components/Banner";
import Row from "../../dawn-ui/components/Row";
import Container from "../../dawn-ui/components/Container";
import Link from "../../dawn-ui/components/Link";

export default function OtherProjectsPage() {
  return (
    <DawnPage>
      <Banner title="Smaller Projects">
        Here is a list of smaller projects that don't need to be on the front
        page.
      </Banner>
      <Row util={["flex-wrap", "justify-center"]}>
        <Link noHighlight href="/projects/type-the-roman">
          <Container small hover title="Type The Romanisation">
            <label>
              You are given a syllable in a language and you must romanize it.
            </label>
          </Container>
        </Link>
        <Link noHighlight href="/projects/give-change">
          <Container small hover title="Give Change">
            <label>
              You are given a price, and how much a person has gave, and you
              must give the change in the lowest amount of coins.
            </label>
          </Container>
        </Link>
        <Link noHighlight href="/projects/http">
          <Container small hover title="HTTP Client">
            <label>Create HTTP requests here with the request builder.</label>
          </Container>
        </Link>
        <Link noHighlight href="/projects/dawn-ui">
          <Container small hover title="dawn-ui">
            <label>See the dawn-ui (my UI framework) debug page.</label>
          </Container>
        </Link>
        <Link noHighlight href="/projects/word-generator">
          <Container small hover title="Word Generator">
            <label>Generate words based on some rules.</label>
          </Container>
        </Link>
      </Row>
    </DawnPage>
  );
}
