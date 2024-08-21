import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { SEO } from "@components/SEO";
import { Box, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { siteConfig } from "src/conf";
import { StaticImage } from "gatsby-plugin-image";
import {
  SImageGrid,
  Section,
  SHeading,
  SBoldText,
  SItalicText,
  SLink,
  SText,
} from "@components/SText";

export const Head: HeadFC = () => {
  return <SEO title={`My Weight Loss Journey - ${siteConfig.brandName}`} />;
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box>
      <Container maxW={"container.md"}>
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

          <Section>
            <SText>
              <SBoldText>Want the short version?</SBoldText> I personally tried 10 different weight
              loss methods. All the solutions I experimented with are shown in the image below.{" "}
              <SLink to="">Click to skip to the winner that worked best for me.</SLink>
            </SText>

            <StaticImage src="../images/all_weight_loss_methods_1.png" alt="" />

            <SItalicText>
              I reviewed all these weight loss methods, and{" "}
              <SBoldText>the Biome Secret Superfood Weight Loss Shake</SBoldText> came out on top.
            </SItalicText>

            <SText>
              Opting for Contrave felt right—it seemed to match what I was looking for in my weight
              loss journey. It wasn’t just about shedding weight but about managing my eating habits
              in a way that felt more natural and kept me feeling balanced. ‍
            </SText>

            <SItalicText>
              Hydroxycut + Women: Curbed my appetite, but the high caffeine made regular use tough.
            </SItalicText>

            <SImageGrid columns={[1, 2]}>
              <StaticImage src="../images/biome_1.jpeg" alt="" />
              <StaticImage src="../images/biome_1.jpeg" alt="" />
            </SImageGrid>

            <SImageGrid></SImageGrid>
          </Section>
        </Flex>
      </Container>
    </Box>
  );
};

export default IndexPage;
