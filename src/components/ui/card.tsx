import React, { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren) {
  return <div className="sm:h-screen opacity-1.5">{children}</div>;
}
