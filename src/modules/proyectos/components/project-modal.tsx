"use client";

import type { Project } from "@/payload-types";
import { Badge } from "@/shared/components/ui/badge";
import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { getMediaUrl } from "@/shared/lib/utils";

type Props = {
  project: Project;
};

export function ProjectModal({ project }: Props) {
  return (
    <Dialog>
      <DialogTrigger
        render={
          <Button variant="link" className="cursor-pointer p-0 text-primary">
            Ver detalle
          </Button>
        }
      />
      <DialogContent className="flex flex-col gap-0 overflow-hidden p-0 sm:max-w-5xl md:flex-row">
        <img
          src={getMediaUrl(project.image)}
          alt={project.name}
          className="aspect-video h-full w-full max-w-sm object-cover object-center md:aspect-square"
        />
        <div className="flex flex-col justify-center gap-6 px-6 py-4">
          <DialogHeader>
            <div className="flex flex-wrap items-center gap-2">
              <Badge size={"lg"} variant="muted">
                {project.sector}
              </Badge>
              <Badge size={"lg"} variant="pending">
                {project.serviceArea}
              </Badge>
              <Badge size={"lg"} variant="succes">
                {project.status}
              </Badge>
            </div>
            <DialogTitle className="font-bold font-condensed text-3xl text-secondary">
              {project.name}
            </DialogTitle>
          </DialogHeader>

          <div className="grid grid-cols-2 gap-4 text-sm">
            <div>
              <span className="text-muted-foreground text-xs uppercase tracking-widest">
                Cliente
              </span>
              <p className="font-semibold text-secondary">{project.client}</p>
            </div>
            <div>
              <span className="text-muted-foreground text-xs uppercase tracking-widest">
                Ubicación
              </span>
              <p className="font-semibold text-secondary">{project.location}</p>
            </div>
            <div>
              <span className="text-muted-foreground text-xs uppercase tracking-widest">
                Año
              </span>
              <p className="font-semibold text-secondary">{project.year}</p>
            </div>
            <div>
              <span className="text-muted-foreground text-xs uppercase tracking-widest">
                Modalidad
              </span>
              <p className="font-semibold text-secondary">{project.modality}</p>
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed">
            {project.summary}
          </p>

          <DialogFooter>
            <Button variant="default">Consultar proyecto similar</Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}
