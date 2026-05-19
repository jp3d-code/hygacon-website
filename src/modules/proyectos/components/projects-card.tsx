import { ProjectModal } from "@/modules/proyectos/components/project-modal";
import { Badge } from "@/shared/components/ui/badge";
import { Card, CardContent, CardFooter } from "@/shared/components/ui/card";
import type { Project } from "@/shared/types/data";

type Props = {
  project: Project;
  i: number;
};

export function ProjectCard({ project, i }: Props) {
  return (
    <Card key={project.id} className="shadow-sm" i={i}>
      <img
        src={project.image}
        alt={project.name}
        className="h-56 w-full object-cover"
      />
      <CardContent className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{project.serviceArea}</Badge>
            <Badge variant="outline">{project.status}</Badge>
            <Badge variant="outline">{project.sector}</Badge>
          </div>
          <ProjectModal project={project} />
        </div>
        <div>
          <h3 className="font-bold text-lg text-secondary">{project.name}</h3>
          <p className="text-muted-foreground text-sm">{project.location}</p>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="font-semibold text-muted-foreground">
            {project.client}
          </span>
          <span className="text-muted-foreground">{project.year}</span>
        </div>
      </CardContent>
      <CardFooter className="justify-between">
        <span className="text-muted-foreground text-xs uppercase tracking-widest">
          {project.serviceArea}
        </span>
        <span className="text-muted-foreground text-xs uppercase tracking-widest">
          {project.status}
        </span>
      </CardFooter>
    </Card>
  );
}
