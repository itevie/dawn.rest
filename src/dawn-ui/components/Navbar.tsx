import { ReactNode } from "react";

export default function Navbar({ children }: { children: ReactNode }) {
    return (
        <div className="dawn-navbar">
            {children}
        </div>
    )
}