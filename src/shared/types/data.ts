import type { LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  name: string;
  image: string;
  brochure: string;
  excerpt: string;
  description: string;
  categories: {
    label: string;
    items: string[];
  }[];
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

export type OrgStatistic = {
  num: number;
  label: string;
  desc: string;
};

export type SocialNetwork = {
  icon: LucideIcon;
  href: string;
  name: string;
};

export type HistoryEvent = {
  year: string;
  title: string;
  description: string;
};

export type TeamMember = {
  name: string;
  role: string;
  img?: string;
  bio?: string;
};

export type CorporateValue = {
  title: string;
  description: string;
};

export type Certification = {
  name: string;
  description: string;
  img: string;
};

type IdentityItemBase = {
  id: string;
  title: string;
  icon: LucideIcon;
};

export type IdentityItemContent = IdentityItemBase & {
  content: string;
};

export type IdentityItemList = IdentityItemBase & {
  items: string[];
};

export type IdentityItem = IdentityItemContent | IdentityItemList;

export type Pilar = {
  title: string;
  description: string;
};

export type ManagementSystem = {
  pilars: Pilar[];
  commitments: string[];
};

export type Image = {
  name: string;
  alt: string;
  description: string;
};
