import clsx from "clsx";
import { PropsWithChildren } from "react";

export const H1 = ({
  children,
  kind = "default",
}: PropsWithChildren & {
  kind?: "default" | "indigo" | "green" | "white";
}) => {
  return (
    <h1
      className={clsx("text-6xl text-green-400 font-bold", {
        "text-6xl text-indigo-700 font-bold": kind === "indigo",
        "text-6xl text-white font-normal": kind === "white",
      })}
    >
      {children}
    </h1>
  );
};
