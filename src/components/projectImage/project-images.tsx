import { PropsWithChildren } from "react";

export const ProjectImage = ({ children }: PropsWithChildren) => {
  return <div className="rounded border-2 border-black">{children}</div>;
};
