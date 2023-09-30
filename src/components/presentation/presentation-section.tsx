import Link from "next/link";
import Button from "../ui/button";
import { GridShapes } from "@/common/svg/grid-shapes";
import { RoundedShapes } from "@/common/svg/rounded-shape";
import { StreakShapes } from "@/common/svg/streak-shape";
export default function Presentation() {
  return (
    <section className="flex w-full  justify-start items-center h-screen bg-indigo-400">
      <div>
        <div
          className="sm:hidden md:block absolute left-1/2 top-1/3"
          style={{ zIndex: "0" }}
          id="svg-grid-shape"
        >
          <GridShapes id="svg-grid-shape" width={"400"} height={"400"} />
        </div>

        <div
          className="sm:hidden md:block absolute"
          style={{ top: "0rem", left: "-4rem" }}
          id="svg-rounded-shape"
        >
          <RoundedShapes id="svg-rounded-shape" width={"400"} height={"400"} />
        </div>

        <div
          className="sm:hidden md:block absolute"
          style={{ top: "50rem", left: "90rem" }}
          id="svg-streak-shape"
        >
          <StreakShapes id="svg-streak-shape" width={"400"} height={"400"} />
        </div>

        <div
          className="sm:w-full sm:bg-transparent sm:border-0 md:w-1/2 md:ml-32 md:border-2 p-4 rounded-8 md:border-white z-40 bg-green-400"
          style={{
            boxShadow: "10px 10px 0 white",
            borderRadius: "8px",
            zIndex: "2",
          }}
          id="titleName"
        >
          <h1 className=" text-6xl z-40 text-white" id="titlePresentation">
            I'm Louis Rocca a
            <span className="sm:text-green-400 text-indigo-500 font-bold">
              {" "}
              Full Stack Developer.
            </span>
          </h1>
        </div>
      </div>
      <div className="sm:hidden md:block w-1/3 h-full bg-green-400"></div>
    </section>
  );
}
