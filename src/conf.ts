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
  brandName: "",
  version: pkgjson.version,
  email: "",
  image: "",
  title: "",
  description: "",
  websiteHostname: process.env.GATSBY_WEBSITE_HOSTNAME ?? `http://localhost:8000`,
};
