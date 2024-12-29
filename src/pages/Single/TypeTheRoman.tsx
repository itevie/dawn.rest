import { useRef, useState } from "react";
import DawnPage from "../../components/DawnPage";
import Column from "../../dawn-ui/components/Column";
import FullPage from "../../dawn-ui/components/FullPage";
import Words from "../../dawn-ui/components/Words";
import Row from "../../dawn-ui/components/Row";
import Button from "../../dawn-ui/components/Button";
import { addAlert } from "../../dawn-ui/components/AlertManager";

interface Part {
  lang: string;
  wanted: string;
}

const games: { [key: string]: Part[] } = {
  "Greek To Roman": [
    { lang: "α", wanted: "a" },
    { lang: "β", wanted: "b" },
    { lang: "γ", wanted: "g" },
    { lang: "δ", wanted: "d" },
    { lang: "ε", wanted: "e" },
    { lang: "ζ", wanted: "z" },
    { lang: "η", wanted: "i" },
    { lang: "θ", wanted: "th" },
    { lang: "ι", wanted: "i" },
    { lang: "κ", wanted: "k" },
    { lang: "λ", wanted: "l" },
    { lang: "μ", wanted: "m" },
    { lang: "ν", wanted: "n" },
    { lang: "ξ", wanted: "x" },
    { lang: "ο", wanted: "o" },
    { lang: "π", wanted: "p" },
    { lang: "ρ", wanted: "r" },
    { lang: "σ", wanted: "s" },
    { lang: "τ", wanted: "t" },
    { lang: "υ", wanted: "u" },
    { lang: "φ", wanted: "f" },
    { lang: "χ", wanted: "ch" },
    { lang: "ψ", wanted: "ps" },
    { lang: "ω", wanted: "o" },
    { lang: "αι", wanted: "ai" },
    { lang: "ει", wanted: "ei" },
    { lang: "οι", wanted: "oi" },
    { lang: "ου", wanted: "ou" },
    { lang: "αυ", wanted: "au" },
    { lang: "ευ", wanted: "eu" },
    { lang: "ηυ", wanted: "iu" },
    { lang: "γγ", wanted: "ng" },
    { lang: "γκ", wanted: "nk" },
    { lang: "γξ", wanted: "nx" },
    { lang: "γχ", wanted: "nch" },
  ],
  "Greek To Keyboard": [
    { lang: "α", wanted: "a" },
    { lang: "β", wanted: "b" },
    { lang: "γ", wanted: "g" },
    { lang: "δ", wanted: "d" },
    { lang: "ε", wanted: "e" },
    { lang: "ζ", wanted: "z" },
    { lang: "η", wanted: "h" },
    { lang: "θ", wanted: "u" },
    { lang: "ι", wanted: "i" },
    { lang: "κ", wanted: "k" },
    { lang: "λ", wanted: "l" },
    { lang: "μ", wanted: "m" },
    { lang: "ν", wanted: "n" },
    { lang: "ξ", wanted: "j" },
    { lang: "ο", wanted: "o" },
    { lang: "π", wanted: "p" },
    { lang: "ρ", wanted: "r" },
    { lang: "σ", wanted: "s" },
    { lang: "τ", wanted: "t" },
    { lang: "υ", wanted: "y" },
    { lang: "φ", wanted: "f" },
    { lang: "χ", wanted: "x" },
    { lang: "ψ", wanted: "c" },
    { lang: "ω", wanted: "v" },
  ],
};

const defaultGame = "Greek To Roman";

export default function TypeThewanted() {
  const [current, setCurrent] = useState<Part>(
    games[defaultGame][Math.floor(Math.random() * games[defaultGame].length)]
  );
  const [start, setStart] = useState<number>(0);
  const [game, setGame] = useState<keyof typeof games>(defaultGame);
  const [length, setLength] = useState<number>(1);
  const ref = useRef<HTMLInputElement>(null);
  const [average, setAverage] = useState<{ average: number; count: number }>({
    average: 0,
    count: 0,
  });

  function check() {
    if (!ref.current) return;

    if (ref.current.value.toLowerCase() === current.wanted) {
      ref.current.value = "";

      setCurrent(generate());

      if (start !== 0) {
        setAverage((old) => {
          const elapsedTime = Date.now() - start;
          const newCount = old.count + 1;
          const newAverage = (old.average * old.count + elapsedTime) / newCount;

          return { average: newAverage, count: newCount };
        });
      }

      setStart(Date.now());
    }
  }

  function generate() {
    let result: Part = { lang: "", wanted: "" };

    let parts = games[game];
    if (length > 1) games[game].filter((x) => x.lang.length === 1);

    for (let i = 0; i !== length; i++) {
      let part = parts[Math.floor(Math.random() * parts.length)];
      result.lang += part.lang;
      result.wanted += part.wanted;
    }
    return result;
  }

  function reset() {
    setStart(0);
    setAverage({ average: 0, count: 0 });
    setCurrent(generate());
  }

  function changeGame() {
    let _game = game;
    let _length = length;
    addAlert({
      title: "Change Game",
      body: (
        <Column>
          <Row util={["align-center"]} style={{ margin: "10px" }}>
            <label>Game:</label>
            <select
              className="dawn-big"
              style={{ width: "100%" }}
              defaultValue={_game}
              onChange={(e) => (_game = e.currentTarget.value)}
            >
              {Object.keys(games).map((x) => (
                <option value={x}>{x}</option>
              ))}
            </select>
          </Row>
          <Row util={["align-center"]} style={{ margin: "10px" }}>
            <label>Syllables:</label>
            <input
              className="dawn-big"
              type="number"
              min={1}
              max={5}
              defaultValue={_length}
              onChange={(e) => (_length = parseInt(e.currentTarget.value))}
            />
          </Row>
        </Column>
      ),
      buttons: [
        {
          id: "cancel",
          click(close) {
            close();
          },
          text: "Cancel",
        },
        {
          id: "ok",
          click(close) {
            setGame(_game);
            setLength(_length);
            setTimeout(() => {
              reset();
            }, 100);
            close();
          },
          text: "OK!",
        },
      ],
    });
  }

  return (
    <FullPage>
      <DawnPage full>
        <div className="dawn-page-center">
          <Column>
            <Words style={{ textAlign: "center" }} type="page-title">
              {current.lang}
            </Words>
            <Row style={{ gap: "5px" }}>
              <input
                ref={ref}
                onKeyUp={check}
                autoFocus
                className="dawn-big dawn-round"
              />
              <Button
                className="dawn-round"
                style={{ padding: "0px 5px" }}
                onClick={() => {
                  if (ref.current) ref.current.value = current.wanted;
                }}
              >
                Not Sure?
              </Button>
            </Row>
            <Row util={["align-center"]}>
              <code>Average {(average.average / 1000).toFixed(2)}s</code>
              <Button className="dawn-round" onClick={changeGame}>
                Change Game
              </Button>
              <label>{game}</label>
            </Row>
          </Column>
        </div>
      </DawnPage>
    </FullPage>
  );
}
