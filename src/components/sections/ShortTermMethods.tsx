import React from "react";
import { SBoldText, Section, SGrid, SHeading, SItalicText, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { Flex, Stack } from "@chakra-ui/react";

export function ShortTermMethods() {
  return (
    <Section>
      <SHeading>Learning from Short-Term Weight Loss Methods</SHeading>

      <SText>
        Right from the start, I experimented with various convenient solutions such as fat burners
        and metabolism boosters, including Hydroxycut Weight Loss Pills, Burn-XT Fat Burner,
        Stripfast 5000 Fire Bullet Weight-Loss Supplement, Vitauthority Multi Collagen Burn, and NOW
        Foods Acetyl-L-Carnitine. Initially, these products appeared promising, offering a
        noticeable boost in energy and accelerated fat loss.
      </SText>

      <SText>
        However, the initial benefits soon gave way less desirable effects. The surge in energy from
        these pills often left me feeling jittery and uneasy, with some even posing risks to heart
        health. Over time, I realized that while they might accelerate fat loss, they could also
        lead to unsustainable weight loss and potential health risks.
      </SText>

      <SText>
        After seeing the true impact of these fat burners and metabolism boosters, I understood they
        weren’t the long-term solution I was looking for. Often, I’d find myself back at square one,
        feeling worse off than before in both body and mind. It became clear that rapid weight loss
        tactics were not worth sacrificing my health. Instead, I needed a lasting, healthy approach
        to weight loss, focusing on good nutrition and consistent habits, rather than effortless
        solutions that failed to deliver long-lasting results.
      </SText>

      <StaticImage height={500} alt="supplement comparison" src="../../images/comparison-2.jpg" />

      <SItalicText>
        Feeling desperate about my weight loss I tried quick fixes with no sustainable result.
      </SItalicText>
    </Section>
  );
}
