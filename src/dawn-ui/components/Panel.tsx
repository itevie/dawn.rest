import { ReactNode } from "react";
import Text from "./Text";

export default function Panel(props: { width?: string, title: string, children: ReactNode }) {
    return (
        <div className="dawn-panel" {...(props.width && { style: { width: `${{ "full": "100%" }[props.width]}` } })}>
            <div className="dawn-panel-title">
                <Text type="heading">{props.title}</Text>
            </div>
            <div className="dawn-content">
                {props.children}
            </div>
        </div>
    )
}