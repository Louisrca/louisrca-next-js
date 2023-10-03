import clsx from "clsx";
import { PropsWithChildren } from "react";

export const H2 = ({
  children,
  kind = "default",
}: PropsWithChildren & {
  kind?: "default" | "indigo" | "green" | "white" | "white-mobile";
}) => {
  return (
    <h1
      className={clsx("text-4xl text-green-400 font-bold", {
        "text-4xl text-indigo-700 font-bold": kind === "indigo",
        "text-4xl text-white font-normal": kind === "white",
        "text-3xl text-white font-normal": kind === "white-mobile",
      })}
    >
      {children}
    </h1>
  );
};
