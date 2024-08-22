import pkgjson from "../package.json";

export type SiteConfig = {
  personaName: string;
  websiteHostname: string;
  brandName: string;
  title: string;
  email: string;
  version: string;
  image: string;
  description: string;
  linkToMainProduct: string;
};

export const siteConfig: SiteConfig = {
  personaName: "Linda",
  brandName: "Linda's Adventures",
  version: pkgjson.version,
  email: "lindaharperblog@gmail.com",
  image: "",
  title: "Healthy Living Blog - Linda's Adventure",
  description:
    "Join me on my journey to holistic wellness, where I share tips on clean eating, mindfulness, and family health to help you live your best life.",
  websiteHostname: "https://lindaharper.blog",
  linkToMainProduct: "https://trycalmr.com/sleep-and-burn",
};
