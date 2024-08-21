import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { SEO } from "@components/SEO";
import { Badge, Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
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
      <Container>
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

          <Box mt={8}>
            <StaticImage
              alt="before and after weight loss journey"
              src="../images/before-after.jpg"
              height={600}
              width={600}
              style={{ flexShrink: 0 }}
            />
            <Flex mb={4}>
              <Text flex={1} fontSize={"sm"}>
                Before weight loss. 174 lbs. Mar 14, 2023
              </Text>
              <Text flex={1} fontSize={"sm"}>
                Before weight loss. 174 lbs. Mar 14, 2023
              </Text>
            </Flex>

            <Stack spacing={4}>
              <Text>
                As a mother of three, navigating the constant demands of family life while
                transitioning from my career as an elementary school teacher to a full-time wellness
                coach, finding an effective weight loss method that could seamlessly fit into my
                busy routine was no easy task. The daily pressures of parenting, coupled with the
                challenges of maintaining a healthy lifestyle amidst school runs, meal preps, and
                family commitments, made it difficult to stick to any weight management plan.
              </Text>
              <Text>
                Despite trying a variety of solutions—from diet plans to exercise routines and
                natural supplements—nothing seemed to truly work.
              </Text>
              <Text>
                But now, I'm thrilled to share that I've finally discovered a weight loss strategy
                that genuinely works for me.
              </Text>
            </Stack>

            <Section>
              <SText>
                <SBoldText>Want the short version?</SBoldText> I personally tried 10 different
                weight loss methods. All the solutions I experimented with are shown in the image
                below. <SLink to="">Click to skip to the winner that worked best for me.</SLink>
              </SText>

              <StaticImage src="../images/all_weight_loss_methods_1.png" alt="" />

              <SItalicText>
                I reviewed all these weight loss methods, and{" "}
                <SBoldText>the Biome Secret Superfood Weight Loss Shake</SBoldText> came out on top.
              </SItalicText>

              <SText>
                Opting for Contrave felt right—it seemed to match what I was looking for in my
                weight loss journey. It wasn’t just about shedding weight but about managing my
                eating habits in a way that felt more natural and kept me feeling balanced. ‍
              </SText>

              <SItalicText>
                Hydroxycut + Women: Curbed my appetite, but the high caffeine made regular use
                tough.
              </SItalicText>

              <SImageGrid columns={[1, 2]}>
                <StaticImage src="../images/biome_1.jpeg" alt="" />
                <StaticImage src="../images/biome_1.jpeg" alt="" />
              </SImageGrid>

              <SImageGrid></SImageGrid>
            </Section>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default IndexPage;
