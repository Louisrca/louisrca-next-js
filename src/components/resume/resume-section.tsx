import { H1 } from "../ui/h1";
import { Article } from "../ui/article";
import { H2 } from "../ui/h2";
import { WaveShapes } from "@/common/svg/wave-shapes";

export const Resume = () => {
  return (
    <section className="w-full m-28 p-8 grid-cols-1" id="resume">
      <div>
        <WaveShapes
          id="svg-wave-shape"
          width={400}
          height={400}
          className="  sm:hidden
          md:block
          absolute"
          style={{ top: "70rem", left: "-10rem" }}
        />
      </div>
      <H2 kind="default">How am I ?</H2>
      <div className="p-8 flex flex-col justify-center items-center">
        <Article kind="default">
          I&apos;m studing at Hetic The Great School of Tech & Digital Business.
          This year, I will be graduating with bachelor&apos;s degree in web
          development. During my three years at the Hetic School in Montreuil, I
          acquired a solid foundation of web development skills that prepared me
          for a promising career in this field.
        </Article>
        <Article kind="default">
          I learned to master basic programming languages like HTML, CSS,
          JavaScript and popular frameworks like React and Node.js. I also
          gained a thorough understanding of web design principles, usability
          and user experience (UX). In addition to technical skills, I gained
          valuable experience collaborating on projects, managing databases,
          using release management tools and learning how to effectively solve
          problems.
        </Article>
      </div>
    </section>
  );
};
