import { useEffect, useRef, useState } from "react";
import DawnPage from "../../components/DawnPage";
import { showInfoAlert } from "../../dawn-ui/components/AlertManager";
import Button from "../../dawn-ui/components/Button";
import Container from "../../dawn-ui/components/Container";
import FullPage from "../../dawn-ui/components/FullPage";
import Row from "../../dawn-ui/components/Row";
import Words from "../../dawn-ui/components/Words";
import { randomRange } from "../VisualPage/visuals/util";

export default function WordGenerator() {
  const consonants = useState<string>(
    "bcdfghjklmnpqrstvwxzy".split("").join(","),
  );
  const vowels = useState<string>("aeiou".split("").join(","));
  const cv = useState<string>("CV,CVC");
  const minWordLength = useState<number>(1);
  const maxWordLength = useState<number>(3);
  const amount = useState<number>(100);

  const madeWords = useState<string[]>([]);

  useEffect(() => {
    const url = new URL(window.location.toString());
    const params = url.searchParams;

    if (params.get("c")) consonants[1](params.get("c") as string);
    if (params.get("v")) vowels[1](params.get("v") as string);
    if (params.get("min"))
      minWordLength[1](parseInt(params.get("min") as string));
    if (params.get("max"))
      maxWordLength[1](parseInt(params.get("max") as string));
  }, []);

  function generate() {
    let clusters = cv[0].split(",");
    let c = consonants[0].split(",");
    let v = vowels[0].split(",");
    let min = minWordLength[0];
    let max = maxWordLength[0];

    let result: string[] = [];
    for (let i = 0; i != amount[0] - 1; i++) {
      for (let _ = 0; _ != 5; _++) {
        let word = "?"
          .repeat(randomRange(min, max))
          .split("")
          .map((x) => clusters[Math.floor(Math.random() * clusters.length)])
          .join("")
          .split("")
          .map((x) => {
            const part = x === "C" ? c : x === "V" ? v : [...c, ...v];
            return part[Math.floor(Math.random() * part.length)];
          })
          .join("");
        if (!result.includes(word)) {
          result.push(word);
          break;
        }
      }
    }

    madeWords[1](result);
  }

  function share() {
    const link = `${window.location.protocol}//${window.location.host}/projects/word-generator?v=${vowels[0]}&c=${consonants[0]}&min=${minWordLength[0]}&max=${maxWordLength[0]}`;
    showInfoAlert(link);
  }

  return (
    <FullPage>
      <DawnPage full>
        <Row>
          <Container title="Settings">
            <table className="width-100">
              <tbody>
                <tr>
                  <td style={{ width: "100px" }}>
                    <Words>Consonants</Words>
                  </td>
                  <td>
                    <input
                      value={consonants[0]}
                      onChange={(e) => consonants[1](e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "100px" }}>
                    <Words>Vowels</Words>
                  </td>
                  <td>
                    <input
                      value={vowels[0]}
                      onChange={(e) => vowels[1](e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "100px" }}>
                    <Words>C/V formats</Words>
                  </td>
                  <td>
                    <input
                      value={cv[0]}
                      onChange={(e) => cv[1](e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "100px" }}>
                    <Words>Min. Word Length</Words>
                  </td>
                  <td>
                    <input
                      type="range"
                      min={1}
                      max={10}
                      value={minWordLength[0]}
                      onChange={(e) => minWordLength[1](Number(e.target.value))}
                    />
                  </td>
                  <td>
                    <Words>{minWordLength[0]}</Words>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "100px" }}>
                    <Words>Max. Word Length</Words>
                  </td>
                  <td>
                    <input
                      type="range"
                      min={1}
                      max={10}
                      value={maxWordLength[0]}
                      onChange={(e) => maxWordLength[1](Number(e.target.value))}
                    />
                  </td>
                  <td>
                    <Words>{maxWordLength[0]}</Words>
                  </td>
                </tr>
                <tr>
                  <td style={{ width: "100px" }}>
                    <Words>Amount</Words>
                  </td>
                  <td>
                    <input
                      type="range"
                      min={1}
                      max={10000}
                      value={amount[0]}
                      onChange={(e) => amount[1](Number(e.target.value))}
                    />
                  </td>
                  <td>
                    <Words>{amount[0]}</Words>
                  </td>
                </tr>
              </tbody>
            </table>
            <Button onClick={generate} big>
              Generate
            </Button>
            <Words className="dawn-link" onClick={share}>
              Share
            </Words>
          </Container>
          <Container title="Outputted Words">
            <Row util={["flex-wrap"]}>
              {madeWords[0].map((x) => (
                <label>{x}</label>
              ))}
            </Row>
          </Container>
        </Row>
      </DawnPage>
    </FullPage>
  );
}
