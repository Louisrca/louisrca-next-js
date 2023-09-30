import { ProjectsData } from "@/lib/projects-data";
import Link from "next/link";
import Button from "../ui/button";
import Card from "../ui/card";

export function GridProject() {
  return (
    <section className="w-full h-screen border-2" id="project">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 h-full">
        {ProjectsData.map((project) => {
          return (
            <Card key={project.id}>
              <h1 className="text-4xl text-indigo-700">{project.title}</h1>
              <div className="flex flex-row gap-4 h-max">
                <Link href={project.href} target={"_blank"}>
                  <Button kind="default">View Repo</Button>
                </Link>
                <Button kind="default">View Demo</Button>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
