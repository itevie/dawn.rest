import { useEffect, useState } from "react";
import RestNabar from "../../components/RestNavbar";
import { Text } from "../../dawn-ui";
import Content from "../../dawn-ui/components/Content";
import Link from "../../dawn-ui/components/Link";
import Page from "../../dawn-ui/components/Page";
import PanelRow from "../../dawn-ui/components/PanelRow";
import Panel from "../../dawn-ui/components/Panel";
import axios from "axios";
import { Chart as ChartJS, registerables } from 'chart.js';
import { Chart, Line } from 'react-chartjs-2'
import { showErrorAlert } from "../../dawn-ui/components/AlertManager";
ChartJS.register(...registerables);

interface TrancerData {
    economy?: {
        user_id: string,
        balance: number
    }[],
    user_data?: {
        user_id: string,
        guild_id: string,
        bumps: number,
        messages_sent: number,
        vc_time: number,
    }[],
    command_usage?: {
        command_name: string,
        used: number,
    }[],
    usernames?: { [key: string]: string },
    member_count?: {
        id: number,
        time: string,
        server_id: string,
        amount: number,
    }[],
    messages?: {
        time: string,
        amount: number,
    }[],
}
type TrancerQueryType = keyof TrancerData;

let baseDataURL = "/trancer-proxy?url=/data";
baseDataURL = "https://discord.dawn.rest/data";

const timeFilters = {
    "minute": /[0-9]+\/[0-9]+\/[0-9]+ [0-9]+:[0-9]+/,
    "hour": /[0-9]+\/[0-9]+\/[0-9]+ [0-9]+/,
    "day": /[0-9]+\/[0-9]+\/[0-9]+/,
    "month": /[0-9]+\/[0-9]+/,
}

export default function TrancerPage() {
    const [page, setPage] = useState<string>("about");
    const [data, setData] = useState<TrancerData>({});
    const [timeFilter, setTimeFilter] = useState<{ [key: string]: keyof typeof timeFilters }>({ messages: "month", memberCount: "day" });
    const [leaderboardSearch, setLeaderboardSearch] = useState<string | null>(null);

    useEffect(() => {
        const hashtag = window.location.hash;

        if (window.location.search) {
            const auth = window.location.search.match(/auth=[a-z]+/);
            if (auth) {
                window.localStorage.setItem("trancer_auth", auth[0].replace("auth=", ""));
            }
        }

        if (hashtag) gotoPage(hashtag.replace("#", ""));
        else gotoPage("about");
    }, []);

    async function gotoPage(page: string) {
        setPage(page);

        // Load usernames anyway
        if (page !== "about" && !data.usernames) {
            await fetchData("usernames");
        }

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
                    Authorization: window.localStorage.getItem("trancer_auth")
                }
            });
            let json = responseData.data.data;

            setData(old => {
                return { ...old, [type]: json }
            });
        } catch (e) {
            showErrorAlert(`Failed to load ${type}: Are you missing the auth code? Run .site in Trancy Twilight.`);
        }
    }

    function getUsername(id: string) {
        return data?.usernames?.[id] || id;
    }

    return (
        <Page>
            <RestNabar>
                {
                    ["About", "Leaderboards", "User Data", "Server", "Bot"]
                        .map(x => <Link
                            key={x}
                            onClick={() => gotoPage(x.toLowerCase().replace(/ /g, "-"))}
                            href={`#${x.toLowerCase().replace(/ /g, "-")}`}
                        >{x}</Link>)
                }
            </RestNabar>
            <Content>
                {
                    {
                        "about": <>
                            <Text type="heading">About Trancer</Text>
                        </>,



                        "leaderboards": <>
                            <Text type="heading">Leaderboards</Text>
                            <Text>Search: <input onChange={e => setLeaderboardSearch(e.target.value.toLowerCase())}></input></Text>
                            <PanelRow>
                                {/* Balance Leaderboard */}
                                <Panel width="fit" title="Economy Leaderboard">
                                    {!data.economy ? <Text>Loading...</Text> : <table><tbody>
                                        {data.economy.sort((a, b) => b.balance - a.balance).map(x =>
                                            <tr key={x.user_id} className={`${leaderboardSearch && getUsername(x.user_id).toLowerCase().includes(leaderboardSearch) && "dawn-highlight"}`}>
                                                <td>{getUsername(x.user_id)}</td>
                                                <td>{x.balance} 🌀</td>
                                            </tr>)}
                                    </tbody></table>}
                                </Panel>
                                {/* Peak prgoramming right here: */}
                                {
                                    ([
                                        ["messages_sent", "Messages", "Messages"],
                                        ["vc_time", "VC Time", "Minutes"],
                                        ["bumps", "Bumps", "Bumps"]
                                    ] as [keyof TrancerData["user_data"], string, string][]).map(part => <Panel width="fit" title={`${part[1]} Leaderboard`}>
                                        {!data.user_data ? <Text>Loading...</Text> : <table><tbody>
                                            {data.user_data.filter(x => x[part[0]] !== 0).sort((a, b) => b[part[0]] - a[part[0]]).map(x =>
                                                <tr key={x.user_id} className={`${leaderboardSearch && getUsername(x.user_id).toLowerCase().includes(leaderboardSearch) && "dawn-highlight"}`}>
                                                    <td>{getUsername(x.user_id)}</td>
                                                    <td>{x[part[0]]} {part[2]}</td>
                                                </tr>)}
                                        </tbody></table>}
                                    </Panel>)
                                }
                            </PanelRow>
                        </>,



                        "bot": <>
                            <Text type="heading">Bot Details</Text>
                            <PanelRow>
                                <Panel width="fit" title="Command Usage">
                                    {!data.command_usage ? "Loading..." : <table><tbody>
                                        {data.command_usage.sort((a, b) => b.used - a.used).map(x => <tr key={x.command_name}>
                                            <td>{x.command_name}</td>
                                            <td>{x.used} times</td>
                                        </tr>)}
                                    </tbody></table>}
                                </Panel>
                            </PanelRow>
                        </>,



                        "server": <>
                            <Text type="heading">Trancy Twilight Details</Text>
                            <PanelRow>
                                {
                                    // data - filter name - key - human name
                                    ([
                                        { source: data.member_count, filter: "memberCount", human: "Member Count Overtime", noAdd: true },
                                        { source: data.messages, filter: "messages", human: "Member Count Overtime", noAdd: false },
                                    ] as const)
                                        .map(graphData => <Panel key={graphData.filter} width="40%" style={{ minHeight: "400px" }} title={`${graphData.human}`}>
                                            <Text>
                                                Filter:
                                                <select defaultValue={timeFilter[graphData.filter]} onChange={e =>
                                                    setTimeFilter({ ...timeFilter, [graphData.filter]: (e.target[e.target.selectedIndex] as any).value })
                                                }>
                                                    <option value="minute">Minute</option>
                                                    <option value="hour">Hour</option>
                                                    <option value="day">Day</option>
                                                    <option value="month">Month</option>
                                                </select>
                                            </Text>
                                            {!graphData.source ? "Loading..." : <>
                                                <Line data={{
                                                    labels: convertTimes(graphData.source, timeFilters[timeFilter[graphData.filter]], "amount", graphData.noAdd).map(y => y.time),
                                                    datasets: [{
                                                        label: graphData.human,
                                                        data: convertTimes(graphData.source, timeFilters[timeFilter[graphData.filter]], "amount", graphData.noAdd).map(y => y.amount)
                                                    }]
                                                }} />
                                            </>}
                                        </Panel>)
                                }
                            </PanelRow>
                        </>
                    }[page] || <Text>Unknown page.</Text>
                }
            </Content>
        </Page >
    )
}

function convertTimes(data: TrancerData["messages"], regex: RegExp, key: "amount", noIncrease: boolean = false) {
    if (!data) return [];

    let times: { [key: string]: number } = {};
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
            [key]: times[i]
        });
    }

    return final;
}

function log(...what: any[]) {
    console.log(what);
    return false;
}