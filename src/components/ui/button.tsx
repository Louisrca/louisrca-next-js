import clsx from "clsx";
import React from "react";

export default function Button({
  kind = "default",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: "default" | "green" | "nav" | "indigo";
}) {
  return (
    <button
      className={clsx("p-2 border-1 duration-700", {
        "bg-indigo-700 hover:bg-indigo-500 hover:text-green-400 text-white":
          kind === "default",
        "bg-transparent hover:font-bold text-xl": kind === "nav",
        "bg-green-400 font-medium hover:text-indigo-400 text-xl":
          kind === "green",
        "bg-indigo-400 font-medium hover:text-indigo-400 text-xl opacity-100":
          kind === "indigo",
      })}
      {...props}
    />
  );
}
