import React, { ReactNode } from "react";

export default function layout({ children }: { children: ReactNode }) {
  return <div className="w-full p-4 max-w-4xl mx-auto flex flex-col gap-2">{children}</div>;
}
