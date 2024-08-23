import React from "react";
import { SBoldText, Section, SGrid, SHeading, SItalicText, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { Flex, Stack } from "@chakra-ui/react";

export function ShortTermMethods() {
  return (
    <Section>
      <SHeading>Insights from Short-Term Weight Loss Methods</SHeading>

      <SText>
        From the beginning, I tested various quick-fix solutions like fat burners and metabolism
        boosters, including Hydroxycut Weight Loss Pills, Burn-XT Fat Burner, Stripfast 5000 Fire
        Bullet Weight-Loss Supplement, Vitauthority Multi Collagen Burn, and NOW Foods
        Acetyl-L-Carnitine. At first, these products seemed promising, providing a noticeable
        increase in energy and faster fat loss.
      </SText>

      <SText>
        However, the initial benefits were overshadowed by less favorable effects. The energy boost
        from these pills often left me feeling jittery and uncomfortable, with some even posing
        potential risks to heart health. Over time, I realized that while they might speed up fat
        loss, they also led to unsustainable results and possible health concerns.
      </SText>

      <SText>
        After understanding the true impact of these fat burners and metabolism boosters, it became
        clear they weren't the long-term solution I had hoped for. I often ended up back where I
        started, feeling worse both physically and mentally. It became evident that rapid weight
        loss methods weren't worth compromising my health. Instead, I needed a sustainable, healthy
        approach to weight loss that emphasized proper nutrition and consistent habits, rather than
        relying on quick fixes that failed to deliver lasting results.
      </SText>

      <StaticImage height={500} alt="supplement comparison" src="../../images/comparison-2.jpg" />

      <SItalicText>
        In my quest for weight loss, I resorted to quick solutions that didn't provide lasting
        results.
      </SItalicText>
    </Section>
  );
}
