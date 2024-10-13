import { ReactNode } from "react";

export default function Link({ children, href: link }: { href: string, children: ReactNode }) {
    return (
        <a href={link} className="dawn-link">
            {children}
        </a>
    )
}