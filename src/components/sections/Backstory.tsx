import React from "react";
import { SBoldText, Section, SGrid, SHeading, SItalicText, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { Flex, Stack } from "@chakra-ui/react";

export function Backstory() {
  return (
    <Section>
      <SHeading>A little backstory…</SHeading>

      <SText>
        I'm Jennifer, a 51-year-old mother of three wonderful kids: Sarah (19), Mark (16), and Emily
        (13). With my supportive husband by my side, managing my career while raising a family is
        rewarding but leaves little time for myself.
      </SText>

      <SText>
        I've been struggling with my weight. I've always been on the heavier side, never quite
        fitting those slim ideals we see everywhere. My journey has been full of ups and downs,
        trying everything from weight management programs and appetite control medications to weight
        loss injections and fat burners/metabolism boosters.
      </SText>

      <SText>
        I've felt the hunger, ridden the waves of cravings, and dealt with side effects like
        digestive discomfort, jitters, constipation, mood swings, and the frustration of not seeing
        the numbers on the scale drop.
      </SText>

      <SText>
        In moments of desperation, I've turned to quick fixes—fat burners, appetite control
        medications, and even weight loss injections like Ozempic. Sure, I'd lose some weight and
        feel a brief triumph, but then the weight would come back, sometimes even more than I lost.
      </SText>

      <SText>
        The struggle has been real. Constant hunger, battling cravings, and the cycle of short-term
        success followed by gaining it all back (and then some) was exhausting. It wasn't just about
        finding a 'healthier me,' but about shedding the weight, feeling lighter, and escaping the
        endless loop of dieting frustration.
      </SText>

      <SItalicText>During my weight loss journey. 185 - 164 lbs. Mar. 1- Oct. 28 2023.</SItalicText>

      <SGrid columns={2}>
        <StaticImage alt="before weight loss journey" src="../../images/me-before.jpg" />
        <StaticImage alt="after weight loss journey" src="../../images/me-after.jpg" />
      </SGrid>
    </Section>
  );
}
