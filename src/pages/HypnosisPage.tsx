import RestNabar from "../components/RestNavbar";
import { Text } from "../dawn-ui";
import Banner from "../dawn-ui/components/Banner";
import Content from "../dawn-ui/components/Content";
import Link from "../dawn-ui/components/Link";
import Page from "../dawn-ui/components/Page";
import Panel from "../dawn-ui/components/Panel";
import PanelRow from "../dawn-ui/components/PanelRow";

export default function HypnosisPage() {
    return (
        <Page>
            <RestNabar />
            <Content>
                <Banner title="Hypnosis">
                    Hi :3c
                </Banner>
                <PanelRow>
                    <Link href="/hypno/files">
                        <Panel title="Files">
                            <Text>Get in trance with my various hypnosis files.</Text>
                        </Panel>
                    </Link>
                    <Link href="/hypno/visuals">
                        <Panel title="Visuals">
                            <Text>Get mesmerised with some cool patterns and shapes.</Text>
                        </Panel>
                    </Link>
                </PanelRow>
            </Content>
        </Page>
    );
}