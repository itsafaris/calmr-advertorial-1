import {
  SBoldText,
  Section,
  SGrid,
  SHeading,
  SItalicText,
  SLink,
  SText,
} from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { Badge, Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { siteConfig } from "src/conf";
import { Link } from "gatsby";

export function Intro() {
  return (
    <Section>
      <Box mb={3} mt={4}>
        <Heading as="h2" my={2} fontSize={"2xl"}>
          My Weight Loss Experiment: 10 Products and One Game-Changer
        </Heading>

        <Text fontSize={"sm"}>Updated by {siteConfig.personaName} 14 days ago</Text>
        <Flex gap={2} my={2} flexWrap={"wrap"}>
          <Badge textTransform={"unset"} colorScheme="blue">
            #PersonalJourney
          </Badge>
          <Badge textTransform={"unset"} colorScheme="blue">
            #WeightLoss
          </Badge>
          <Badge textTransform={"unset"} colorScheme="blue">
            #3-years-of-research
          </Badge>
          <Badge textTransform={"unset"} colorScheme="blue">
            #SuccessStory
          </Badge>
        </Flex>
      </Box>
      <SGrid columns={2}>
        <Stack>
          <SItalicText>Before weight loss. 189 lbs. Feb 6, 2023</SItalicText>
          <StaticImage
            height={700}
            alt="before weight loss journey"
            src="../../images/me-before.jpg"
          />
        </Stack>

        <Stack>
          <SItalicText>After weight loss. 143 lbs. Mar 9, 2024</SItalicText>
          <StaticImage
            height={700}
            alt="after weight loss journey"
            src="../../images/me-after.jpg"
          />
        </Stack>
      </SGrid>
      <SText>
        As a mother of two kids, navigating the constant demands of family life while transitioning
        from my career as an elementary school teacher to a full-time wellness blogger, finding an
        effective weight loss method that could seamlessly fit into my busy routine was no easy
        task. The daily pressures of parenting, coupled with the challenges of maintaining a healthy
        lifestyle amidst school runs, meal preps, and family commitments, made it difficult to stick
        to any weight management plan.
      </SText>
      <SText>
        Despite trying a variety of solutions—from diet plans to exercise routines and natural
        supplements—nothing seemed to truly work.
      </SText>
      <SText>
        But now, I'm thrilled to share that I've finally discovered a weight loss strategy that
        genuinely works for me.
      </SText>
      " "
      <SText>
        <SBoldText>Want the quick summary?</SBoldText> I personally experimented with 10 distinct
        solutions. The image below displays all of them{" "}
        <SLink to="/#winner">
          👉 Or... just skip to the most effective one that worked for me.
        </SLink>
      </SText>
      <Box as={Link} to="/#winner" _hover={{ filter: "brightness(1.1)" }}>
        <StaticImage src="../../images/all-products.jpg" alt="all supplements" />
      </Box>
      <SItalicText>
        After evaluating various methods, the{" "}
        <SLink to="/#winner">Calmr - Sleep & Burn supplement</SLink> came out on top.
      </SItalicText>
    </Section>
  );
}
