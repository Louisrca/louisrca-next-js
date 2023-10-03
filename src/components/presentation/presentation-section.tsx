import { GridShapes } from "@/common/svg/grid-shapes";
import { RoundedShapes } from "@/common/svg/rounded-shape";
import { StreakShapes } from "@/common/svg/streak-shape";
import Link from "next/link";
import Button from "../ui/button";
import { H1 } from "../ui/h1";
export default function Presentation() {
  return (
    <section className="flex w-full h-screen justify-start items-center bg-indigo-400">
      <div>
        <div
          className="sm:hidden md:block absolute left-1/2 top-1/3"
          style={{ zIndex: "0" }}
          id="svg-grid-shape"
        >
          <GridShapes id="svg-grid-shape" width={"400"} height={"400"} />
        </div>
        <div className="sm:hidden md:block absolute" id="svg-rounded-shape">
          <RoundedShapes id="svg-rounded-shape" />
        </div>
        <div className="sm:hidden md:block absolute" id="svg-streak-shape">
          <StreakShapes id="svg-streak-shape" width={"400"} height={"400"} />
        </div>
        <div
          className="sm:w-full sm:bg-transparent sm:p-10 md:w-1/2 md:ml-32 md:border-2 md:p-4 rounded-0 md:border-white z-40 bg-green-400"
          style={{
            boxShadow: "10px 10px 0 white",
            borderRadius: "0px",
            zIndex: "2",
          }}
          id="titleName"
        >
          <H1 kind="white-mobile">
            I&apos;m Louis Rocca a
            <span className="sm:text-green-400 text-indigo-500 font-bold ">
              {" "}
              Front End Developer.
            </span>
          </H1>
        </div>{" "}
        <div
          className="sm:flex sm:justify-start sm:ml-10 sm-w-full md:absolute md:left-1/3 md:top-2/3"
          id="buttonTopSection"
        >
          <Link href={"#resume"}>
            {" "}
            <Button kind="green">Know me ?</Button>
          </Link>
        </div>
      </div>
      <div
        className="sm:hidden md:block h-full bg-green-400"
        style={{ width: "41rem" }}
      ></div>
    </section>
  );
}
