import { useEffect, useState } from "react";
import DawnPage from "../../components/DawnPage";
import Button from "../../dawn-ui/components/Button";
import Column from "../../dawn-ui/components/Column";
import FullPage from "../../dawn-ui/components/FullPage";
import Row from "../../dawn-ui/components/Row";
import Words, { TextType } from "../../dawn-ui/components/Words";
import { randomRange, randomRangeDecimal } from "../../dawn-ui/util";
import {
  addAlert,
  showErrorAlert,
  showInfoAlert,
} from "../../dawn-ui/components/AlertManager";

const definedCoins = {
  gbp: [
    [1000, "£10"],
    [500, "£5"],
    [200, "£2"],
    [100, "£1"],
    [50, "50p"],
    [20, "20p"],
    [10, "10p"],
    [5, "5p"],
    [2, "2p"],
    [1, "1p"],
  ],
  euro: [
    [1000, "€10"],
    [500, "€5"],
    [200, "€2"],
    [100, "€1"],
    [50, "50c"],
    [20, "20c"],
    [10, "10c"],
    [5, "5c"],
    [2, "2c"],
    [1, "1c"],
  ],
} as any;

const symbols = {
  gbp: "£",
  euro: "€",
} as any;

export default function GiveChangeGame() {
  const [currency, setCurrency] = useState<string>("gbp");
  const [current, setCurrent] = useState<{ price: number; gave: number }>({
    price: 500,
    gave: 432,
  });
  const [coins, setCoins] = useState<number[]>([]);
  const [wins, setWins] = useState<number[]>([]);
  const [start, setStart] = useState<number>(0);
  const [average, setAverage] = useState<{ average: number; count: number }>({
    average: 0,
    count: 0,
  });

  useEffect(() => {
    reset();
  }, []);

  function reset() {
    const price = 50 * randomRange(1, 10);
    const gave = parseFloat(randomRangeDecimal(0, price).toFixed(0));
    setCurrent({
      price,
      gave,
    });
    setCoins([]);
  }

  function getLowestCoins(): number[] {
    let c = current.price - current.gave;
    let cs: number[] = [];
    for (const coin of definedCoins[currency] as [number, number][]) {
      while (c >= coin[0]) {
        cs.push(coin[0]);
        c -= coin[0];
      }
    }
    return cs;
  }

  function check() {
    if (coins.reduce((p, c) => p + c, 0) < current.price - current.gave)
      return showErrorAlert("You have not given enough change.");
    if (coins.reduce((p, c) => p + c, 0) > current.price - current.gave)
      return showErrorAlert("You have given too much change.");

    const coinsUsed = coins.length;
    const lowestCoins = getLowestCoins();

    if (coinsUsed === lowestCoins.length) {
      reset();
      setWins((old) => [...old, 1]);
    } else {
      reset();
      setWins((old) => [...old, 0]);
      showInfoAlert(
        `You could of used a smaller amount of coins: ${lowestCoins
          .map(
            (x) =>
              definedCoins[currency].find(
                (y: [number, number]) => y[0] === x,
              )[1],
          )
          .join(", ")}`,
      );
    }

    if (start !== 0)
      setAverage((old) => {
        const elapsedTime = Date.now() - start;
        const newCount = old.count + 1;
        const newAverage = (old.average * old.count + elapsedTime) / newCount;

        return { average: newAverage, count: newCount };
      });

    setStart(Date.now());
  }

  function changeGame() {
    let _currency = currency;
    addAlert({
      title: "Change Game",
      body: (
        <Column>
          <Row util={["align-center"]} style={{ margin: "10px" }}>
            <label>Currency:</label>
            <select
              className="dawn-big"
              style={{ width: "100%" }}
              defaultValue={_currency}
              onChange={(e) => (_currency = e.currentTarget.value)}
            >
              {Object.keys(definedCoins).map((x) => (
                <option value={x}>{x}</option>
              ))}
            </select>
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
            setCurrency(_currency);
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
            <Words style={{ textAlign: "center" }} type={TextType.PageTitle}>
              Price: {symbols[currency]}
              {(current.price / 100).toFixed(2)}, Gave: {symbols[currency]}
              {(current.gave / 100).toFixed(2)}
              <br />
              Remainder: {symbols[currency]}
              {(coins.reduce((p, c) => p + c, 0) / 100).toFixed(2)}
            </Words>
            <Column>
              <Row util={["small-gap"]} style={{ justifyContent: "center" }}>
                {definedCoins[currency as keyof typeof definedCoins]
                  .filter((x: [number, number]) => x[0] >= 100)
                  .map((x: [number, number]) => (
                    <Button
                      onClick={() => setCoins((old) => [...old, x[0]])}
                      util={["round"]}
                      style={{ padding: "10px" }}
                    >
                      {x[1]}
                    </Button>
                  ))}
              </Row>
              <Row util={["small-gap"]} style={{ justifyContent: "center" }}>
                {definedCoins[currency as keyof typeof definedCoins]
                  .filter((x: [number, number]) => x[0] < 100)
                  .map((x: [number, number]) => (
                    <Button
                      onClick={() => setCoins((old) => [...old, x[0]])}
                      util={["round"]}
                      style={{ padding: "10px" }}
                    >
                      {x[1]}
                    </Button>
                  ))}
              </Row>
              <Row util={["justify-center"]}>
                {coins.length === 0 ? <code>select coins</code> : <></>}
                {coins.map((x, i) => (
                  <code
                    key={Math.random()}
                    className="dawn-clickable dawn-hover-strike"
                    onClick={() => {
                      setCoins((old) => {
                        old.splice(i, 1);
                        return [...old];
                      });
                    }}
                  >
                    {
                      definedCoins[currency].find(
                        (y: [number, number]) => y[0] === x,
                      )[1]
                    }
                  </code>
                ))}
              </Row>
              <Row util={["justify-center"]} style={{ width: "400px" }}>
                <Button big onClick={() => setCoins([])}>
                  Reset
                </Button>
                <Button big onClick={changeGame}>
                  Change Game
                </Button>
                <Button big onClick={check}>
                  Done
                </Button>
              </Row>
            </Column>
            <Row util={["align-center", "justify-center"]}>
              <code>{wins.filter((x) => x === 1).length} perfects</code>
              <code>{wins.filter((x) => x !== 1).length} OKs</code>
              <code>Average {(average.average / 1000).toFixed(2)}s</code>
            </Row>
          </Column>
        </div>
      </DawnPage>
    </FullPage>
  );
}
