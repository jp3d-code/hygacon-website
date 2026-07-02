import {
  IconBrandFacebookFilled,
  IconBrandInstagram,
  IconBrandLinkedinFilled,
  IconBrandYoutubeFilled,
} from "@tabler/icons-react";
import type { SocialNetwork } from "@/shared/types/data";

const socialNetworks: SocialNetwork[] = [
  {
    icon: IconBrandLinkedinFilled,
    href: "https://www.linkedin.com/company/hygacon/",
    name: "LinkedIn",
  },
  {
    icon: IconBrandFacebookFilled,
    href: "https://www.facebook.com/consorciohygacon",
    name: "Facebook",
  },
  {
    icon: IconBrandInstagram,
    href: "https://www.instagram.com/consorcio_hygacon/",
    name: "Instagram",
  },
  {
    icon: IconBrandYoutubeFilled,
    href: "https://www.youtube.com/@consorciohygacon",
    name: "YouTube",
  },
];

export default socialNetworks;
