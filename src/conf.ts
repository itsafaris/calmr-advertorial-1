import pkgjson from "../package.json";

export type SiteConfig = {
  websiteHostname: string;
  brandName: string;
  title: string;
  email: string;
  version: string;
  image: string;
  description: string;
};

export const siteConfig: SiteConfig = {
  brandName: "Linda Harper",
  version: pkgjson.version,
  email: "lindaharperblog@gmail.com",
  image: "",
  title: "Linda's Health Adventures",
  description:
    "Join me on my journey to holistic wellness, where she shares tips on clean eating, mindfulness, and family health to help you live your best life.",
  websiteHostname: "https://lindaharper.blog",
};
