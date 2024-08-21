import type { GatsbyConfig } from "gatsby";
import { isProdMode } from "./src/utils";
import { PostHogConfig } from "posthog-js";
import dotenv from "dotenv";

dotenv.config();

const config: GatsbyConfig = {
  graphqlTypegen: true,
  plugins: [
    "gatsby-plugin-emotion",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    "gatsby-plugin-tsconfig-paths",

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.png",
      },
    },

    {
      resolve: `gatsby-plugin-posthog`,
      options: {
        apiKey: "phc_8GZnMTIRMuj7aNKBpluPe46MiqUaFn4RiuH4TtCnmme",
        apiHost: "https://us.i.posthog.com",
        head: true,
        isEnabledDevMode: false,
        initOptions: {
          autocapture: false,
          debug: !isProdMode(),
          disable_session_recording: !isProdMode(),
          enable_heatmaps: true,
        } satisfies Partial<PostHogConfig>,
      },
    },

    {
      resolve: `gatsby-plugin-facebook-pixel`,
      options: {
        pixelId: "1151210512780170",
      },
    },

    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: "./src/images/",
      },
      __key: "images",
    },
  ],
};

export default config;
