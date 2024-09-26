import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";
import { SEO } from "@components/SEO";
import { Box, Container, Heading, Stack, Text } from "@chakra-ui/react";
import { siteConfig } from "src/conf";
import { Footer } from "@components/Footer";
import { FloatingBar } from "@components/FloatingBar";
import { Hero } from "@components/sections/Hero";
import { SBoldText, Section, SGrid, SItalicText, SLink, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";

export const Head: HeadFC = () => {
  return (
    <SEO
      title={`My Weight Loss Journey - ${siteConfig.brandName}`}
      description="Trouble Losing Weight? Find The Reason Why"
    />
  );
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box>
      <Hero />

      <Container maxW="container.md">
        <Section>
          <Box>
            <Heading as="h2" my={2} fontSize={["2xl", "3xl"]} fontWeight={"bold"} lineHeight={1.3}>
              Results of My Weight Loss Journey: This Could Be Why Most Women Are Struggling to Lose
              Weight in 2024
            </Heading>

            <Text fontSize={["xs", "sm"]} fontWeight={"semibold"} mt={4}>
              By {siteConfig.personaName} | Updated 3 days ago
            </Text>
          </Box>

          <Stack>
            <SGrid columns={2}>
              <Stack position={"relative"}>
                <StaticImage
                  height={640}
                  alt="before weight loss journey"
                  src="../images/jen-before.jpg"
                  style={{ height: "100%" }}
                />

                <Stack
                  bottom={0}
                  position={"absolute"}
                  bgGradient={"linear(to-b, transparent, #000000b0)"}
                  height={"25%"}
                  width={"full"}
                  justifyContent={"flex-end"}
                >
                  <Text
                    fontSize={["18px", "18px", "25px"]}
                    fontWeight={"bold"}
                    color="white"
                    textShadow={"0 0 6px black"}
                    width={"100%%"}
                    textAlign={"center"}
                    lineHeight={1.2}
                    mb={2}
                  >
                    189lbs
                  </Text>
                </Stack>
              </Stack>

              <Stack position={"relative"}>
                <StaticImage
                  height={640}
                  alt="after weight loss journey"
                  src="../images/jen-after.jpg"
                  style={{ height: "100%" }}
                />

                <Stack
                  bottom={0}
                  position={"absolute"}
                  bgGradient={"linear(to-b, transparent, #000000b0)"}
                  height={"25%"}
                  width={"full"}
                  justifyContent={"flex-end"}
                  spacing={0}
                >
                  <Text
                    fontSize={["28px", "28px", "45px"]}
                    fontWeight={"bold"}
                    color="yellow.300"
                    textShadow={"0 0 6px black"}
                    width={"100%%"}
                    textAlign={"center"}
                    lineHeight={1.2}
                  >
                    - 46lbs
                  </Text>
                  <Text
                    fontSize={["18px", "18px", "25px"]}
                    fontWeight={"bold"}
                    color="white"
                    textShadow={"0 0 6px black"}
                    width={"100%%"}
                    textAlign={"center"}
                    lineHeight={1.2}
                    mb={2}
                  >
                    143lbs
                  </Text>
                </Stack>
              </Stack>
            </SGrid>

            <SGrid columns={2}>
              <SItalicText>Feb 6, 2023.</SItalicText>
              <SItalicText>May 9, 2024.</SItalicText>
            </SGrid>
          </Stack>

          <Box>
            <SText>
              <SBoldText>
                Around April of last year, after yet another failed attempt at losing weight, I
                decided it was time to approach things differently.
              </SBoldText>{" "}
              From that moment on, I committed to experimenting with various products and
              meticulously documenting every detail of my weight-loss progress.
            </SText>
          </Box>

          <Box>
            <SText>
              A detailed explanation will be published soon, but in the meantime, I truly want to
              share with you the main outcome of my experiment.{" "}
              <SBoldText>
                To my surprise, I discovered both the reason for and the solution to my weight gain.
              </SBoldText>
            </SText>
          </Box>

          <Stack _hover={{ filter: "brightness(1.1)" }}>
            <StaticImage
              src="../images/comparison-1.jpg"
              alt="Trying out different weight loss supplements"
            />
            <SItalicText>
              From the 10 products that I reviewed, one product came out on top.
            </SItalicText>
          </Stack>

          <Box>
            <SText>
              The world we're living in today is moving at a breakneck pace. Between juggling work,
              family, and everything else life throws our way, it's no wonder we're all feeling a
              bit frazzled. What many of us don't realize is how this constant hustle and bustle
              might be affecting our waistlines.
            </SText>
          </Box>

          <Box>
            <SText>
              It's not just about diet and exercise anymore; there's something else at play that's
              making weight loss an uphill battle for so many of us.{" "}
              <SBoldText>
                If you're curious about whether this hidden factor or others might be impacting your
                own weight loss journey, I encourage you to take{" "}
                <SLink to="https://trycalmr.com/quiz-2" sectionID="">
                  THIS TEST
                </SLink>{" "}
                and find out for yourself.
              </SBoldText>
            </SText>
          </Box>

          <SLink to="https://trycalmr.com/quiz-2" sectionID="">
            Find the reason for and solution to your weight gain
          </SLink>

          <Box>
            <SText>
              {" "}
              <SBoldText>I'd love to hear if this helped you as well! 🙏</SBoldText>
            </SText>
          </Box>
        </Section>
      </Container>

      <Footer />
    </Box>
  );
};

export default IndexPage;
