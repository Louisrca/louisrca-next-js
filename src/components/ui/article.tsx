import { PropsWithChildren } from "react";
import clsx from "clsx";

export const Article = ({
  kind = "default",
  children,
}: PropsWithChildren & { kind?: "default" | "green" | "white" }) => {
  return (
    <article
      className={clsx("text-2xl mt-10 w-3/5", {
        "text-indigo-400": kind === "default",
        "text-green-400": kind === "green",
        "text-white": kind === "white",
      })}
    >
      {children}
    </article>
  );
};
