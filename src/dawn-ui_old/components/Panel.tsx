import { HTMLAttributes, ReactNode } from "react";

export default function Panel(
  { width, title, children, hover, ...rest }: {
    width?: string;
    hover?: boolean;
    title: string;
    children: ReactNode;
  } & HTMLAttributes<HTMLDivElement>,
) {
  return (
    <div
      {...rest}
      className={`dawn-panel ${hover && "dawn-panel-hover"}`}
      style={{
        ...rest.style,
        ...(width &&
        {
          width: `${{ "full": "100%", "fit": "fit-content" }[width] || width
            }`,
        }),
      }}
    >
      <div className="dawn-panel-title">
        <label className="dawn-panel-title-text">{title}</label>
      </div>
      <div className="dawn-content">
        {children}
      </div>
    </div >
  );
}
