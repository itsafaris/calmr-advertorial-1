import React from "react";
import { SBoldText, Section, SGrid, SHeading, SItalicText, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { ProductCard } from "@components/ProductCard";
import { productData } from "src/productData";

export function SupWeightWatchers() {
  return (
    <Section>
      <ProductCard
        bannerText="🥈 Runner Up 🥈"
        productTitle={productData[1].method}
        productImage={productData[1].image}
        rating={productData[1].overallRating}
        positives={productData[1].positives}
        negatives={productData[1].negatives}
      />

      <SText>
        <SBoldText>Why I Chose WeightWatchers Weight Loss Program</SBoldText>
      </SText>

      <SText>
        After trying many weight loss products, I wanted to take a different approach by following a
        structured diet plan. I decided to join WeightWatchers because I was looking for a weight
        loss plan that wouldn't restrict my food choices too hard and would fit seamlessly into my
        lifestyle. The points-based system seemed innovative and forgiving, allowing me to indulge
        in my favorite foods responsibly. Moreover, the program's proven track record and scientific
        approach to weight loss, emphasizing sustainable habits over quick fixes, convinced me that
        it was the right choice for achieving my long-term weight loss goals.
      </SText>

      <SText>
        <SBoldText>My Weight Loss Experience Using WeightWatchers</SBoldText>
      </SText>

      <SText>
        Starting with WeightWatchers wasn't straightforward. Learning to calculate points and
        measure portions required effort. However, as I got accustomed to it, I found that the
        program naturally encouraged healthier choices. I enjoyed the gradual approach to weight
        loss, which has allowed me to lose weight at a steady pace of about 1 pound per week. This
        has been achievable without feeling deprived or overwhelmed, thanks to the flexibility of
        the Points system.
      </SText>

      <SGrid columns={2}>
        <StaticImage alt="" src="../../images/WW_1.png" />
        <StaticImage alt="" src="../../images/WW_2.png" />
      </SGrid>

      <SItalicText>Here's a glimpse of what I was eating in a day on WeightWatchers</SItalicText>

      <SText>
        <SBoldText>Summary</SBoldText>
      </SText>

      <SText>
        Initially, WeightWatchers effectively helped me become more conscious of what and how much I
        ate, leading to steady weight loss. Over time, I realized that consistently sticking to
        WeightWatchers wasn’t feasible for me. Keeping up with the points system while managing my
        demanding work and family commitments became too challenging. However, the discipline it
        taught me and the community support I received were incredibly valuable. It wasn’t just
        about following a diet; it was about transforming my lifestyle, which made a significant
        difference. Integrating these new eating habits into my daily routine turned out to be the
        sustainable, effective solution I needed.
      </SText>
    </Section>
  );
}
