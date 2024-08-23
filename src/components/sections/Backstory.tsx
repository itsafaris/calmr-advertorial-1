import React from "react";
import { SBoldText, Section, SGrid, SHeading, SItalicText, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { Flex, Stack } from "@chakra-ui/react";
import { siteConfig } from "src/conf";

export function Backstory() {
  return (
    <Section>
      <SHeading>A bit of background...</SHeading>

      <SText>
        I'm {siteConfig.personaName}, a 51-year-old mother of three fantastic kids: Emma (9), Joseph
        (11) and Mathew (15). With my caring husband by my side, juggling a career and raising a
        family is gratifying, but it leaves little room for focusing on myself.
      </SText>

      <SText>
        I've always had challenges with my weight. I've never been the slim type, constantly feeling
        out of place with the narrow beauty standards around us. My journey has been a series of
        highs and lows, trying out everything from weight loss programs and appetite suppressants to
        fat-burning injections and metabolism boosters.
      </SText>

      <SText>
        I've experienced hunger pangs, battled intense cravings, and dealt with side effects like
        digestive issues, nervousness, constipation, mood swings, and the frustration of seeing
        little to no progress on the scale.
      </SText>

      <SText>
        In moments of desperation, I've turned to quick-fix solutions—fat burners, appetite
        suppressants, and even injections like Ozempic. Sure, I'd lose some weight and feel a brief
        sense of achievement, but the weight always returned, sometimes even more than before.
      </SText>

      <SText>
        This struggle has been real. Constant hunger, fighting off cravings, and the cycle of
        short-lived success followed by regaining the weight (and more) left me exhausted. My goal
        wasn't just to find a "healthier me", but to lose the weight, feel lighter, and break free
        from the endless loop of diet frustrations.
      </SText>

      <SItalicText>
        <SBoldText>During</SBoldText> my weight loss journey. <SBoldText>185 – 164 lbs</SBoldText>.
        Mar. 1- Oct. 28 2023.
      </SItalicText>

      <SGrid columns={2}>
        <StaticImage src="../../images/jen-4.jpg" alt="my weight loss progress" />
        <StaticImage src="../../images/jen-3.jpg" alt="my weight loss progress" />
      </SGrid>
    </Section>
  );
}
