import { HTMLAttributes, ReactNode } from "react";
import Text from "./Text";

export default function Panel(
  { width, title, children, ...rest }: {
    width?: string;
    title: string;
    children: ReactNode;
  } & HTMLAttributes<HTMLDivElement>,
) {
  return (
    <div
      {...rest}
      className="dawn-panel"
      style={{
        ...rest.style,
        ...(width &&
          {
            width: `${
              { "full": "100%", "fit": "fit-content" }[width] || width
            }`,
          }),
      }}
    >
      <div className="dawn-panel-title">
        <Text type="heading">{title}</Text>
      </div>
      <div className="dawn-content">
        {children}
      </div>
    </div>
  );
}
