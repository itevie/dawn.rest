import RestNabar from "../../components/RestNavbar";
import { Text } from "../../dawn-ui";
import Content from "../../dawn-ui/components/Content";
import Link from "../../dawn-ui/components/Link";
import Page from "../../dawn-ui/components/Page";
import Panel from "../../dawn-ui/components/Panel";
import PanelRow from "../../dawn-ui/components/PanelRow";
import allVisuals from "./visuals/allVisuals";

export default function VisualPage() {
    return (
        <Page>
            <RestNabar />
            <Content>
                <PanelRow>
                    {allVisuals.map((v, i) => <>
                        <Link href={`/hypno/visuals/${i}`}>
                            <Panel title={`${new v().name}`}>
                                <Text>{new v().description}</Text>
                            </Panel>
                        </Link>
                    </>)}
                </PanelRow>
            </Content>
        </Page>
    )
}