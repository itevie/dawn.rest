import { ReactNode } from "react";
import Text from "./Text";

export default function Panel(props: { title: string, children: ReactNode }) {
    return (
        <div className="dawn-panel">
            <div className="dawn-panel-title">
                <Text type="heading">{props.title}</Text>
            </div>
            <div className="dawn-content">
                {props.children}
            </div>
        </div>
    )
}