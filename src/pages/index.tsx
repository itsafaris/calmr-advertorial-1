import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { SEO } from "@components/SEO";
import { Badge, Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { siteConfig } from "src/conf";
import { StaticImage } from "gatsby-plugin-image";
import { SGrid, Section, SItalicText, SLink, SText } from "@components/components";
import { Content } from "@components/Content";

export const Head: HeadFC = () => {
  return <SEO title={`My Weight Loss Journey - ${siteConfig.brandName}`} />;
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box>
      <Container maxW="container.md">
        <Box my={4}>
          <Heading textAlign={"center"}>Hey! I'm {siteConfig.personaName}</Heading>
          <Flex flexWrap={"wrap"} justifyContent={"center"} my={2}>
            <StaticImage
              alt="personal weight loss blogger picture"
              src="../images/main-avatar.png"
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

        <Content />
      </Container>
    </Box>
  );
};

export default IndexPage;
