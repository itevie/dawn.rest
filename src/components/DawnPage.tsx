import { ReactNode } from "react";
import RestNavbar from "./RestNavbar";
import Page from "../dawn-ui/components/Page";
import Row from "../dawn-ui/components/Row";
import Link from "../dawn-ui/components/Link";
import Container from "../dawn-ui/components/Container";

export default function DawnPage({
  children,
  full,
  pageTitle,
  navbar,
}: {
  children: ReactNode;
  full?: boolean;
  pageTitle?: string;
  navbar?: ReactNode;
}) {
  return (
    <>
      <RestNavbar full={full} pageTitle={pageTitle}>
        {navbar}
      </RestNavbar>
      <div style={{ marginTop: "20px" }}>
        <Page full={full}>{children}</Page>
      </div>
      <Row
        util={[
          "justify-center",
          "align-center",
          "no-wrap",
          "ignore-responsive-center",
        ]}
      >
        {[
          // [
          //   "https://dawn.rest/images/youtube.svg",
          //   "https://dawn.rest/r/youtube",
          // ],
          ["https://dawn.rest/images/github.svg", "https://github.com/itevie"],
          // [
          //   "https://dawn.rest/images/discord.svg",
          //   "https://discord.gg/xrjcHcAsj2",
          // ],
          [
            "https://dawn.rest/images/osu.svg",
            "https://osu.ppy.sh/users/14561519",
          ],
        ].map((x) => (
          <Link noHighlight href={x[1]}>
            <img src={x[0]} style={{ width: "32px" }} />
          </Link>
        ))}
      </Row>
    </>
  );
}
