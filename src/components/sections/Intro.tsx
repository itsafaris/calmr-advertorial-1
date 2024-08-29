import { SBoldText, Section, SGrid, SItalicText, SLink, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { Badge, Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { siteConfig } from "src/conf";
import { Link } from "gatsby";

export function Intro() {
  return (
    <Section>
      <Box>
        <Heading as="h2" my={2} fontSize={"2xl"}>
          I Tried 10 Weight-Loss Products - Here's My Top Pick for 2024
        </Heading>

        <Text fontSize={"sm"}>Updated by {siteConfig.personaName} 14 days ago</Text>
        <Flex gap={2} mt={2} flexWrap={"wrap"}>
          <Badge textTransform={"unset"} colorScheme="blue">
            #PersonalExperiment
          </Badge>
          <Badge textTransform={"unset"} colorScheme="blue">
            #WeightLoss
          </Badge>
          <Badge textTransform={"unset"} colorScheme="blue">
            #2024
          </Badge>
          <Badge textTransform={"unset"} colorScheme="blue">
            #SuccessStory
          </Badge>
        </Flex>
      </Box>

      <Box>
        <SText>
          Some time around April last year, after yet another failed attempt at losing weight, I
          decided it was time to do things differently. From that moment on, I committed to
          meticulously <SBoldText>documenting every detail of my weight-loss experiments</SBoldText>
          , determined to find a product that truly works for me.
        </SText>
      </Box>

      <SGrid columns={2}>
        <Stack>
          <SItalicText>Before weight loss. 189 lbs. Feb 6, 2023</SItalicText>
          <StaticImage
            height={640}
            alt="before weight loss journey"
            src="../../images/jen-before.jpg"
            style={{ height: "100%" }}
          />
        </Stack>

        <Stack>
          <SItalicText>After weight loss. 143 lbs. May 9, 2024</SItalicText>
          <StaticImage
            height={640}
            alt="after weight loss journey"
            src="../../images/jen-after.jpg"
            style={{ height: "100%" }}
          />
        </Stack>
      </SGrid>

      <SText>
        <SBoldText>Want the short answer?</SBoldText> I personally experimented with 10 distinct
        solutions. The image below displays all of them.{" "}
        <SLink to="/#winner">Go here to see the winner that worked for me.</SLink>
      </SText>
      <Box as={Link} to="/#winner" _hover={{ filter: "brightness(1.1)" }}>
        <StaticImage src="../../images/all-products.jpg" alt="all supplements" />
      </Box>
      <SItalicText>
        From the 10 products that I reviewed, the{" "}
        <SLink to="/#winner">Calmr - Sleep & Burn supplement</SLink> came out on top.
      </SItalicText>
    </Section>
  );
}
