import { useEffect, useRef, useState } from "react";
import Visual, { VisualOption, VisualOptions } from "./visuals/Visualisation";
import allVisuals from "./visuals/allVisuals";
import Page from "../../dawn-ui/components/Page";
import RestNavbar from "../../components/RestNavbar";
import Content from "../../dawn-ui/components/Content";
import Panel from "../../dawn-ui/components/Panel";
import { Text } from "../../dawn-ui";
import VisualInput from "./VisualInput";
import Button from "../../dawn-ui/components/Button";
import PanelRow from "../../dawn-ui/components/PanelRow";
import { randomRange } from "./visuals/util";
import { showInformation } from "../../dawn-ui/components/AlertManager";

const textFlashes = {
  deep: [
    "drop",
    "deeper",
    "down",
    "snap",
    "relax",
    "sinking",
    "drifting",
    "dropping",
    "dropped",
    "sinked",
    "now",
    "sleep",
    "rest",
    "calm",
  ],
  numbers: "0,1,2,3,4,5,6,7,8,9,10".split(","),
} as const;

interface FlashTextOptions {
  usePreset: boolean;
  preset: keyof typeof textFlashes;
  useCustomWords: boolean;
  customWords: string;
  enabled: boolean;
  opacity: number;
  color: string;
}

const defaultFlashTextOptions: FlashTextOptions = {
  usePreset: true,
  preset: "deep",
  useCustomWords: false,
  customWords: "",
  enabled: true,
  opacity: 0.5,
  color: "#FFFFFF"
};

export default function VisualViewer(props: { setId?: number, inFrame?: boolean }) {
  const [visual, setVisual] = useState<Visual | undefined>(undefined);
  const [currentOptions, setCurrentOptions] = useState<{ [key: string]: any }>(
    {},
  );

  const [id, setId] = useState<number>(-1);
  const [url, setUrl] = useState<string>("");

  const [flashText, setFlashText] = useState<string>("");
  const [flashTextOptions, setFlashTextOptions] = useState<FlashTextOptions>({
    ...defaultFlashTextOptions,
  });
  const colorRef = useRef<HTMLInputElement>(null);

  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const player = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const visualId = window.location.pathname.match(/[0-9]+/);
    if (!visualId || parseInt(visualId[0]) >= allVisuals.length && !props.inFrame) {
      window.location.href = "/hypno/visuals";
      return;
    }

    const id = props.setId ?? parseInt(visualId[0]);
    setId(id);

    const cvisual = allVisuals[id];

    setVisual(new cvisual());

    if (window.location.search) {
      // Check if it should load preset
      let result = window.location.search.match(/options=[a-zA-Z0-9=]+/);
      if (result) {
        try {
          const json = JSON.parse(atob(result[0].replace(/options=/, "")));
          setCurrentOptions(json);
        } catch { }
      }
    }

    // Check if load flash text options
    const lsFlash = localStorage.getItem("text_flash_options");
    if (lsFlash) {
      let json = JSON.parse(lsFlash);
      setFlashTextOptions(json);
      if (json.color && colorRef.current)
        colorRef.current.value = json.color;
    }

    const lsSettings = localStorage.getItem(`current_visual_settings_${id}`);
    if (lsSettings) {
      setCurrentOptions(JSON.parse(lsSettings));
    }
  }, [props]);

  function play() {
    setIsPlaying(true);

    setTimeout(async () => {
      // Get canvas
      const canvas = player.current;
      if (!canvas) return alert("Failed to get canvas.");

      if (!(window as any).chrome && !localStorage.getItem("browser_warn")) {
        localStorage.setItem("browser_warn", "true");
        await showInformation(
          `You are not using a chromium-based web browser. You may see stutters.`,
        );
      }

      // Update
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      window.onresize = () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
      }

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

      // Write the "Click anywhere to stop" thing
      const context = canvas.getContext("2d") as CanvasRenderingContext2D;
      context.textBaseline = "middle";
      context.textAlign = "center";
      context.font = "30px Arial";
      context.fillStyle = "white";
      context.fillText(
        "Click anywhere to stop",
        canvas.width / 2,
        canvas.height / 2,
      );
      canvas.style.backgroundColor = "#000000";

      // Timeout to allow the text to be seen
      let textFlasherTimer: ReturnType<typeof setInterval>;
      setTimeout(() => {
        visualInstance.draw(context, { ...defaults, ...currentOptions });

        // Check if it is enabled
        if (flashTextOptions.enabled) {
          const cw = flashTextOptions.customWords.split(",");
          const validWords = ([] as string[]).concat(
            flashTextOptions.usePreset
              ? textFlashes[flashTextOptions.preset ?? "deep"]
              : []
          ).concat(
            flashTextOptions.useCustomWords
              ? flashTextOptions.customWords.split(",").map(x => x.trim())
              : []
          );

          // TODO: This may need reworking - idk
          let last = 0;
          textFlasherTimer = setInterval(() => {
            // chance of showing
            // && only show if not already shown
            // && 700 grace period betweem
            if (
              Math.random() > 0.8 && flashText === "" &&
              700 - (Date.now() - last) < 0
            ) {
              const word = validWords[Math.floor(Math.random() * validWords.length)];
              setFlashText(word.trim());
              last = Date.now();

              // Timer to hide it
              setTimeout(() => {
                setFlashText("");
              }, randomRange(100, 400));
            }
          }, 100);
        }
      }, 1000);

      // When clicked hide and stop the visual
      canvas.onclick = () => {
        visualInstance.stop();
        setIsPlaying(false);
        clearInterval(textFlasherTimer);
        setFlashText("");
        document.body.style.overflow = oldOverflow;
      };
    }, 10);
  }

  function setOption(
    option: VisualOption,
    key: string,
    event: React.ChangeEvent<HTMLInputElement>,
  ) {
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
      case "string":
        temp[key] = event.target.value;
        break;
    }

    localStorage.setItem(`current_visual_settings_${id}`, JSON.stringify(temp));

    setCurrentOptions(temp);
    setShare(temp);
  }

  function setShare(what: object) {
    setUrl(
      `${window.location.protocol}//${window.location.host}${window.location.pathname}?options=${btoa(JSON.stringify(what))
      }`,
    );
  }

  function loadPreset(options: VisualOption) {
    const old = { ...currentOptions };
    setCurrentOptions({ ...old, ...options });
    setShare({ ...old, ...options });

    // Stupid way of making it rerender the array input
    // TODO: Make it so this isn't needed.
    setIsPlaying(true);
    setTimeout(() => {
      setIsPlaying(false);
    }, 10);
  }

  function setFlashTextOption(key: string, value: any) {
    setFlashTextOptions((old) => {
      const newValues: any = { ...old };
      newValues[key] = value;
      localStorage.setItem("text_flash_options", JSON.stringify(newValues));
      return { ...newValues };
    });
  }

  return (
    isPlaying
      ? (
        <>
          <canvas style={{ overflow: "hidden", position: "absolute", top: "0", left: "0" }} ref={player} />
          <label
            style={{ opacity: flashTextOptions.opacity, color: flashTextOptions.color }}
            className="dawn-visual-text"
          >
            {flashText}
          </label>
        </>
      )
      : (
        <Page>
          {!props.inFrame && <RestNavbar
            title={
              <Text type="title">
                Configure: {visual?.name || "???"}
              </Text>
            }
          />}
          <Content>
            <PanelRow fullWidth>
              <Panel title="Visual's Settings">
                <Text>{visual?.description}</Text>
                <table>
                  <tbody>
                    {Object.entries(visual?.getOptions() ?? {}).map((
                      [k, v],
                    ) => (
                      <tr key={k}>
                        <td>
                          <b>{v.human}</b>
                        </td>
                        <td>
                          <VisualInput
                            name={k}
                            option={v}
                            current={currentOptions}
                            set={setOption}
                          />
                        </td>
                      </tr>
                    ))}
                    <tr>
                      {Object.keys(visual?.getPresets() ?? {}).length > 0 && (
                        <>
                          <td>
                            <b>Presets:</b>
                          </td>
                          <td>
                            {Object.entries(visual?.getPresets() ?? {}).map((
                              [k, v],
                            ) => (
                              <Button
                                key={k}
                                onClick={() => loadPreset(v)}
                              >
                                {k}
                              </Button>
                            ))}
                          </td>
                        </>
                      )}
                    </tr>
                  </tbody>
                </table>
                <Button onClick={play} big>Play</Button>
              </Panel>
              <Panel title="Text Flashing">
                <Text>Flash different words on the screen randomly.</Text>
                <table>
                  <tbody>
                    <tr>
                      <td>
                        <b>Enabled</b>
                      </td>
                      <td>
                        <input
                          onChange={(i) =>
                            setFlashTextOption(
                              "enabled",
                              i.currentTarget.checked,
                            )}
                          checked={flashTextOptions.enabled}
                          type="checkbox"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Use Preset</b>
                      </td>
                      <td>
                        <input
                          onChange={(i) =>
                            setFlashTextOption(
                              "usePreset",
                              i.currentTarget.checked,
                            )}
                          checked={flashTextOptions.usePreset}
                          type="checkbox"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Preset</b>
                      </td>
                      <td>
                        <select
                          onChange={(i) =>
                            setFlashTextOption(
                              "preset",
                              (i.currentTarget[
                                i.currentTarget.selectedIndex
                              ] as any).value,
                            )}
                          defaultValue={flashTextOptions.preset ?? "deep"}
                        >
                          {Object.keys(textFlashes).map((x) => (
                            <option value={x} key={x}>{x}</option>
                          ))}
                        </select>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Use Custom Words</b>
                      </td>
                      <td>
                        <input
                          onChange={(i) =>
                            setFlashTextOption(
                              "useCustomWords",
                              i.currentTarget.checked,
                            )}
                          checked={flashTextOptions.useCustomWords}
                          type="checkbox"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Custom Words</b>
                      </td>
                      <td>
                        <textarea
                          onChange={(i) =>
                            setFlashTextOption(
                              "customWords",
                              i.currentTarget.value,
                            )}
                          value={flashTextOptions.customWords}
                          placeholder="Words / Phrases split by commas"
                        />
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Opacity</b>
                      </td>
                      <td>
                        <input
                          type="range"
                          step={0.05}
                          min={0.05}
                          max={1}
                          value={flashTextOptions.opacity}
                          onChange={(i) =>
                            setFlashTextOption(
                              "opacity",
                              parseFloat(i.currentTarget.value),
                            )}
                        />
                        <label>
                          {(flashTextOptions.opacity * 100).toFixed(0)}%
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <b>Color</b>
                      </td>
                      <td>
                        <input
                          type="color"
                          value={flashTextOptions.color}
                          onChange={(i) =>
                            setFlashTextOption(
                              "color",
                              i.currentTarget.value,
                            )}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <b>Words that will be shown:</b>
                <br />
                {
                  ([] as string[]).concat(
                    flashTextOptions.usePreset
                      ? textFlashes[flashTextOptions.preset ?? "deep"]
                      : []
                  ).concat(
                    flashTextOptions.useCustomWords
                      ? flashTextOptions.customWords.split(",").map(x => x.trim())
                      : []
                  ).join(", ")
                }
              </Panel>
            </PanelRow>
            {!props.inFrame && <PanelRow>
              <Panel width="400px" title="Share">
                <Text>
                  Share the following link to show others this visual.
                </Text>
                <input readOnly value={url}></input>
                <Button
                  onClick={() => window.navigator.clipboard.writeText(url)}
                >
                  Copy
                </Button>
              </Panel>
            </PanelRow>}
          </Content>
        </Page>
      )
  );
}
