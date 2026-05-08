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
    href: "https://www.linkedin.com/company/ing-const-jp/",
    name: "LinkedIn",
  },
  {
    icon: IconBrandFacebookFilled,
    href: "https://www.facebook.com/ingconstjp",
    name: "Facebook",
  },
  {
    icon: IconBrandInstagram,
    href: "https://www.instagram.com/ing_const_jp/",
    name: "Instagram",
  },
  {
    icon: IconBrandYoutubeFilled,
    href: "https://www.youtube.com/@ingconstjp",
    name: "YouTube",
  },
];

export default socialNetworks;
