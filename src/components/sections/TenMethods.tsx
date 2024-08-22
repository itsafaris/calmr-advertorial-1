import React from "react";
import { SBoldText, Section, SGrid, SHeading, SItalicText, SText } from "@components/components";
import { Flex, Stack } from "@chakra-ui/react";

export function TenMethods() {
  return (
    <Section>
      <SHeading>
        Trying out 10 Weight Loss Methods for Their Immediate Results and Long-Term Effectiveness
      </SHeading>

      <SText>
        I chose to test 10 different weight loss methods to determine which one truly worked for me.
        My goal wasn't just to lose weight quickly, but also to see how well each approach fit into
        my daily life. I evaluated each method based on the speed of weight loss, how long the
        results lasted, any potential side effects, the cost, and how easy it was to incorporate
        into my routine.
      </SText>

      <SText>Here's the evaluation criteria I used for assessing each weight loss method: </SText>

      <Stack>
        <Flex alignItems={"center"} gap={4}>
          <SText fontSize={"lg"}>⬇️</SText>

          <SText>
            <SBoldText>Speed of Results:</SBoldText> How soon did I notice the weight coming off?
          </SText>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <SText fontSize={"lg"}>✔️</SText>

          <SText>
            <SBoldText>Long-Term Success:</SBoldText> Was I able to maintain the weight loss over
            time?
          </SText>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <SText fontSize={"lg"}>⚠️</SText>

          <SText>
            <SBoldText>Health Impact:</SBoldText> What were the adverse effects on my health?
          </SText>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <SText fontSize={"lg"}>💰</SText>

          <SText>
            <SBoldText>Expense:</SBoldText> What was the financial cost?
          </SText>
        </Flex>

        <Flex alignItems={"center"} gap={4}>
          <SText fontSize={"lg"}>✅</SText>

          <SText>
            <SBoldText>Lifestyle Compatibility:</SBoldText> How easily could I integrate it into my
            daily routine?
          </SText>
        </Flex>
      </Stack>
    </Section>
  );
}
