import ButtonLink from "../dawn-ui/components/ButtonLink";
import Navbar from "../dawn-ui/components/Navbar";
import Row from "../dawn-ui/components/Row";
import { Text } from "../dawn-ui";
import Link from "../dawn-ui/components/Link";

export default function RestNabar() {
    return (
        <Navbar>
            <Row>
                <Text type="navbar">
                    <Link href="/">
                        dawn.rest
                    </Link>
                </Text>
                <ButtonLink link="https://discord.dawn.rest/">Discord</ButtonLink>
            </Row>
        </Navbar>
    );
}