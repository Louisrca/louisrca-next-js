import Button from "@/components/ui/button";
import { ProjectsData } from "@/lib/projects-data";
import { H1 } from "@/components/ui/h1";
import Link from "next/link";
import { ProjectImage } from "@/components/projectImage/project-images";
export default function Page({ params }: { params: { id: string } }) {
  return (
    <div className="">
      {ProjectsData.filter((project) => project.id === parseInt(params.id)).map(
        (project) => (
          <div key={project.id}>
            <H1 kind="indigo">{project.title}</H1>
            <div>
              <Link href={project.href}>
                <Button>View Repo</Button>
              </Link>
            </div>
            <ProjectImage></ProjectImage>
          </div>
        )
      )}
    </div>
  );
}
