/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Link from "../../dawn-ui/components/Link";
import axios from "axios";
import { Chart as ChartJS, registerables } from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import { showErrorAlert } from "../../dawn-ui/components/AlertManager";
import Row from "../../dawn-ui/components/Row";
import Words from "../../dawn-ui/components/Words";
import Container from "../../dawn-ui/components/Container";
import DawnPage from "../../components/DawnPage";
import Column from "../../dawn-ui/components/Column";
import { ArrayElement } from "../../dawn-ui/util";
ChartJS.register(...registerables);

interface TrancerData {
  economy?: {
    user_id: string;
    balance: number;
  }[];
  user_data?: {
    user_id: string;
    guild_id: string;
    bumps: number;
    messages_sent: number;
    vc_time: number;
    xp: number;
  }[];
  command_usage?: {
    command_name: string;
    used: number;
  }[];
  usernames?: { [key: string]: string };
  member_count?: {
    id: number;
    time: string;
    server_id: string;
    amount: number;
  }[];
  messages?: {
    time: string;
    amount: number;
  }[];
  quotes?: Quote[];
}

interface Quote {
  id: number;
  server_id: number;
  message_id: number;
  channel_id: number;
  author_id: number;
  created_at: number;
  last_guessed: number;
  content: string;
}
type TrancerQueryType = keyof TrancerData;

let baseDataURL = "/trancer/data";
if (window.location.host.includes("localhost")) {
  baseDataURL = "https://discord.dawn.rest/data";
}

const timeFilters = {
  minute: /[0-9]+\/[0-9]+\/[0-9]+ [0-9]+:[0-9]+/,
  hour: /[0-9]+\/[0-9]+\/[0-9]+ [0-9]+/,
  day: /[0-9]+\/[0-9]+\/[0-9]+/,
  month: /[0-9]+\/[0-9]+/,
};

export default function TrancerPage() {
  const [page, setPage] = useState<string>("about");
  const [data, setData] = useState<TrancerData>({});
  const [timeFilter, setTimeFilter] = useState<{
    [key: string]: keyof typeof timeFilters;
  }>({ messages: "month", memberCount: "day" });
  const [leaderboardSearch, setLeaderboardSearch] = useState<string | null>(
    null
  );
  const [randomQuote, setRandomQuote] = useState<Quote | null>(null);

  useEffect(() => {
    const hashtag = window.location.hash;

    if (window.location.search) {
      const auth = window.location.search.match(/auth=[a-z]+/);
      if (auth) {
        window.localStorage.setItem(
          "trancer_auth",
          auth[0].replace("auth=", "")
        );
      }
    }

    if (hashtag) gotoPage(hashtag.replace("#", ""));
    else gotoPage("about");
  }, []);

  async function gotoPage(page: string) {
    setPage(page);

    // Load usernames anyway
    await fetchData("usernames");
    await fetchData("quotes");

    switch (page) {
      case "leaderboards":
        await fetchData("economy");
        await fetchData("user_data");
        break;
      case "bot":
        await fetchData("command_usage");
        break;
      case "server":
        await fetchData("member_count");
        await fetchData("messages");
        break;
    }
  }

  async function fetchData(type: TrancerQueryType) {
    try {
      const responseData = await axios.get(`${baseDataURL}/${type}`, {
        headers: {
          Authorization: window.localStorage.getItem("trancer_auth"),
        },
      });
      let json = responseData.data.data;
      if (type === "quotes")
        setRandomQuote(json[Math.floor(Math.random() * json.length)]);

      setData((old) => {
        return { ...old, [type]: json };
      });
    } catch (e) {
      showErrorAlert(
        `Failed to load ${type}: Are you missing the auth code? Run .site in Trancy Twilight.`
      );
    }
  }

  function getUsername(id: string) {
    return data?.usernames?.[id] || id;
  }

  return (
    <DawnPage
      full={page !== "about"}
      pageTitle={
        {
          about: "About Trancer",
          leaderboards: "Leaderboards",
          bot: "Bot Details",
          server: "Trancy Twilight Details (GMT)",
        }[page]
      }
      navbar={
        <>
          {["About", "Leaderboards", "User Data", "Server", "Bot"].map((x) => (
            <Link
              key={x}
              onClick={() => gotoPage(x.toLowerCase().replace(/ /g, "-"))}
              href={`#${x.toLowerCase().replace(/ /g, "-")}`}
              forceReload
            >
              {x}
            </Link>
          ))}
        </>
      }
    >
      {{
        about: (
          <Container title="About" style={{ position: "relative" }}>
            {randomQuote && (
              <p className="quote-text">
                "{randomQuote.content}" -{" "}
                {data.usernames?.[randomQuote.author_id]}
              </p>
            )}
            <p>
              Trancer is a hypnosis-orientated Discord bot with a plenty of
              features.
            </p>
            <p>
              It has features such as imposition (phantom touch), spirals,
              economy, XP, quotes, leaderboards and more!
            </p>
            <p>
              Want our bot in your server? Join{" "}
              <Link href="https://discord.gg/invite/zZw7ZCRy">our server</Link>{" "}
              and ask about it.
            </p>
            <Words type="container-title">Note</Words>
            The other categories of this page require authentication.
            <br />
            Get a token from the Trancy Twilight Discord server by running{" "}
            <code>.site</code>
          </Container>
        ),

        "user-data": <></>,

        leaderboards: (
          <Column>
            <Row
              util={["justify-center", "align-center"]}
              style={{ width: "300px" }}
            >
              <Words>Search: </Words>
              <input
                onChange={(e) =>
                  setLeaderboardSearch(e.target.value.toLowerCase())
                }
              ></input>
            </Row>
            <Row util={["flex-wrap"]}>
              {/* Balance Leaderboard */}
              <Container
                style={{ width: "fit-content" }}
                title="Economy Leaderboard"
              >
                {!data.economy ? (
                  <Words>Loading...</Words>
                ) : (
                  <table>
                    <tbody>
                      {data.economy
                        .sort((a, b) => b.balance - a.balance)
                        .slice(0, 50)
                        .map((x, i) => (
                          <tr
                            key={x.user_id}
                            className={`${
                              leaderboardSearch &&
                              getUsername(x.user_id)
                                .toLowerCase()
                                .includes(leaderboardSearch) &&
                              "dawn-highlight"
                            }`}
                          >
                            <td>{i}</td>
                            <td>{getUsername(x.user_id)}</td>
                            <td style={{ textAlign: "end" }}>{x.balance} 🌀</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
              </Container>
              {/* Peak prgoramming right here: */}
              {(
                [
                  ["messages_sent", "Messages", " 💬"],
                  ["vc_time", "VC Time", "m"],
                  ["bumps", "Bumps", " Bumps"],
                  ["xp", "XP", " XP"],
                ] as [keyof TrancerData["user_data"], string, string][]
              ).map((part) => (
                <Container
                  style={{ width: "fit-content", height: "fit-content" }}
                  title={`${part[1]} Leaderboard`}
                >
                  {!data.user_data ? (
                    <Words>Loading...</Words>
                  ) : (
                    <table>
                      <tbody>
                        {data.user_data
                          .filter((x) => x[part[0]] !== 0)
                          .sort((a, b) => b[part[0]] - a[part[0]])
                          .slice(0, 50)
                          .map((x, i) => (
                            <tr
                              key={x.user_id}
                              className={`${
                                leaderboardSearch &&
                                getUsername(x.user_id)
                                  .toLowerCase()
                                  .includes(leaderboardSearch) &&
                                "dawn-highlight"
                              }`}
                            >
                              <td>{i}</td>
                              <td>{getUsername(x.user_id)}</td>
                              <td style={{ textAlign: "end" }}>
                                {x[part[0]]}
                                {part[2]}
                              </td>
                            </tr>
                          ))}
                      </tbody>
                    </table>
                  )}
                </Container>
              ))}
            </Row>
          </Column>
        ),

        bot: (
          <>
            <Row>
              <Container title="Command Usage">
                {!data.command_usage ? (
                  "Loading..."
                ) : (
                  <table>
                    <tbody>
                      {data.command_usage
                        .sort((a, b) => b.used - a.used)
                        .map((x) => (
                          <tr key={x.command_name}>
                            <td>{x.command_name}</td>
                            <td>{x.used} times</td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                )}
              </Container>
            </Row>
          </>
        ),

        server: (
          <>
            <Row>
              {
                // data - filter name - key - human name
                (
                  [
                    {
                      source: data.member_count,
                      filter: "memberCount",
                      human: "Member Count Overtime",
                      noAdd: true,
                    },
                    {
                      source: data.messages,
                      filter: "messages",
                      human: "Messages Overtime",
                      noAdd: false,
                    },
                  ] as const
                ).map((graphData) => (
                  <Container
                    key={graphData.filter}
                    style={{ width: "40%", minHeight: "400px" }}
                    title={`${graphData.human}`}
                  >
                    <Words>
                      Filter:
                      <select
                        defaultValue={timeFilter[graphData.filter]}
                        onChange={(e) =>
                          setTimeFilter({
                            ...timeFilter,
                            [graphData.filter]: (
                              e.target[e.target.selectedIndex] as any
                            ).value,
                          })
                        }
                      >
                        <option value="minute">Minute</option>
                        <option value="hour">Hour</option>
                        <option value="day">Day</option>
                        <option value="month">Month</option>
                      </select>
                    </Words>
                    {!graphData.source ? (
                      "Loading..."
                    ) : (
                      <>
                        <Line
                          data={{
                            labels: convertTimes(
                              graphData.source,
                              timeFilters[timeFilter[graphData.filter]],
                              "amount",
                              graphData.noAdd
                            ).map((y) => y.time),
                            datasets: [
                              {
                                label: graphData.human,
                                data: convertTimes(
                                  graphData.source,
                                  timeFilters[timeFilter[graphData.filter]],
                                  "amount",
                                  graphData.noAdd
                                ).map((y) => y.amount),
                              },
                            ],
                          }}
                        />
                      </>
                    )}
                  </Container>
                ))
              }
              <Container
                style={{ minHeight: "400px", width: "40%" }}
                title="Messages At Times"
              >
                <Bar
                  data={{
                    labels:
                      "00,01,02,03,04,05,06,07,08,09,10,11,12,13,14,15,16,16,17,18,19,20,21,22,23".split(
                        ","
                      ),
                    datasets: [
                      {
                        label: "Messages At Times",
                        data: convertTimes(
                          data.messages,
                          /( [0-9]?[0-9])/,
                          "amount"
                        )
                          .sort((a, b) => parseInt(b.time) - parseInt(a.time))
                          .map((x) => x.amount),
                      },
                    ],
                  }}
                />
              </Container>
            </Row>
          </>
        ),
      }[page] || <Words>Unknown page.</Words>}
    </DawnPage>
  );
}

function convertTimes(
  data: TrancerData["messages"],
  regex: RegExp,
  key: "amount",
  noIncrease: boolean = false
) {
  if (!data) return [];

  let times: { [key: string]: number } = {};
  console.log(data);
  for (const d of data) {
    let time = d.time.match(regex);
    if (!time) continue;

    if (!times[time[0] as string]) times[time[0]] = 0;
    if (noIncrease) {
      times[time[0]] = d[key];
      continue;
    }
    times[time[0]] += d[key];
  }

  let final = [];
  for (const i in times) {
    final.push({
      time: i,
      [key]: times[i],
    });
  }

  return final;
}
