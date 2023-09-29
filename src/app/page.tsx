import Button from "../components/ui/button";
import { NavBar } from "../components/nav/navbar-component";
import { GridProject } from "../components/project/grid-project";
import Presentation from "@/components/presentation/presentation-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="w-full">
        <NavBar />
      </div>
      <div className="w-full">
        <Presentation />
      </div>
      <div className="w-full h-max border-2">
        <GridProject />
      </div>
      <footer>louis rocca</footer>
    </main>
  );
}
