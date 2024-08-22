import React from "react";
import { SBoldText, Section, SGrid, SHeading, SItalicText, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { ProductCard } from "@components/ProductCard";
import { mainProduct, productData } from "src/productData";
import { siteConfig } from "src/conf";

export function BestSolution() {
  return (
    <Section id="winner">
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
        <SBoldText>Why I Chose Calmr - Sleep & Burn for Weight Management</SBoldText>
      </SText>

      <SText>
        Balancing work and family made losing weight without added stress seem nearly impossible. I
        was constantly bloated, hungry from dieting, exhausted, and struggling to focus. Then, I
        discovered Calmr - Sleep & Burn. It offered a straightforward solution, helping me manage my
        weight while also promoting better sleep and reducing stress. The convenience of addressing
        both sleep and weight management without the hassle of traditional diets was exactly what I
        needed in my busy life.
      </SText>

      <SText>
        <SBoldText>My Weight Loss Journey with Calmr - Sleep & Burn</SBoldText>
      </SText>

      <SText>
        From the moment I started using Calmr - Sleep & Burn, I noticed a significant change—I lost
        about 14 pounds in just the first month. It felt like my body had undergone a reset. After
        that, I settled into a steady rhythm, shedding around 2 pounds each week.
      </SText>

      <SText>
        Before discovering Calmr - Sleep & Burn, I was exhausted by the endless diet
        cycle—constantly planning meals, shopping for specific ingredients, and spending too much
        time preparing food. It was overwhelming, especially with my family and work commitments.
        But with Calmr, everything became simpler. Incorporating just one supplement into my daily
        routine reduced all that stress. It seamlessly fit into my busy life.
      </SText>

      <SText>
        Calmr was a real game-changer for me. It helped curb my appetite, boosted my energy, and
        improved my focus, eliminating those midday slumps. The best part? I didn’t have to
        sacrifice my favorite meals. By simply incorporating Calmr twice a day, I could enjoy the
        foods I love and still look forward to traditional Saturday dinners with my family.
        <SBoldText>
          The best part? I just added Calmr to my routine, without having to give up any of the
          foods I love. This allowed me to still enjoy my favorite high-calorie meals—whether it was
          breakfast, lunch, or dinner—and continue savoring traditional Saturday dinners with my
          family.
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
        Taking Calmr - Sleep & Burn for weight management is incredibly easy—just 2 pills a day.
      </SItalicText>

      <SText>
        <SBoldText>Summing Up:</SBoldText>
      </SText>

      <SText>
        Discovering Calmr - Sleep & Burn was a game changer. The benefits were immediately
        noticeable. Not only did I begin losing weight, but I also experienced a significant
        reduction in bloating and relief from constipation—issues that had been constant struggles.
        Unlike other weight management methods, Calmr helped me shed fat effectively, thanks to its
        thoughtfully crafted formula.
      </SText>

      <SText>
        Each dose was packed with potent ingredients, designed to support sleep, reduce stress, and
        assist with weight management. Calmr also played a crucial role in enhancing my overall
        well-being by including essential nutrients like Vitamin D, Magnesium, and Melatonin, which
        helped improve my sleep quality and mood. The formula was free from unnecessary additives
        like gluten, GMOs, lactose, nuts, soy, hormones, added sugars, and trans fats, showing a
        commitment to purity and quality.
      </SText>

      <SText>
        Calmr didn't just improve my physical health; it also gave me a noticeable boost in energy
        and mental clarity. It offered a holistic approach to feeling better. Incorporating it into
        my daily routine was seamless. This wasn’t just another supplement; it was a lifestyle shift
        that brought real, positive changes to my overall well-being and weight management journey.
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
        Finally it's over! I found a sustainable weight management solution that prioritizes health
      </SItalicText>
    </Section>
  );
}
