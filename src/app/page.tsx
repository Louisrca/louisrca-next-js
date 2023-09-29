import Button from "../components/ui/button";
import { NavBar } from "../components/nav/navbar-component";
import { GridProject } from "../components/project/grid-project";
import Presentation from "@/components/presentation/presentation-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full bg-green-400 absolute">
        <NavBar />
      </div>
      <div className="flex w-full  justify-start items-center h-screen bg-green-400">
        <Presentation />
      </div>
      <div className="w-full h-screen border-2" id="project">
        <GridProject />
      </div>
      <footer className="text-black">louis rocca</footer>
    </main>
  );
}
