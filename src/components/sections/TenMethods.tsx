import React from "react";
import { SBoldText, Section, SGrid, SHeading, SItalicText, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { Flex, Stack } from "@chakra-ui/react";

export function TenMethods() {
  return (
    <Section>
      <SHeading>
        Focusing on 10 Weight Loss Methods and Evaluating Them for Both Immediate Impact and Long
        Term Effectiveness
      </SHeading>

      <SText>
        decided to try out 10 weight loss methods to see which one really worked for me. I didn't
        just want to see the pounds drop; I also wanted to see how well each method fit into my
        everyday life. I checked out each one by looking at how fast I lost weight, how long it
        stayed off, if there were any bad side effects, how much it cost, and how easy it was to
        make it part of my daily routine.
      </SText>

      <SText>
        Here is my own weight loss method evaluation methodology that I took into consideration:
      </SText>

      <Stack>
        <Flex alignItems={"center"} gap={4}>
          <SText fontSize={"lg"}>⬇️</SText>

          <SText>
            <SBoldText>Initial Weight Loss:</SBoldText> How quickly did I start to see results?
          </SText>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <SText fontSize={"lg"}>✔️</SText>

          <SText>
            <SBoldText>Weight Maintenance:</SBoldText> Could I keep the weight off long-term?
          </SText>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <SText fontSize={"lg"}>⚠️</SText>

          <SText>
            <SBoldText>Side Effects:</SBoldText> What were the negative impacts on my health?
          </SText>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <SText fontSize={"lg"}>💰</SText>

          <SText>
            <SBoldText>Cost:</SBoldText> How much did it set me back financially?
          </SText>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <SText fontSize={"lg"}>✅</SText>

          <SText>
            <SBoldText>Ease of Integration:</SBoldText> How well could I incorporate it into my
            lifestyle?
          </SText>
        </Flex>
      </Stack>
    </Section>
  );
}
