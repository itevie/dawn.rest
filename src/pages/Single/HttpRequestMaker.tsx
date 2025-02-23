import { useEffect, useRef, useState } from "react";
import DawnPage from "../../components/DawnPage";
import Button from "../../dawn-ui/components/Button";
import Column from "../../dawn-ui/components/Column";
import Container from "../../dawn-ui/components/Container";
import Row from "../../dawn-ui/components/Row";
import Loader from "react-spinners/PulseLoader";
import axios, { AxiosError, AxiosResponseHeaders } from "axios";
import Tabbed from "../../dawn-ui/components/Tabbed";
import { showInputAlert } from "../../dawn-ui/components/AlertManager";
import { showContextMenu } from "../../dawn-ui/components/ContextMenuManager";

type Method = "GET" | "POST" | "PUT" | "PATCH" | "DELETE" | "HEAD" | "OPTIONS";
type SuccessState = "success" | "danger" | "none";

interface Memory {
  method: Method;
  url: string;
  body: string;
  headers: string;
  contentType: string;
}

export default function HttpRequestMaker() {
  const [isRequesting, setIsRequesting] = useState<boolean>(false);
  const [result, setResult] = useState<{
    state: SuccessState;
    data?: any;
    headers: AxiosResponseHeaders;
    error?: AxiosError;
    status?: number;
    statusText?: string;
  } | null>(null);
  const [allowHtml, setAllowHtml] = useState<boolean>(false);
  const [memories, setMemories] = useState<{ [key: string]: Memory }>({});

  const methodRef = useRef<HTMLSelectElement>(null);
  const urlRef = useRef<HTMLInputElement>(null);
  const bodyRef = useRef<HTMLTextAreaElement>(null);
  const headerRef = useRef<HTMLTextAreaElement>(null);
  const bodyTypeRef = useRef<HTMLSelectElement>(null);

  useEffect(() => {
    if (localStorage.getItem("http_client-memories"))
      setMemories(
        JSON.parse(localStorage.getItem("http_client-memories") as string)
      );
  }, []);

  function getRequest(): Memory {
    const method = (
      methodRef.current?.[methodRef.current?.selectedIndex] as any
    )?.value as Method;
    const url = urlRef.current?.value as string;
    const body = (bodyRef.current?.value as string) || "";
    const headerText = (headerRef.current?.value as string) || "";
    const contentType = (
      bodyTypeRef.current?.[bodyTypeRef.current?.selectedIndex] as any
    )?.value as string;

    return {
      method,
      url,
      body,
      headers: headerText,
      contentType,
    };
  }

  async function sendRequest() {
    const data = getRequest();
    const headers: { [key: string]: any } = {};

    const parts = data.headers.split("\n");
    for (const part of parts)
      if (part.length !== 0)
        headers[part.split(": ")[0]] = part.split(": ")[1] || "";

    setResult(null);
    setIsRequesting(true);

    await new Promise((resolve) => setTimeout(resolve, 500));

    axios({
      method: data.method,
      data: data.body,
      headers: {
        "Content-Type": data.contentType,
        ...headers,
      },
      url: data.url,
    })
      .then((e) => {
        setResult({
          state: "success",
          data: e.data,
          headers: e.headers as any,
          status: e.status,
          statusText: e.statusText,
        });
      })
      .catch((e) => {
        setResult({
          state: "danger",
          data: e.response?.data,
          headers: e.response?.headers,
          error: e,
        });
      })
      .finally(() => {
        setIsRequesting(false);
      });
  }

  async function createMemory() {
    let name = await showInputAlert("Enter name for the request");
    if (!name) return;

    const memory = getRequest();
    setMemories((old) => {
      const n = { ...old, [name as string]: memory };
      localStorage.setItem("http_client-memories", JSON.stringify({ ...n }));
      return n;
    });
  }

  function loadMemory(name: string) {
    const memory = memories[name];
    if (!memory) return;

    if (urlRef.current) urlRef.current.value = memory.url;
    if (bodyRef.current) bodyRef.current.value = memory.body;
    if (headerRef.current) headerRef.current.value = memory.headers;
    if (methodRef.current) methodRef.current.value = memory.method;
    if (bodyTypeRef.current) bodyTypeRef.current.value = memory.contentType;
  }

  return (
    <DawnPage full>
      <Column>
        <Row>
          <Column style={{ minWidth: "60%" }}>
            <Container title="Builder">
              <Row util={["align-center"]}>
                <select
                  disabled={isRequesting}
                  ref={methodRef}
                  className="dawn-big no-select"
                >
                  <option>GET</option>
                  <option style={{ color: "green" }}>POST</option>
                  <option style={{ color: "yellow" }}>PATCH</option>
                  <option style={{ color: "orange" }}>PUT</option>
                  <option style={{ color: "red" }}>DELETE</option>
                  <option style={{ color: "lightblue" }}>OPTIONS</option>
                  <option style={{ color: "lightblue" }}>HEAD</option>
                </select>
                <input
                  disabled={isRequesting}
                  ref={urlRef}
                  className="dawn-big"
                  placeholder="URL"
                />
              </Row>
              <Tabbed>
                {{
                  body: (
                    <Column>
                      <textarea
                        ref={bodyRef}
                        placeholder="Body"
                        style={{ height: "15em", resize: "vertical" }}
                      ></textarea>
                      <select
                        ref={bodyTypeRef}
                        className="dawn-big"
                        style={{
                          margin: "0px",
                          width: "100%",
                          textAlign: "left",
                        }}
                      >
                        <option>application/json</option>
                        <option>text/plain</option>
                        <option>text/html</option>
                      </select>
                    </Column>
                  ),
                  headers: (
                    <textarea
                      ref={headerRef}
                      placeholder="Header-Key: Header-Value"
                      style={{ height: "15em", resize: "vertical" }}
                    ></textarea>
                  ),
                }}
              </Tabbed>
              <Button disabled={isRequesting} big onClick={sendRequest}>
                Send Request
              </Button>
            </Container>
          </Column>
          <Container
            title={`Response ${
              result && result.status
                ? `- ${result.statusText} (${result.status})`
                : ""
            }`}
            style={{ width: "100%", overflow: "auto" }}
            className={`${
              result && result.state !== "none" ? `dawn-${result.state}` : ""
            }`}
          >
            {isRequesting ? (
              <Loader color="white" />
            ) : !result ? (
              "Press Send Request"
            ) : !result.data && result.error?.message ? (
              <>
                {result.error?.message}: {result.error?.code}
              </>
            ) : (
              <Tabbed>
                {{
                  result: (
                    <>
                      {{
                        "application/json": (
                          <code
                            style={{
                              wordWrap: "break-word",
                              whiteSpace: "discard",
                            }}
                          >
                            {JSON.stringify(result.data)}
                          </code>
                        ),
                        "text/html": (
                          <Column>
                            <Row>
                              <input
                                key={Math.random()}
                                checked={allowHtml}
                                type="checkbox"
                                onChange={(e) => {
                                  setAllowHtml(e.currentTarget.checked);
                                }}
                              />
                              <label>Load HTML?</label>
                            </Row>
                            {allowHtml ? (
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: result.data,
                                }}
                              ></div>
                            ) : (
                              <label
                                style={{
                                  wordWrap: "break-word",
                                  whiteSpace: "discard",
                                }}
                              >
                                {result.data}
                              </label>
                            )}
                          </Column>
                        ),
                      }[
                        (result.headers["content-type"] as string)?.split(
                          ";"
                        )[0]
                      ] || <>{result.data}</>}
                    </>
                  ),
                  headers: (
                    <table>
                      <tbody>
                        {Object.entries(result.headers).map(([k, v]) => (
                          <tr>
                            <td>{k}</td>
                            <td>{v}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  ),
                }}
              </Tabbed>
            )}
          </Container>
        </Row>
        <Container title="Memory">
          <label>
            Store requests for future use. (Click to use, right click to manage)
          </label>
          <Row util={["align-center"]}>
            <label>Create new:</label>
            <Button onClick={createMemory}>New Memory</Button>
          </Row>
          <hr />
          {Object.entries(memories).map(([k, v]) => (
            <Button
              key={k}
              onClick={() => loadMemory(k)}
              onContextMenu={(e) => {
                showContextMenu({
                  event: e,
                  elements: [
                    {
                      scheme: "danger",
                      label: "Delete",
                      type: "button",
                      onClick: () => {
                        setMemories((old) => {
                          delete old[k];
                          localStorage.setItem(
                            "http_client-memories",
                            JSON.stringify({ ...old })
                          );
                          return { ...old };
                        });
                      },
                    },
                  ],
                });
              }}
            >
              {k}
            </Button>
          ))}
        </Container>
      </Column>
    </DawnPage>
  );
}
