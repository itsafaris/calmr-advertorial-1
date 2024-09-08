import React from "react";
import { SBoldText, Section, SGrid, SHeading, SItalicText, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { Flex, Stack, Text } from "@chakra-ui/react";
import { siteConfig } from "src/conf";

export function Backstory() {
  return (
    <Section id="backstory-section">
      <SHeading>A Bit Of Backstory...</SHeading>

      <SText>
        I'm {siteConfig.personaName}, a 51-year-old mother of three fantastic kids: Emma (9), Joseph
        (11) and Mathew (15). With my caring husband by my side, juggling a career and raising a
        family is gratifying, but it leaves little room for focusing on myself.
      </SText>

      <SText>
        <SBoldText>I've always had challenges with my weight.</SBoldText> I've never been the slim
        type, constantly feeling out of place with the narrow beauty standards around us. My journey
        has been a series of highs and lows, trying out everything from weight loss programs and
        appetite suppressants to fat-burning injections and metabolism boosters.
      </SText>

      <SText>
        I've experienced hunger pangs, battled intense cravings, and dealt with side effects like
        digestive issues, nervousness, constipation, mood swings, and the frustration of seeing
        little to no progress on the scale.
      </SText>

      <SText>
        In moments of desperation, I've turned to quick-fix solutions—appetite suppressants, and
        even injections like Ozempic. Sure, I'd lose some weight and feel a brief sense of
        achievement, but the weight always returned, sometimes even more than before.
      </SText>

      <SText>
        This struggle has been real. Constant hunger, fighting off cravings, and the cycle of
        short-lived success followed by regaining the weight (and more) left me exhausted.{" "}
        <SBoldText>
          My goal wasn't just to find a "healthier me", but to lose the weight, feel lighter, and
          break free from the endless loop of diet frustrations.
        </SBoldText>
      </SText>

      <Stack>
        <Stack>
          <SGrid columns={2}>
            <Stack position={"relative"}>
              <StaticImage
                height={640}
                src="../../images/jen-4.jpg"
                alt="my weight loss progress"
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
                177 lbs
              </Text>
            </Stack>

            <Stack position={"relative"}>
              <StaticImage
                height={640}
                src="../../images/jen-3.jpg"
                alt="my weight loss progress"
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
                164 lbs
              </Text>
            </Stack>
          </SGrid>
          <SGrid columns={2}>
            <SItalicText>
              <Text as="span" fontWeight={"bold"} color="black" fontSize={"md"}>
                Week 5.
              </Text>{" "}
              Mar 6, 2023.
            </SItalicText>

            <SItalicText>
              <Text as="span" fontWeight={"bold"} color="black" fontSize={"md"}>
                Week 28.
              </Text>{" "}
              Aug 6, 2023.
            </SItalicText>
          </SGrid>{" "}
        </Stack>
      </Stack>
    </Section>
  );
}
