import { Flex, Stack } from "@chakra-ui/react";
import { SBoldText, Section, SHeading, SItalicText, SLink, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";

import { mainProduct } from "src/productData";

const sectionID = "testing-approach-section";

export function TestingMethodology() {
  return (
    <Section id="testing-approach-section">
      <SHeading>My Testing Approach 🔬</SHeading>

      <Stack>
        <StaticImage height={500} alt="supplement comparison" src="../../images/comparison-1.jpg" />
        <SItalicText>A list of all the weight loss methods I tried.</SItalicText>
      </Stack>

      <SText>
        After experimenting with various weight loss methods and getting mixed results, I decided to
        take a more systematic approach to discover the best solution for myself.{" "}
        <SBoldText>
          I invested over 100+ hours in research and tested multiple strategies.
        </SBoldText>{" "}
        This entire process spanned more than 12 months and involved extensive experimentation,
        trials, and learning from my mistakes as I explored different weight loss options. My goal
        was to find sustainable weight loss practices that could improve my health without causing
        any negative side effects.
      </SText>

      <SText>
        <SBoldText>
          After reviewing several weight loss methods, I structured my research project into two
          stages:
        </SBoldText>
      </SText>

      <Stack spacing={2}>
        <Flex
          backgroundColor="gray.100"
          alignItems={"center"}
          gap={2}
          py={3}
          px={3}
          borderRadius={"sm"}
          direction={"row"}
        >
          <SText fontSize={"sm"} fontWeight={"semibold"}>
            <SBoldText>Stage 1</SBoldText> - How to lose weight quickly?
          </SText>
        </Flex>

        <Flex
          backgroundColor="gray.100"
          alignItems={"center"}
          gap={2}
          py={3}
          px={3}
          borderRadius={"sm"}
          direction={"row"}
        >
          <SText fontSize={"sm"} fontWeight={"semibold"}>
            <SBoldText>Stage 2</SBoldText> - How to maintain weight loss?
          </SText>
        </Flex>
      </Stack>

      <SText>
        <SBoldText>My #1 Weight Loss Product:</SBoldText> If you're pressed for time, my top
        recommendation is the{" "}
        <SLink to="/#winner" sectionID={sectionID}>
          {mainProduct.method}
        </SLink>
        . It's not only effective for quick results but also offers a sustainable solution designed
        to help you keep the weight off in the long run.
      </SText>

      <Stack>
        <StaticImage
          height={500}
          alt="supplement comparison"
          src="../../images/comparison-methodology.jpg"
        />
        <SItalicText>Comparing weight loss products - my 1 year experiment</SItalicText>
      </Stack>
    </Section>
  );
}
