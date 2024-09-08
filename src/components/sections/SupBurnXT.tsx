import React from "react";
import { SBoldText, Section, SGrid, SHeading, SItalicText, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { productData } from "src/productData";
import { ProductCard } from "@components/ProductCard";
import { Stack } from "@chakra-ui/react";

export function SupBurnXT() {
  return (
    <Section>
      <ProductCard
        productTitle={productData[6].method}
        productImage={productData[6].image}
        rating={productData[6].overallRating}
        positives={productData[6].positives}
        negatives={productData[6].negatives}
      />

      <SText>
        <SBoldText>How I Chose Burn-XT Fat Burner</SBoldText>
      </SText>

      <SText>
        I decided to give Burn-XT fat burner a try because I was looking for a more effective way to
        manage my weight. The promise of daytime fat loss, a boosted metabolism, and appetite
        suppression really appealed to me. Additionally, the added benefit of increased alertness
        seemed like a perfect fit for my busy lifestyle.
      </SText>

      <SText>
        <SBoldText>My Journey Using Burn-XT Fat Burner</SBoldText>
      </SText>

      <SText>
        I started by carefully following the package instructions: I took one capsule each morning
        with a large glass of water and my breakfast to see how my body would respond. During that
        first week, I noticed that I was waking up feeling more alert and less groggy than usual.
        Although I experienced some mild stomach discomfort, it was manageable.
      </SText>

      <SText>
        Encouraged by the initial results, I moved on to the regular dosage—taking one capsule with
        breakfast and another with lunch. I made sure to stay well-hydrated, as recommended. Almost
        immediately, I noticed my appetite beginning to decrease. I wasn’t snacking as much between
        meals, which was a significant win for me.
      </SText>

      <SText>
        However, the increased caffeine content became quite apparent. Since I’m not a regular
        coffee drinker, the surge in energy was intense. While I felt more energized during the day,
        winding down at night became a challenge. Sleeplessness became an issue, especially in the
        first few nights after increasing the dose.
      </SText>

      <SText>
        Over the course of 12 weeks, I managed to lose about 10 pounds, which was in line with my
        expectations, offering steady progress without being overly drastic.
      </SText>

      <Stack>
        <SGrid columns={2}>
          <StaticImage height={400} alt="supplement" src="../../images/sup-burnxt-1.jpeg" />
          <StaticImage height={400} alt="supplement" src="../../images/sup-burnxt-2.jpeg" />
        </SGrid>

        <SItalicText>
          Burn-XT Fat Burner capsules reduced my hunger and boosted my energy, but made it difficult
          to sleep.
        </SItalicText>
      </Stack>

      <SText>
        <SBoldText>Summing-up:</SBoldText>
      </SText>

      <SText>
        Burn-XT Fat Burner provided some valuable benefits like appetite suppression and increased
        energy, which aligned well with my daily routine and supported my weight loss goals.
        However, the potent caffeine effects and inconsistency in how it worked from day to day
        posed some challenges. I stopped taking it once I reached my target weight, and when I tried
        it again months later, it still had an effect, but the results weren’t quite as impactful.
        For anyone considering it, Burn-XT can be an effective tool for achieving specific goals,
        but be aware of the potential side effects and make sure it suits your lifestyle.
      </SText>
    </Section>
  );
}
