import Words from "../dawn-ui/components/Words";
import Banner from "../dawn-ui/components/Banner";
import Link from "../dawn-ui/components/Link";
import Row from "../dawn-ui/components/Row";
import Container from "../dawn-ui/components/Container";
import DawnPage from "../components/DawnPage";

export default function HypnosisPage() {
  return (
    <DawnPage full>
      <Banner title="Hypnosis">
        Hypnosis is a big hobby of mine, I hope you can enjoy my hypnosis files
        and my visualisations.
      </Banner>
      <Row util={["justify-center", "flex-wrap"]}>
        <Link noHighlight href="/hypno/files">
          <Container hover title="Files">
            <Words>Get in trance with my various hypnosis files.</Words>
          </Container>
        </Link>
        <Link noHighlight href="/hypno/visuals">
          <Container hover title="Visuals">
            <Words>Get mesmerised with some cool patterns and shapes.</Words>
          </Container>
        </Link>
        <Link noHighlight href="https://discord.gg/xrjcHcAsj2">
          <Container
            small
            hover
            title="Discord"
            style={{
              backgroundImage: "url(https://dawn.rest/images/discord.svg)",
            }}
          >
            <label>
              Join my Discord server where we talk about hypnosis, have fun
              events, and have a generally nice community.
            </label>
          </Container>
        </Link>
        <Link noHighlight href="https://trancer.dawn.rest">
          <Container
            small
            hover
            title="Trancer"
            style={{
              backgroundImage: "url(https://dawn.rest/images/discord.svg)",
            }}
          >
            <label>See my hypnosis-related Discord bot: Trancer.</label>
          </Container>
        </Link>
      </Row>
    </DawnPage>
  );
}
