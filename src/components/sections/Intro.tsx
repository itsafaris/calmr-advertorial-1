import React from "react";
import {
  SBoldText,
  Section,
  SGrid,
  SHeading,
  SItalicText,
  SLink,
  SText,
} from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { Stack } from "@chakra-ui/react";

export function Intro() {
  return (
    <Section>
      <SGrid columns={2}>
        <Stack>
          <SItalicText>Before weight loss. 174 lbs. Feb 6, 2023</SItalicText>
          <StaticImage alt="before weight loss journey" src="../../images/me-before.jpg" />
        </Stack>

        <Stack>
          <SItalicText>After weight loss. 143 lbs. Mar 9, 2024</SItalicText>
          <StaticImage alt="after weight loss journey" src="../../images/me-after.jpg" />
        </Stack>
      </SGrid>

      <SText>
        As a mother of three, navigating the constant demands of family life while transitioning
        from my career as an elementary school teacher to a full-time wellness coach, finding an
        effective weight loss method that could seamlessly fit into my busy routine was no easy
        task. The daily pressures of parenting, coupled with the challenges of maintaining a healthy
        lifestyle amidst school runs, meal preps, and family commitments, made it difficult to stick
        to any weight management plan.
      </SText>

      <SText>
        Despite trying a variety of solutions—from diet plans to exercise routines and natural
        supplements—nothing seemed to truly work.
      </SText>

      <SText>
        But now, I'm thrilled to share that I've finally discovered a weight loss strategy that
        genuinely works for me.
      </SText>

      <SText py={10}>
        <SBoldText>Want the short version?</SBoldText> I personally tried 10 different weight loss
        methods. All the solutions I experimented with are shown in the image below.{" "}
        <SLink to="">Click to skip to the winner that worked best for me.</SLink>
      </SText>

      <StaticImage src="../../images/all_weight_loss_methods_1.png" alt="" />

      <SItalicText>
        I reviewed all these weight loss methods, and{" "}
        <SBoldText>the Biome Secret Superfood Weight Loss Shake</SBoldText> came out on top.
      </SItalicText>
    </Section>
  );
}
