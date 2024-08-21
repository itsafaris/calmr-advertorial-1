import React from "react";
import { Section, SHeading } from "@components/components";
import { Badge, Box, Flex, Heading, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { siteConfig } from "src/conf";

export function Hero() {
  return (
    <Section mb={0}>
      <Box my={4}>
        <Heading textAlign={"center"}>Hey! I'm {siteConfig.personaName}</Heading>
        <Flex flexWrap={"wrap"} justifyContent={"center"} my={2}>
          <StaticImage
            alt="personal weight loss blogger picture"
            src="../../images/main-avatar.png"
            height={200}
            width={200}
            style={{ flexShrink: 0, width: 80, height: 80, borderRadius: "100%" }}
          />
        </Flex>
        <Text fontSize={"md"} textAlign={"center"} px={4}>
          A mother of three, ex elementary school teacher, now a full-time wellness blogger
        </Text>
      </Box>

      <Box my={10}>
        <Heading as="h2" my={2} fontSize={"2xl"}>
          My 3-year long weight loss journey... And how I finally conquered it
        </Heading>

        <Text fontSize={"sm"}>Updated by {siteConfig.personaName} 14 days ago</Text>
        <Flex gap={2} my={2} flexWrap={"wrap"}>
          <Badge colorScheme="blue">Weight loss experiments</Badge>
          <Badge colorScheme="blue">3 years of research</Badge>
          <Badge colorScheme="blue">Product comparison</Badge>
        </Flex>
      </Box>
    </Section>
  );
}
