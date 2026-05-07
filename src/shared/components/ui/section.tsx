import React from "react";
import { cn } from "@/shared/lib/utils";

export function Section({
  className,
  children,
  ...props
}: React.ComponentProps<"section">) {
  return (
    <section
      className={cn(
        "flex w-full items-center justify-center px-4 pt-20 pb-24",
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
        "flex w-full max-w-7xl flex-col items-center justify-center gap-20",
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
  const childrenArray = React.Children.toArray(children);

  const separator = (
    <div className="h-0.75 w-16 rounded-full bg-primary" key="separator" />
  );

  const content =
    childrenArray.length >= 3
      ? [...childrenArray.slice(0, 2), separator, ...childrenArray.slice(2)]
      : [...childrenArray, separator];

  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center gap-4",
        className,
      )}
      {...props}
    >
      {content}
    </div>
  );
}

export function SectionOverline({
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
    <h3
      className={cn(
        "flex flex-wrap items-center justify-center font-black text-4xl uppercase",
        className,
      )}
      {...props}
    >
      <span className="text-secondary">{first}</span>{" "}
      <span className="text-primary">{second}</span>
    </h3>
  );
}

export function SectionDescription({
  children,
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      className={cn(
        "w-full max-w-xl text-center text-lg text-muted-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
}
