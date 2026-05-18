import type { LucideIcon } from "lucide-react";

export type Service = {
  icon: LucideIcon;
  name: string;
  image: string;
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

export type AssociatedCompany = {
  name: string;
  createdAt: string;
  registration: string;
  purpose: string;
};

export type ClientItem = {
  name: string;
};

export type ClientGroup = {
  id: string;
  title: string;
  description?: string;
  items: ClientItem[];
};

export type ClientCommitment = {
  title: string;
  description: string;
};

export type ProjectItem = {
  id: string;
  name: string;
  sector: string;
  serviceArea: string;
  status: string;
  country: string;
  client: string;
  location: string;
  year: string;
  modality: string;
  summary: string;
  image: string;
};
