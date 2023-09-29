import Link from "next/link";
import Button from "../ui/button";
import { ShapeGrid } from "@/common/svg/shapes-grid";
export default function Presentation() {
  return (
    <div className="w-1/2 sm:ml-8  md:ml-32">
      <figure id="titlePresentation">
        {" "}
        <div className="absolute top-58 z-0">
          <ShapeGrid width={"200"} height={"200"} />
        </div>
        <h1 className="text-6xl z-40 text-white">
          Hi, my name is{" "}
          <span className="bg-gradient-to-l from-indigo-700 via-purple-400 to-teal-400 bg-clip-text text-transparent font-medium">
            Louis Rocca
          </span>
          , I'm a Full Stack Developer!
        </h1>
        <p></p>
      </figure>
    </div>
  );
}
