import Navbar from "../dawn-ui/components/Navbar";
import Row from "../dawn-ui/components/Row";
import { ReactNode } from "react";

export default function RestNavbar({
  children,
  pageTitle,
  full,
}: {
  pageTitle?: string;
  children?: ReactNode;
  full?: boolean;
}) {
  return (
    <Navbar
      link="/"
      noPage={full}
      title={"dawn.rest"}
      pageTitle={pageTitle}
      breadcrumb
    >
      <Row>{children ?? <Row>{children}</Row>}</Row>
    </Navbar>
  );
}
