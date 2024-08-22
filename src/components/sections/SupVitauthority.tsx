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
        <SBoldText>How I Chose Vitauthority Multi Collagen Burn</SBoldText>
      </SText>

      <SText>
        After weeks of researching supplements, I decided on Vitauthority Multi Collagen Burn
        because it seemed to meet all my needs in a collagen product. It not only promised to
        enhance my skin and assist with weight management, but it also aimed to curb my appetite and
        promote fat burning—all without caffeine. The glowing reviews about its overall wellness
        benefits caught my attention. Plus, the inclusion of Hyaluronic Acid and Vitamin C, both
        great for skin hydration and immune support, made it even more appealing. The combination of
        these benefits convinced me that this was the perfect supplement to integrate into my daily
        routine.
      </SText>

      <SText>
        <SBoldText>My Journey Using Vitauthority Multi Collagen Burn</SBoldText>
      </SText>

      <SText>
        I began my journey with Vitauthority Multi Collagen Burn by incorporating it into my daily
        routine. I usually mixed it with my morning coffee, unflavored almond milk, or just water,
        and found it quite enjoyable. After a couple of weeks, I noticed my skin becoming smoother
        and more radiant, my joints felt less achy, and I experienced an overall improvement in how
        strong and resilient my body felt.
      </SText>

      <SGrid columns={2}>
        <StaticImage height={400} alt="supplement" src="../../images/sup-vitout-1.jpeg" />
        <StaticImage height={400} alt="supplement" src="../../images/sup-vitout-2.jpeg" />
      </SGrid>

      <StaticImage height={400} alt="supplement" src="../../images/sup-vitout-3.jpeg" />

      <SItalicText>
        I usually mixed Vitauthority Multi Collagen Burn into my morning coffee.
      </SItalicText>

      <SText>
        <SBoldText>Summing-up:</SBoldText>
      </SText>

      <SText>
        Vitauthority Multi Collagen Burn has been a valuable addition to my wellness routine. While
        the weight loss effects were modest, with a slight reduction of about 3 pounds per month,
        the product truly excelled in other areas. The improvements in my skin quality, energy
        levels, and overall physical comfort were impressive. Although there were minor drawbacks,
        such as packaging issues and an unpleasant smell, the substantial benefits far outweighed
        these concerns. This product is ideal for anyone looking for a collagen supplement that
        offers a wide range of health benefits beyond just enhancing skin health. However, it did
        not perform as strongly for weight loss.
      </SText>
    </Section>
  );
}
