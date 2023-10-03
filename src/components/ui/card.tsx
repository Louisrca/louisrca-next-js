import React, { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren) {
  return <div className="opacity-1.5">{children}</div>;
}
