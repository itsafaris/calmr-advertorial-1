import React from "react";
import { SBoldText, Section, SGrid, SHeading, SItalicText, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { productData } from "src/productData";
import { ProductCard } from "@components/ProductCard";
import { Stack } from "@chakra-ui/react";

export function SupHuel() {
  return (
    <Section>
      <ProductCard
        productTitle={productData[2].method}
        productImage={productData[2].image}
        rating={productData[2].overallRating}
        positives={productData[2].positives}
        negatives={productData[2].negatives}
      />

      <SText>
        <SBoldText>How I chose Huel Complete Meal Shake for Weight Management</SBoldText>
      </SText>

      <SText>
        My demanding schedule required a fast, nutritious, and accurate meal option that could
        effortlessly fit into my busy work routine. With limited access to healthy food choices
        nearby and often finding myself either too occupied or too exhausted to cook, Huel Complete
        Meal Shakes became the perfect solution. These shakes are not just easy to prepare and
        nutritionally balanced, but they're also specifically designed for weight management. They
        offer a controlled calorie intake that's easy to monitor, are rich in protein to keep me
        satisfied, and are low in sugar to avoid blood sugar spikes. This combination makes Huel an
        excellent choice for maintaining proper nutrition and supporting weight management during my
        most hectic days.
      </SText>

      <SText>
        <SBoldText>My Weight Loss Results with Huel</SBoldText>
      </SText>

      <SText>
        In the first month of replacing my lunch with Huel Complete Meal Shakes every day, I managed
        to lose 8 pounds. Incorporating Huel into my routine was convenient and aligned well with my
        busy schedule. However, I noticed that it often didn't keep me satisfied until my next meal,
        particularly on days when I had more work responsibilities or was more physically active. It
        felt like my brain needed more fuel to keep going. The flavor of the shakes was average, and
        the texture had a grainy consistency. To address this, I started using a blender instead of
        the shaker, which did improve the texture but slightly reduced the convenience. To stay full
        until dinner, I occasionally had to supplement with an additional snack, like a granola or
        protein bar.
      </SText>

      <Stack>
        <SGrid columns={2}>
          <StaticImage height={400} alt="supplement" src="../../images/sup-huel-1.jpeg" />
          <StaticImage height={400} alt="supplement" src="../../images/sup-huel-2.jpeg" />
        </SGrid>

        <StaticImage height={400} alt="supplement" src="../../images/sup-huel-3.jpeg" />
      </Stack>

      <SItalicText>
        The Huel Original Complete Meal Shake only needs water, allowing me to have my lunch
        prepared in just a minute!
      </SItalicText>

      <SText>
        <SBoldText>Summing-up:</SBoldText>
      </SText>

      <SText>
        Huel Complete Meal Shakes offer a practical option for those in need of a quick, nutritious
        meal, particularly when choices are limited. Although they're not specifically advertised as
        a weight loss product, Huel emphasizes its shakes as beneficial for weight management
        through calorie control, which aligns with my experience of shedding 8 pounds in the first
        month. However, they didn’t always keep me full for extended periods, especially on more
        active days. While the taste and texture weren’t exactly to my preference, I do appreciate
        Huel’s commitment to sustainability and its well-established reputation in the meal
        replacement industry. For those who prioritize convenience and are interested in a
        sustainable brand that can support weight management, Huel remains a solid choice. However,
        be cautious—extra snacking can quickly add up calories. Be mindful of what you consume;
        otherwise, you might end up gaining weight instead of losing it.
      </SText>

      <Stack>
        <StaticImage height={500} alt="supplement" src="../../images/sup-huel-4.jpeg" />

        <SItalicText>
          I’m still researching and evaluating Huel shakes to determine the best weight loss
          approach for me.
        </SItalicText>
      </Stack>
    </Section>
  );
}
