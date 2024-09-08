import { SBoldText, Section, SGrid, SItalicText, SLink, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { Badge, Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { siteConfig } from "src/conf";
import { Link } from "gatsby";

export function Intro() {
  return (
    <Section>
      <Box>
        <Heading as="h2" my={2} fontSize={"2xl"} fontWeight={"black"}>
          I Tried 10 Weight-Loss Products - Here's My Top Pick for 2024
        </Heading>

        <Text fontSize={["xs", "sm"]} fontWeight={"semibold"} mt={4}>
          By {siteConfig.personaName} | Updated 14 days ago
        </Text>

        {/* <Flex gap={2} mt={2} flexWrap={"wrap"}>
          <Badge textTransform={"unset"} fontWeight={"regular"} backgroundColor={"blue.50"}>
            #PersonalExperiment
          </Badge>
          <Badge textTransform={"unset"} fontWeight={"regular"} backgroundColor={"blue.50"}>
            #WeightLoss
          </Badge>
          <Badge textTransform={"unset"} fontWeight={"regular"} backgroundColor={"blue.50"}>
            #SuccessStory
          </Badge>
        </Flex> */}
      </Box>

      <SGrid columns={2}>
        <Stack position={"relative"}>
          <SItalicText>
            <Text as="span" fontWeight={"bold"} color="black" fontSize={"lg"}>
              189 lbs.{" "}
            </Text>{" "}
            Feb 6, 2023.
          </SItalicText>

          <StaticImage
            height={640}
            alt="before weight loss journey"
            src="../../images/jen-before.jpg"
            style={{ height: "100%" }}
          />

          <Text
            fontSize={["md", "md", "xl"]}
            fontWeight={"semibold"}
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
            BEFORE
          </Text>
        </Stack>

        <Stack position={"relative"}>
          <SItalicText>
            <Text as="span" fontWeight={"bold"} color="black" fontSize={"lg"}>
              143 lbs.{" "}
            </Text>{" "}
            May 9, 2024.
          </SItalicText>

          <StaticImage
            height={640}
            alt="after weight loss journey"
            src="../../images/jen-after.jpg"
            style={{ height: "100%" }}
          />

          <Text
            fontSize={["md", "md", "xl"]}
            fontWeight={"semibold"}
            color="white"
            backgroundColor="pink.300"
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
            AFTER
          </Text>
        </Stack>
      </SGrid>

      <Box>
        <SText>
          Some time around April last year, after yet another failed attempt at losing weight, I
          decided it was time to do things differently. From that moment on, I committed to
          experimenting with different products and meticulously documenting every detail of my
          weight-loss progress.{" "}
          <SBoldText>
            To my surprise, <SLink to="/#winner">one product</SLink> stood out from the rest,
            delivering the best possible results I had ever experienced.
          </SBoldText>
        </SText>
      </Box>

      <SText>
        <SBoldText>Want the short answer?</SBoldText>{" "}
        <SLink to="/#winner">Go here to see the winner that worked for me.</SLink>
      </SText>

      <SText>
        <SBoldText>Or grab a cup of coffee and join me on my journey!</SBoldText>
      </SText>

      <Stack as={Link} to="/#winner" _hover={{ filter: "brightness(1.1)" }}>
        <StaticImage src="../../images/all-products.jpg" alt="all supplements" />
        <SItalicText>
          From the 10 products that I reviewed, <SLink to="/#winner">one product</SLink> came out on
          top.
        </SItalicText>
      </Stack>
    </Section>
  );
}
