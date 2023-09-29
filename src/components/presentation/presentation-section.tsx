import Link from "next/link";
import Button from "../ui/button";
import { ShapeGrid } from "@/common/svg/shapes-grid";
export default function Presentation() {
  return (
    <>
      <div className="absolute left-1/2 top-1/3">
        <ShapeGrid width={"400"} height={"400"} />
      </div>
      <div
        className="w-1/2 sm:ml-8 md:ml-32 p-4 border-4 border-white z-50 bg-green-400"
        style={{
          boxShadow: "8px 8px 0 white",
        }}
      >
        <h1 className="text-6xl z-40 text-white" id="titlePresentation">
          Hi, my name is{" "}
          <span className="bg-gradient-to-l from-indigo-700 via-purple-400 to-teal-300 bg-clip-text text-transparent font-medium">
            Louis Rocca
          </span>
          , I'm a Full Stack Developer!
        </h1>
        <p></p>
      </div>
    </>
  );
}
