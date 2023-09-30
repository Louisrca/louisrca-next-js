import Button from "../components/ui/button";
import { NavBar } from "../components/nav/navbar-component";
import { GridProject } from "../components/project/grid-project";
import Presentation from "@/components/presentation/presentation-section";
import Footer from "@/components/footer/footer-section";
import { Resume } from "@/components/resume/resume-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between">
      <NavBar />
      <Presentation />
      <Resume />
      <GridProject />
      <Footer />
    </main>
  );
}
