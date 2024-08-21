import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { SEO } from "@components/SEO";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { siteConfig } from "src/conf";
import { StaticImage } from "gatsby-plugin-image";

export const Head: HeadFC = () => {
  return <SEO title={`My Weight Loss Journey - ${siteConfig.brandName}`} />;
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box>
      <Container>
        <Heading my={4}>Hey! I'm {siteConfig.personaName}</Heading>
        <Text></Text>
        <Flex flexWrap={"wrap"} gap={4}>
          <StaticImage
            alt="personal weight loss blogger picture"
            src="../images/main-avatar.png"
            height={200}
            width={200}
            style={{ flexShrink: 0, width: 160, height: 160 }}
          />
          <Text flex={1} minWidth={240}>
            As a mother of three, navigating the constant demands of family life while transitioning
            from my career as an elementary school teacher to a full-time wellness coach, finding an
            effective weight loss method that could seamlessly fit into my busy routine was no easy
            task. The daily pressures of parenting, coupled with the challenges of maintaining a
            healthy lifestyle amidst school runs, meal preps, and family commitments, made it
            difficult to stick to any weight management plan. Despite trying a variety of
            solutions—from diet plans to exercise routines and natural supplements—nothing seemed to
            truly work.
          </Text>
        </Flex>
        <h1>Congratulations</h1>
      </Container>
    </Box>
  );
};

export default IndexPage;
