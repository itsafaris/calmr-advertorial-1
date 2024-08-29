import React from "react";
import { GatsbyBrowser } from "gatsby";
import posthog from "posthog-js";

import { RootWrapper } from "./src/RootWrapper";
import { siteConfig } from "./src/conf";
import { isProdMode } from "./src/utils";

export const wrapRootElement = ({ element }) => {
  return <RootWrapper>{element}</RootWrapper>;
};

export const onClientEntry: GatsbyBrowser["onClientEntry"] = () => {
  posthog.init(siteConfig.posthogApiKey, {
    api_host: siteConfig.posthogApiHost,
    autocapture: true,
    debug: !isProdMode(),
    disable_session_recording: !isProdMode(),
    enable_heatmaps: !isProdMode(),
    disable_compression: true,
    advanced_disable_feature_flags_on_first_load: true,
    advanced_disable_feature_flags: true,
    bootstrap: {
      featureFlags: {
        "linda-page-hero-section": "control",
      },
    },
  });
};
