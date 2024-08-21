import { ChakraTheme, DeepPartial, extendTheme } from "@chakra-ui/react";
import "@fontsource-variable/open-sans";
import "@fontsource-variable/eb-garamond";

const extensions: DeepPartial<ChakraTheme> = {
  fonts: {
    heading: `'Open Sans Variable', sans-serif`,
    body: `'Open Sans Variable', sans-serif`,
  },
  components: {
    Heading: {
      baseStyle: {
        color: "black",
      },
    },
  },
};

export const theme = extendTheme(extensions);
