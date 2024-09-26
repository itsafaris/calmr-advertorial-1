import posthog from "posthog-js";
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
  posthogApiKey: string;
  posthogApiHost: string;
  linkToMainProduct: () => string;
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
  posthogApiKey: "phc_8GZnMTIRMuj7aNKBpluPe46MiqUaFn4RiuH4TtCnmme",
  posthogApiHost: "https://us.i.posthog.com",
  linkToMainProduct: () => {
    const userid = posthog.get_distinct_id();
    const hash = userid ? `#userid=${userid}` : "";
    return `https://trycalmr.com/quiz-1/quiz/?slideid=goals${hash}`;
  },
};
