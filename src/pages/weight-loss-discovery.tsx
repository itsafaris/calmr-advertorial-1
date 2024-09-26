import * as React from "react";
import { Link, type HeadFC, type PageProps } from "gatsby";
import { SEO } from "@components/SEO";
import { Box, Button, Container, Flex, Heading, Icon, Stack, Text } from "@chakra-ui/react";
import { siteConfig } from "src/conf";
import { Footer } from "@components/Footer";
import { Hero } from "@components/sections/Hero";
import { SBoldText, Section, SGrid, SItalicText, SLink, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { FaArrowRight } from "react-icons/fa6";

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
              My Weight Loss Journey: A Discovery That Helped Me Lose Weight and Could Help You Too
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

          <SText>
            Last April, frustrated with my weight loss struggles, I decided to take a different
            approach. I began experimenting with various methods, meticulously documenting my
            progress.{" "}
            <SBoldText>
              What I discovered surprised me - there was a hidden factor affecting my weight that
              I'd never considered before.
            </SBoldText>
          </SText>

          <Stack>
            <StaticImage
              src="../images/comparison-1.jpg"
              alt="Trying out different weight loss supplements"
            />
            <SItalicText>
              One of the supplements helped me discover the root cause of my weight gain issues.
            </SItalicText>
          </Stack>

          <SText>
            I will share my detailed findings in the next blog post, but in the meantime, I couldn't
            keep this revelation to myself. If you've been struggling with your own weight loss
            journey, you might be wondering what hidden factors are affecting it.
          </SText>

          <SText>
            <SBoldText>
              In my case, it was getting rid of generic supplements and taking what's best for MY
              body.
            </SBoldText>{" "}
            I encourage you to take the first step towards understanding your unique weight loss
            challenges and finding a solution that truly works for you. 🙏
          </SText>

          <Stack py={8}>
            <Text fontWeight={"bold"} mb={4} textAlign={"center"} fontSize={"lg"}>
              I took this TEST to find MY best solution for losing weight: 👇
            </Text>

            <Flex gap={2} width={"100%"}>
              <Button
                borderRadius={"full"}
                as={Link}
                size={"lg"}
                py={7}
                flex={1}
                color={"white"}
                backgroundColor={"#20BF8E"}
                _hover={{
                  backgroundColor: "#168f6a",
                }}
                _focus={{
                  backgroundColor: "#20BF8E",
                }}
                to={siteConfig.linkToMainProduct()}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  <Text lineHeight={1}>For Male</Text>
                  <Icon as={FaArrowRight} />
                </Stack>
              </Button>

              <Button
                borderRadius={"full"}
                as={Link}
                flex={1}
                size={"lg"}
                py={7}
                to={siteConfig.linkToMainProduct()}
                color={"white"}
                backgroundColor={"#C88AB8"}
                _hover={{
                  backgroundColor: "#a16a93",
                }}
                _focus={{
                  backgroundColor: "#C88AB8",
                }}
              >
                <Stack direction={"row"} alignItems={"center"} spacing={2}>
                  <Text lineHeight={1}>For Female</Text>
                  <Icon as={FaArrowRight} />
                </Stack>
              </Button>
            </Flex>
          </Stack>
        </Section>
      </Container>

      <Footer />
    </Box>
  );
};

export default IndexPage;
