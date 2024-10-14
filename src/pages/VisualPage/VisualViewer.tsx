import { useEffect, useRef, useState } from "react";
import Visual, { VisualOption, VisualOptions } from "./visuals/Visualisation";
import allVisuals from "./visuals/allVisuals";
import Page from "../../dawn-ui/components/Page";
import RestNabar from "../../components/RestNavbar";
import Content from "../../dawn-ui/components/Content";
import Panel from "../../dawn-ui/components/Panel";
import { Text } from "../../dawn-ui";
import VisualInput from "./VisualInput";
import Button from "../../dawn-ui/components/Button";
import PanelRow from "../../dawn-ui/components/PanelRow";
import ArrayInput from "../../dawn-ui/components/ArrayInput";

export default function VisualViewer() {
    const [visual, setVisual] = useState<Visual | undefined>(undefined);
    const [id, setId] = useState<number>(-1);
    const [url, setUrl] = useState<string>("");
    const [currentOptions, setCurrentOptions] = useState<{ [key: string]: any }>({});
    const [isPlaying, setIsPlaying] = useState<boolean>(false);
    const player = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const visualId = window.location.pathname.match(/[0-9]+/);
        if (!visualId || parseInt(visualId[0]) >= allVisuals.length) {
            window.location.href = "/hypno/visuals";
            return;
        }

        const id = parseInt(visualId[0]);
        setId(id);

        const visual = allVisuals[parseInt(visualId[0])];
        setVisual(new visual());

        // Try load preset options
        if (window.location.search) {
            let result = window.location.search.match(/options=[a-zA-Z0-9=]+/);
            if (result) {
                try {
                    const json = JSON.parse(atob(result[0].replace(/options=/, "")));
                    setCurrentOptions(json);
                } catch { }
            }
        }
    }, []);

    function play() {
        setIsPlaying(true);

        setTimeout(() => {
            // Get canvas
            const canvas = player.current;
            if (!canvas) return alert("Failed to get canvas.");

            // Update
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;


            // Get default options
            const defaults: { [key: string]: any } = {};
            for (const [k, v] of Object.entries((visual as Visual).getOptions())) {
                defaults[k] = v.default;
            }

            // Create instance
            const type = allVisuals[id];
            const visualInstance = new type();

            const oldOverflow = document.body.style.overflow;
            document.body.style.overflow = "hidden";

            const context = canvas.getContext("2d") as CanvasRenderingContext2D;
            context.textBaseline = "middle";
            context.textAlign = "center";
            context.font = "30px Arial";
            context.fillStyle = "white";
            context.fillText("Click anywhere to stop", canvas.width / 2, canvas.height / 2);

            setTimeout(() => {
                console.log(currentOptions);
                visualInstance.draw(context, { ...defaults, ...currentOptions });
            }, 1000);

            canvas.onclick = () => {
                visualInstance.stop();
                setIsPlaying(false);
                document.body.style.overflow = oldOverflow;
            }
        }, 10);
    }

    function setOption(option: VisualOption, key: string, event: React.ChangeEvent<HTMLInputElement>) {
        const temp = { ...currentOptions };

        switch (option.type) {
            case "number":
                temp[key] = parseFloat(event.target.value);
                break;
            case "boolean":
                temp[key] = event.target.checked;
                break;
            case "array":
                temp[key] = event;
                break;
            case "color":
                temp[key] = event.target.value;
                break;
        }

        setCurrentOptions(temp);
        setShare(temp);
    }

    function setShare(what: object) {
        setUrl(`${window.location.protocol}//${window.location.host}${window.location.pathname}?options=${btoa(JSON.stringify(what))}`)
    }

    function loadPreset(options: VisualOption) {
        const old = { ...currentOptions };
        setCurrentOptions({ ...old, ...options })
        setShare({ ...old, ...options });
    }

    return (
        isPlaying
            ? <canvas style={{ overflow: "hidden" }} ref={player} />
            : <Page>
                <RestNabar title={
                    <Text type="heading">
                        Configure: {visual?.name || "???"}
                    </Text>} />
                <Content>
                    <PanelRow>
                        <Panel width="fit" title="Visual's Settings">
                            <Text>{visual?.description}</Text>
                            <table><tbody>
                                {Object.entries(visual?.getOptions() ?? {}).map(([k, v]) => <tr key={k}>
                                    <td><b>{v.human}</b></td>
                                    <td><VisualInput name={k} option={v} current={currentOptions} set={setOption} /></td>
                                </tr>)}
                                <tr>{Object.keys(visual?.getPresets() ?? {}).length > 0 && <>
                                    <td><b>Presets: </b></td>
                                    <td>{Object.entries(visual?.getPresets() ?? {}).map(([k, v]) =>
                                        <Button key={k} onClick={() => loadPreset(v)}>{k}</Button>
                                    )}</td>
                                </>}</tr>
                            </tbody></table>
                            <Button onClick={play} big>Play</Button>
                        </Panel>
                        <Panel width="400px" title="Share">
                            <Text>Share the following link to show other's this visual.</Text>
                            <input readOnly value={url}></input>
                        </Panel>
                    </PanelRow>
                </Content>
            </Page>
    );
}