import type { LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  name: string;
  description: string;
};

export type Sector = {
  name: string;
  description: string;
  img: string;
};

export type Value = {
  icon: LucideIcon;
  name: string;
  description: string;
};

export type Statistic = {
  name: string;
  prefix?: string;
  number: number;
  suffix?: string;
};
