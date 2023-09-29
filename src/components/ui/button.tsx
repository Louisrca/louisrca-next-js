import clsx from "clsx";
import React from "react";

export default function Button({
  kind = "default",
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  kind?: "default" | "error" | "nav";
}) {
  return (
    <button
      className={clsx("p-2 border-1 duration-700", {
        "bg-indigo-700 hover:bg-indigo-400 text-white": kind === "default",
        "bg-transparent hover:font-bold text-xl": kind === "nav",
      })}
      {...props}
    />
  );
}
