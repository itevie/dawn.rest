import ButtonLink from "../dawn-ui/components/ButtonLink";
import Navbar from "../dawn-ui/components/Navbar";
import Row from "../dawn-ui/components/Row";
import { Text } from "../dawn-ui";
import Link from "../dawn-ui/components/Link";
import { ReactNode } from "react";

export default function RestNabar({ children }: { children?: ReactNode }) {
    return (
        <Navbar>
            <Row>
                <Text type="navbar">
                    <Link href="/">
                        dawn.rest
                    </Link>
                </Text>
                {children ?? <Row>{children}</Row>}
            </Row>
        </Navbar>
    );
}