import { ReactNode } from "react";
import RestNavbar from "./RestNavbar";
import Page from "../dawn-ui/components/Page";

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
    </>
  );
}
