import { ReactNode } from "react";

export default function PanelRow({ children }: { children: ReactNode }) {
    return (
        <div className="dawn-panel-row">
            {children}
        </div>
    )
}