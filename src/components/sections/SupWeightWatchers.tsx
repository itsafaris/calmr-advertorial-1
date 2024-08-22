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
        <SBoldText>Why WeightWatchers Weight Loss Program?</SBoldText>
      </SText>

      <SText>
        After trying several weight loss products, I wanted to explore a different approach that
        involved following a structured diet plan. I opted to join WeightWatchers because I was
        looking for a weight loss method that wouldn’t impose overly strict food restrictions and
        would easily integrate into my daily routine. The points-based system appeared innovative
        and flexible, enabling me to enjoy my favorite foods in moderation. Additionally, the
        program’s solid reputation and science-backed approach to weight loss, which emphasizes
        building sustainable habits rather than relying on quick fixes, reassured me that it was the
        right choice for achieving my long-term weight loss objectives.
      </SText>

      <SText>
        <SBoldText>My Experience with WeightWatchers</SBoldText>
      </SText>

      <SText>
        Getting started with WeightWatchers wasn’t easy. Learning to calculate points and properly
        measure portions took some effort. However, as I became more familiar with the system, I
        found that the program naturally encouraged healthier eating habits. I appreciated the
        gradual pace of weight loss it offered, allowing me to lose about 1 pound per week steadily.
        This approach has been sustainable, as I didn’t feel deprived or overwhelmed, thanks to the
        flexibility of the Points system.
      </SText>

      <SGrid columns={2}>
        <StaticImage height={400} alt="supplement" src="../../images/sup-wwapp-2.jpg" />
        <StaticImage height={400} alt="supplement" src="../../images/sup-wwapp-3.jpg" />
      </SGrid>

      <SItalicText>
        Here's a quick example of what I was eating in a day on WeightWatchers
      </SItalicText>

      <SText>
        <SBoldText>Summing-up:</SBoldText>
      </SText>

      <SText>
        At first, WeightWatchers helped me become more aware of what and how much I was eating,
        which resulted in steady weight loss. However, I eventually found that maintaining the
        WeightWatchers program wasn’t practical for me in the long run. Balancing the points system
        with my demanding work and family responsibilities became too overwhelming. Despite this,
        the discipline I gained and the support from the community were incredibly valuable. It
        wasn’t just about following a diet; it was about reshaping my lifestyle, which had a
        profound impact. Incorporating these new eating habits into my daily life turned out to be
        the sustainable and effective solution I had been searching for.
      </SText>
    </Section>
  );
}
