import { SBoldText, Section, SGrid, SItalicText, SLink, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { Badge, Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { siteConfig } from "src/conf";
import { Link } from "gatsby";

const sectionID = "hero-section";

export function Intro() {
  return (
    <Section>
      <Box>
        <Heading as="h2" my={2} fontSize={"2xl"} fontWeight={"bold"}>
          I Tried 10 Weight-Loss Products - Here's My Top Pick for 2024
        </Heading>

        <Text fontSize={["xs", "sm"]} fontWeight={"semibold"} mt={4}>
          By {siteConfig.personaName} | Updated 14 days ago
        </Text>
      </Box>

      <Stack>
        <SGrid columns={2}>
          <Stack position={"relative"}>
            <StaticImage
              height={640}
              alt="before weight loss journey"
              src="../../images/jen-before.jpg"
              style={{ height: "100%" }}
            />

            <Text
              fontSize={["lg", "lg", "xl"]}
              fontWeight={"bold"}
              color="white"
              backgroundColor="black"
              bottom={"6px"}
              left={"50%"}
              transform={"translateX(-50%)"}
              position={"absolute"}
              py={1}
              px={3}
              width={"90%"}
              textAlign={"center"}
              lineHeight={1.2}
            >
              189 lbs
            </Text>
          </Stack>

          <Stack position={"relative"}>
            <StaticImage
              height={640}
              alt="after weight loss journey"
              src="../../images/jen-after.jpg"
              style={{ height: "100%" }}
            />

            <Text
              fontSize={["lg", "lg", "xl"]}
              fontWeight={"bold"}
              color="white"
              backgroundColor="orange.400"
              bottom={"6px"}
              left={"50%"}
              transform={"translateX(-50%)"}
              position={"absolute"}
              py={1}
              px={3}
              width={"90%"}
              textAlign={"center"}
              lineHeight={1.2}
            >
              143 lbs
            </Text>
          </Stack>
        </SGrid>

        <SGrid columns={2}>
          <SItalicText>
            <Text as="span" fontWeight={"bold"} color="black" fontSize={"md"}>
              Week 1.
            </Text>{" "}
            Feb 6, 2023.
          </SItalicText>

          <SItalicText>
            <Text as="span" fontWeight={"bold"} color="black" fontSize={"md"}>
              Week 56.
            </Text>{" "}
            May 9, 2024.
          </SItalicText>
        </SGrid>
      </Stack>

      <Box>
        <SText>
          Some time around April last year, after yet another failed attempt at losing weight, I
          decided it was time to do things differently. From that moment on, I committed to
          experimenting with different products and meticulously documenting every detail of my
          weight-loss progress.{" "}
          <SBoldText>
            To my surprise,{" "}
            <SLink to="/#winner" sectionID={sectionID}>
              one product
            </SLink>{" "}
            stood out from the rest, delivering the best possible results I had ever experienced.
          </SBoldText>
        </SText>
      </Box>

      <SText>
        <SBoldText>Want the short answer?</SBoldText>{" "}
        <SLink to="/#winner" sectionID={sectionID}>
          Go here to see the winner that worked for me.
        </SLink>
      </SText>

      <SText>
        <SBoldText>Or grab a cup of coffee and join me on my journey!</SBoldText>
      </SText>

      <Stack as={Link} to="/#winner" _hover={{ filter: "brightness(1.1)" }}>
        <StaticImage src="../../images/all-products.jpg" alt="all supplements" />
        <SItalicText>
          From the 10 products that I reviewed,{" "}
          <SLink to="/#winner" sectionID={sectionID}>
            one product
          </SLink>{" "}
          came out on top.
        </SItalicText>
      </Stack>
    </Section>
  );
}
