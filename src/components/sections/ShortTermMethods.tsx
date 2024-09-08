import React from "react";
import { SBoldText, Section, SGrid, SHeading, SItalicText, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { Flex, Stack } from "@chakra-ui/react";

export function ShortTermMethods() {
  return (
    <Section>
      <SHeading>Why Popular Weight-Loss Products Failed Me</SHeading>

      <SText>
        Initially, I tried various metabolism boosters and weight loss supplements, which seemed
        promising with their quick energy boosts and apparent fat loss. However, these benefits were
        short-lived and often accompanied by negative side effects like jitteriness and potential
        heart health risks.
      </SText>

      <SText>
        Over time, I realized these products led to unsustainable results and possible health
        concerns. I'd often regain the lost weight, feeling worse both physically and mentally. It
        became clear that these quick fixes weren't worth compromising my health.
      </SText>

      <SText>
        Ultimately, I understood that a sustainable, healthy approach focusing on proper nutrition
        and consistent habits was necessary for lasting weight loss, rather than relying on rapid,
        potentially harmful methods.
      </SText>

      <Stack>
        <StaticImage height={500} alt="supplement comparison" src="../../images/comparison-2.jpg" />

        <SItalicText>
          In my quest for weight loss, I resorted to quick solutions that didn't provide lasting
          results.
        </SItalicText>
      </Stack>
    </Section>
  );
}
