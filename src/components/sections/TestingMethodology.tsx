import React from "react";
import { SBoldText, Section, SGrid, SHeading, SItalicText, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { Flex, Stack } from "@chakra-ui/react";

export function TestingMethodology() {
  return (
    <Section>
      <SHeading>Testing methodology 👩🔬</SHeading>
      <StaticImage height={500} alt="supplement comparison" src="../../images/comparison-1.jpg" />
      <SItalicText>Lineup of all the weight loss methods that I tested.</SItalicText>

      <SText>
        After trying many different ways to lose weight and seeing all kinds of results, I decided
        to take a more organized approach to find the best weight loss solution for myself. I spent
        over 90 hours researching and then tried multiple of these methods. The entire process took
        more than 3 years and involved lots of experimenting, trials, and learning from mistakes as
        I explored various weight loss methods. This journey was specifically aimed at identifying
        sustainable weight loss practices that could enhance my health without any adverse side
        effects.
      </SText>

      <SText>
        After looking over a bunch of weight loss methods, I decided to take this research project
        of mine through two different stages.
      </SText>

      <SText>
        <SBoldText>Stage 1</SBoldText> – how to quickly lose weight?
      </SText>

      <SText>
        <SBoldText>Stage 2</SBoldText> – how to maintain weight loss?
      </SText>

      <SText>
        <SBoldText>My Top Weight Loss Solution:</SBoldText> If you're short on time, my top choice
        is the Biome Secret Superfood Weight Loss Shake. Not only is it a great option for quick
        results, but it's also a sustainable weight loss solution designed to help you maintain the
        progress you've made for the long term.
      </SText>

      <StaticImage
        height={500}
        alt="supplement comparison"
        src="../../images/comparison-methodology.jpg"
      />
      <SItalicText>Comparing weight loss solutions: a personal journey</SItalicText>
    </Section>
  );
}
