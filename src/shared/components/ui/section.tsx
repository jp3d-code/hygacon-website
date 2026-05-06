import { cn } from "@/shared/lib/utils";

export function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "flex w-full items-center justify-center px-4 py-20",
        className,
      )}
      {...props}
    >
      {children}
    </section>
  );
}

export function Container({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex w-full max-w-7xl flex-col items-center justify-center gap-12",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function SectionHeader({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4",
        className,
      )}
      {...props}
    >
      {children}
      <div className="h-0.75 w-16 rounded-full bg-primary"></div>
    </div>
  );
}

export function SectionSubtitle({
  children,
  className,
  ...props
}: React.ComponentProps<"h2">) {
  return (
    <h2
      className={cn(
        "text-primary text-sm uppercase tracking-widest",
        className,
      )}
      {...props}
    >
      {children}
    </h2>
  );
}

export function SectionTitle({
  first,
  second,
  className,
  ...props
}: React.ComponentProps<"h3"> & {
  first: string;
  second: string;
}) {
  return (
    <h3 className={cn("font-black text-4xl uppercase", className)} {...props}>
      <span className="text-secondary">{first}</span>{" "}
      <span className="text-primary">{second}</span>
    </h3>
  );
}
