import React from "react";
import { SBoldText, Section, SGrid, SHeading, SItalicText, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { ProductCard } from "@components/ProductCard";
import { productData } from "src/productData";

export function SupVitauthority() {
  return (
    <Section>
      <ProductCard
        productTitle={productData[8].method}
        productImage={productData[8].image}
        rating={productData[8].overallRating}
        positives={productData[8].positives}
        negatives={productData[8].negatives}
      />

      <SText>
        <SBoldText>Why I Chose Vitauthority Multi Collagen Burn</SBoldText>
      </SText>

      <SText>
        After weeks of searching for the right supplement, I chose Vitauthority Multi Collagen Burn
        because it seemed to offer everything I was looking for in a collagen product. Not only did
        it promise to enhance my skin and support weight management, but it also aimed to suppress
        my appetite and aid in fat burning—all without the use of caffeine. I was particularly drawn
        to the positive reviews about its effects on overall wellness. Additionally, the inclusion
        of Hyaluronic Acid and Vitamin C, which are great for skin hydration and immune support,
        made it even more appealing. This blend of benefits convinced me that it was the perfect
        supplement to enhance my daily routine.
      </SText>

      <SText>
        <SBoldText>My Experience Using Vitauthority Multi Collagen Burn</SBoldText>
      </SText>

      <SText>
        My journey with Vitauthority Multi Collagen Burn started when I decided to integrate it into
        my daily regimen. I usually mixed it with my morning coffee, unflavored almond milk or just
        water, and found it quite pleasant to consume. Within a couple of weeks, I noticed my skin
        becoming smoother and more radiant, my joints felt less achy, and my body overall started
        feeling more robust.
      </SText>

      <SGrid columns={2}>
        <StaticImage alt="" src="../../images/vitouthority_1.jpeg" />
        <StaticImage alt="" src="../../images/Vitouthority_3.jpeg" />
      </SGrid>

      <StaticImage height={400} alt="" src="../../images/vitouthority_4.jpeg" />

      <SItalicText>
        I typically blended Vitauthority Multi Collagen Burn into my morning coffee.
      </SItalicText>

      <SText>
        <SBoldText>Summary</SBoldText>
      </SText>

      <SText>
        Vitauthority Multi Collagen Burn has proven to be a valuable addition to my wellness
        routine. While the impact on weight loss was relatively modest, with a slight reduction of
        about 3 pounds per month, the product excelled in other areas. The enhancements in my skin
        quality, energy levels, and overall physical comfort were quite impressive. Although there
        were some minor setbacks with packaging and an unpleasant smell, the substantial benefits
        far outweighed these issues. This product is well-suited for anyone in search of a collagen
        supplement that offers comprehensive health benefits beyond just improving skin health.
        However, for weight loss purposes, it did not perform as well.
      </SText>
    </Section>
  );
}
