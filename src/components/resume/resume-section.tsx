import { H1 } from "../ui/h1";
import { Article } from "../ui/article";
import { H2 } from "../ui/h2";

export const Resume = () => {
  return (
    <section className="h-screen p-8" id="resume">
      <div className="p-8">
        <H2 kind="default">How am I ?</H2>

        <Article kind="default">
          Im studing at Hetic
        </Article>
      </div>
    </section>
  );
};
