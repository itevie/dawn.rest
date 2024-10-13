import { ReactNode } from "react";

export default function Row({ children }: { children: ReactNode }) {
    return (
        <div className="dawn-row">
            {children}
        </div>
    )
}