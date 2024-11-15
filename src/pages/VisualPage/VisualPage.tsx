import Words from "../../dawn-ui/components/Words";
import Link from "../../dawn-ui/components/Link";
import allVisuals from "./visuals/allVisuals";
import Row from "../../dawn-ui/components/Row";
import Container from "../../dawn-ui/components/Container";
import DawnPage from "../../components/DawnPage";

export default function VisualPage() {
  return (
    <DawnPage full>
      <Row util={["flex-wrap", "justify-center"]}>
        {allVisuals.map((v, i) => (
          <>
            <Link noHighlight href={`/hypno/visuals/${i}`}>
              <Container hover small title={`${new v().name}`}>
                <Words>{new v().description}</Words>
              </Container>
            </Link>
          </>
        ))}
      </Row>
    </DawnPage>
  );
}
