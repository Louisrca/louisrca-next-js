import { PropsWithChildren } from "react";
import clsx from "clsx";

export const Article = ({
  kind = "default",
  children,
}: PropsWithChildren & { kind?: "default" | "green" | "white" }) => {
  return (
    <article
      className={clsx("text-lg", {
        "text-indigo-700": kind === "default",
        "text-green-400": kind === "green",
        "text-white": kind === "white",
      })}
    >
      {children}
    </article>
  );
};
