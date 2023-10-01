import { ProjectsData } from "@/lib/projects-data";
import Link from "next/link";
import Button from "../ui/button";
import Card from "../ui/card";
import { H1 } from "../ui/h1";

export function GridProject() {
  const backgroundImageUrl = "@/common/img/journey/journey-description.png";
  return (
    <section className="w-full h-screen border-2" id="project">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 h-full">
        {ProjectsData.map((project) => {
          return (
            <Card key={project.id}>
              <div
                className="h-full bg-no-repeat bg-cover  flex justify-end flex-col p-8"
                style={{ backgroundImage: `url('${project.img}')` }}
              >
                <div className="flex flex-row gap-4 h-max">
                  <Link href={project.href} target={"_blank"}>
                    <Button kind="default">View Repo</Button>
                  </Link>
                  <Link href={`/projects/${project.id}`}>
                    <Button kind="default">View Details</Button>
                  </Link>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
