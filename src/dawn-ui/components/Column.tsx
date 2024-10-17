import { ReactNode } from "react";

export default function Column({ children }: { children: ReactNode }) {
  return (
    <div className="dawn-column">
      {children}
    </div>
  );
}
