import { Box } from "@chakra-ui/react";

import "@fontsource-variable/eb-garamond";
import { Header } from "@components/Header";

export function Hero() {
  return (
    <Box mb={0} pb={4} bgGradient="linear(to-b, yellow.200, transparent)">
      <Header />
    </Box>
  );
}
