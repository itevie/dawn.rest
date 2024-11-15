import Words from "../../dawn-ui/components/Words";
import Link from "../../dawn-ui/components/Link";
import Row from "../../dawn-ui/components/Row";
import Container from "../../dawn-ui/components/Container";
import DawnPage from "../../components/DawnPage";

export default function AdminPage() {
  return (
    <DawnPage full>
      <Row util={["justify-center"]}>
        <Link noHighlight href="/admin/file-upload">
          <Container small title="Upload File">
            <Words>Upload a new file</Words>
          </Container>
        </Link>
      </Row>
    </DawnPage>
  );
}
