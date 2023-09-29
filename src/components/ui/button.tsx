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
      className={clsx("p-2 rounded-lg border-1 duration-700", {
        "bg-red-200 hover:bg-red-400": kind === "default",
        "bg-transparent hover:font-bold text-xl": kind === "nav",
      })}
      {...props}
    />
  );
}
