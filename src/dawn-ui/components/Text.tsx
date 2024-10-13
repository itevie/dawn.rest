import { ReactNode } from "react";

interface TextProps {
    type?: "heading" | "navbar";
}

export default function Text(props: TextProps & { children: ReactNode }) {
    return (
        <label className={`dawn-text ${props.type ? `dawn-text-${props.type}` : ""}`}>
            {props.children}
        </label>
    )
}