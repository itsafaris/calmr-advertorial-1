import React from "react";
import { SBoldText, Section, SHeading, SText } from "@components/components";
import { Flex, Stack, Icon, Text } from "@chakra-ui/react";
import { MdCheckBoxOutlineBlank } from "react-icons/md";

export function TenMethods() {
  return (
    <Section id="testing-products-section">
      <SHeading>Testing 10 Weight Loss Products: Immediate vs. Long-Term Results</SHeading>

      <SText>
        I chose to test 10 different weight loss methods to determine which one truly worked for me.{" "}
        <SBoldText>
          My goal wasn't just to lose weight quickly, but also to see how well each approach fit
          into my daily life.
        </SBoldText>{" "}
        I evaluated each method based on the speed of weight loss, how long the results lasted, any
        potential side effects, the cost, and how easy it was to incorporate into my routine.
      </SText>

      <SText>
        <SBoldText>
          Here's the evaluation criteria I used for assessing each weight loss product:
        </SBoldText>
      </SText>

      <Stack>
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
            <SBoldText>A.</SBoldText> Did it show quick results?
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
            <SBoldText>B.</SBoldText> Was it successful long-term?
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
            <SBoldText>C.</SBoldText> Was it health-friendly?
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
            <SBoldText>D.</SBoldText> Was it affordable?
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
            <SBoldText>E.</SBoldText> Was it easy to use daily?
          </SText>
        </Flex>
      </Stack>
    </Section>
  );
}
