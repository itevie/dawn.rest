import { ReactNode } from "react";

export interface ButtonProps {
    type?: "success" | "danger" | "inherit";
    big?: boolean;
    href?: string;
}

export default function Button(props: ButtonProps & { children: ReactNode }) {
    const className = `dawn-button ${props.big && "dawn-big-control"} ${props.type ? `dawn-${props.type}` : ""}`;

    return (
        props.href
            ? <a href={props.href} className={"dawn-link " + className}>{props.children}</a>
            : <button className={className}>{props.children}</button>
    )
}