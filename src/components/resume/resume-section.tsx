import { H1 } from "../ui/h1";
import { Article } from "../ui/article";

export const Resume = () => {
  return (
    <section className="h-screen p-8" id="resume">
      <div className="p-8">
        <H1 kind="default">How am I ?</H1>

        <Article kind="default">Voici ma description</Article>
      </div>
    </section>
  );
};
