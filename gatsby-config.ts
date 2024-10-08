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

    {
      resolve: `gatsby-plugin-sharp`,
      options: {
        defaults: {
          placeholder: `blurred`,
          backgroundColor: `transparent`,
        },
      },
    },

    "gatsby-transformer-sharp",
    "gatsby-plugin-tsconfig-paths",

    {
      resolve: "gatsby-plugin-manifest",
      options: {
        icon: "src/images/icon.jpg",
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
