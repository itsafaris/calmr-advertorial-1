import React from "react";
import { SBoldText, Section, SGrid, SHeading, SItalicText, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { ProductCard } from "@components/ProductCard";
import { productData } from "src/productData";

export function BestSolution() {
  return (
    <Section>
      <SHeading>🏆 The best weight loss solution for me:</SHeading>

      <ProductCard
        bannerText="🏆 The Winner 🏆"
        productTitle={productData[0].method}
        productImage={productData[0].image}
        rating={productData[0].overallRating}
        positives={productData[0].positives}
        negatives={productData[0].negatives}
      />

      <SText>
        <SBoldText>Why I Chose Biome Secret Superfood Shake for Weight Loss</SBoldText>
      </SText>

      <SText>
        In my busy life with work and family, finding a way to lose weight without extra stress
        seemed impossible. I was always bloated, hungry from dieting, tired, and found it hard to
        concentrate. Then, I found the Biome Secret Superfood Weight Loss Shake. It was simple and
        had everything I needed nutrition-wise, which was great because I didn't want the fuss of
        normal diets. The idea of having a healthy meal easily every day, without losing taste or
        wasting time in cooking, really drew me in.
      </SText>

      <SText>
        <SBoldText>My Weight Loss Experience Using Biome Secret Superfood Shake</SBoldText>
      </SText>

      <SText>
        Using the Biome Secret Superfood Weight Loss Shake from the beginning, I quickly noticed a
        huge change—I dropped about 16 pounds in just the first month. It felt like I'd hit a reset
        button on my body. Then, I found a steady pace, losing around 2 pounds each week.
      </SText>

      <SText>
        Before this shake, I was so tired of the endless diet routine—always planning meals,
        shopping for specific ingredients, and spending too much time prepping food. It was too
        much, especially with my family and work responsibilities. But with this shake, things got
        simpler. Just one meal replacement a day cut down all that stress. It fit right into my busy
        schedule effortlessly.
      </SText>

      <SText>
        The shake was a real fill-me-up, packed with protein, which kept hunger at bay. It gave me a
        much-needed energy boost and sharpened my focus, helping me ditch those slump moments in the
        middle of the day.{" "}
        <SBoldText>
          The best part? I simply swapped one high-calorie meal—whether it was breakfast, lunch, or
          dinner—with this shake, so I didn’t have to give up enjoying the foods I love and could
          still enjoy traditional Saturday dinners with my whole family.
        </SBoldText>
      </SText>

      <SGrid columns={2}>
        <StaticImage height={400} alt="supplement" src="../../images/sup-ag-1.jpeg" />
        <StaticImage height={400} alt="supplement" src="../../images/sup-ag-2.jpeg" />
      </SGrid>

      <SGrid columns={2}>
        <StaticImage height={400} alt="supplement" src="../../images/sup-ag-3.jpeg" />
        <StaticImage height={400} alt="supplement" src="../../images/sup-ag-4.jpeg" />
      </SGrid>

      <SItalicText>
        Biome Secret Superfood shake for weight loss preparation process is super easy.
      </SItalicText>

      <SText>
        <SBoldText>Summary</SBoldText>
      </SText>

      <SText>
        Finding the Biome Secret Superfood Weight Loss Shake was a turning point. The benefits were
        immediately clear. Not only did I start to lose weight, but I also noticed a significant
        reduction in bloating and relief from constipation—issues that had been constant annoyances.
        Unlike other diets, this shake helped me shed fat, thanks to its high protein content.
      </SText>

      <SText>
        Each serving was like a powerhouse of nutrition, delivering 80% of my daily protein needs
        along with 27 essential vitamins and minerals. It offered more fiber than I would get from
        three heads of broccoli, ensuring my digestive health was at its best with the added support
        of prebiotics, probiotics, and digestive enzymes. What impressed me was the commitment to
        quality, with whole-food sourced ingredients and a complete absence of gluten, GMOs,
        lactose, nuts, soy, hormones, added sugars, and trans fats.
      </SText>

      <SText>
        The shake didn't just contribute to my physical health; it also supercharged my energy
        levels and boosted my mental performance. It was a 360-degree approach to feeling better.
        Incorporating it into my daily life felt natural and easy. This wasn't just another dietary
        supplement; it was a lifestyle change that brought tangible, positive changes to my
        well-being and weight loss.
      </SText>

      <SGrid columns={2}>
        <SItalicText>STARTING WEIGHT FEBRUARY 6TH, 2023</SItalicText>

        <SItalicText>CURRENT WEIGHT MARCH 9TH, 2024</SItalicText>
      </SGrid>

      <SGrid columns={2}>
        <StaticImage alt="weight before" src="../../images/scales-before.jpeg" />
        <StaticImage alt="weight after" src="../../images/scales-after.jpeg" />
      </SGrid>

      <StaticImage alt="supplement" src="../../images/sup-ag-5.jpeg" />

      <SItalicText>
        Finally Found: A Sustainable Weight Loss Solution Without Compromising Health
      </SItalicText>
    </Section>
  );
}
