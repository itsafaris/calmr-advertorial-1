import { Section } from "@components/components";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { siteConfig } from "src/conf";

import "@fontsource-variable/eb-garamond";

export function Hero() {
  return (
    <Section mb={0}>
      <Box my={4}>
        <Heading fontFamily={"'EB Garamond Variable', serif"} textAlign={"center"}>
          Hey! I'm {siteConfig.personaName}
        </Heading>

        <Flex flexWrap={"wrap"} justifyContent={"center"} my={2}>
          <StaticImage
            alt="personal weight loss blogger picture"
            src="../../images/main-avatar.jpg"
            height={200}
            width={200}
            style={{ flexShrink: 0, width: 80, height: 80, borderRadius: "100%" }}
          />
        </Flex>

        <Text
          fontFamily={"'EB Garamond Variable', serif"}
          fontSize={"xl"}
          textAlign={"center"}
          px={4}
        >
          A mother of two, ex elementary school teacher, now a full-time wellness blogger
        </Text>
      </Box>
    </Section>
  );
}
