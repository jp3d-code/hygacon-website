import { imageSrc, images } from "@/shared/data/images";

export function PageTitle({ title }: { title: string }) {
  return (
    <div className="relative flex w-full items-center justify-center py-30">
      <img
        className="absolute inset-0 h-full w-full object-cover"
        src={imageSrc(images.eff50fdf)}
        alt=""
      />
      <div className="absolute inset-0 h-full w-full bg-secondary/80"></div>
      <h1 className="z-10 font-condensed font-extrabold text-5xl text-secondary-foreground uppercase">
        {title}
      </h1>
    </div>
  );
}
