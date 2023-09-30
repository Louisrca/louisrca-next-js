import React, { PropsWithChildren } from "react";

export default function Card({ children }: PropsWithChildren) {
  return (
    <div className="w-fit-content p-4 bg-gray-200 opacity-1.5">{children}</div>
  );
}
