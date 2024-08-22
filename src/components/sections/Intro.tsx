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
import { siteConfig } from "src/conf";

export function Intro() {
  return (
    <Section>
      <SGrid columns={2}>
        <Stack>
          <SItalicText>Before weight loss. 189 lbs. Feb 6, 2023</SItalicText>
          <StaticImage
            height={700}
            alt="before weight loss journey"
            src="../../images/me-before.jpg"
          />
        </Stack>

        <Stack>
          <SItalicText>After weight loss. 143 lbs. Mar 9, 2024</SItalicText>
          <StaticImage
            height={700}
            alt="after weight loss journey"
            src="../../images/me-after.jpg"
          />
        </Stack>
      </SGrid>
      <SText>
        As a mother of two kids, navigating the constant demands of family life while transitioning
        from my career as an elementary school teacher to a full-time wellness blogger, finding an
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
      " "
      <SText>
        <SBoldText>Want the quick summary?</SBoldText> I personally experimented with 10 distinct
        solutions. The image below displays all tested solutions{" "}
        <SLink to="">👉 Click to jump to the most effective option that worked for me.</SLink>
      </SText>
      <StaticImage src="../../images/all-products.jpg" alt="all supplements" />
      <SItalicText>
        After evaluating various methods, the{" "}
        <SLink to={siteConfig.linkToMainProduct}>Calmr - Sleep & Burn supplement</SLink> came out on
        top.
      </SItalicText>
    </Section>
  );
}
