import React from "react";
import {
  SBoldText,
  Section,
  SGrid,
  SHeading,
  SItalicText,
  SLink,
  SText,
} from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { ProductCard } from "@components/ProductCard";
import { mainProduct, productData } from "src/productData";
import { siteConfig } from "src/conf";
import { Stack, Text } from "@chakra-ui/react";

const sectionID = "winner-section";

export function BestSolution() {
  return (
    <Section id="winner">
      <SHeading mb={4}>🏆 The Best Weight-Loss Solution For Me:</SHeading>

      <ProductCard
        bannerText="🏆 The Winner 🏆"
        productTitle={productData[0].method}
        productImage={productData[0].image}
        rating={productData[0].overallRating}
        positives={productData[0].positives}
        negatives={productData[0].negatives}
      />

      <SText>
        <SBoldText>
          Why I Chose{" "}
          <SLink to="#winner" sectionID={sectionID}>
            Calmr - Sleep & Burn
          </SLink>{" "}
          for Weight Management
        </SBoldText>
      </SText>

      <SText>
        Balancing work and family made losing weight without added stress seem nearly impossible. I
        was constantly feeling stressed, exhausted, and struggling to focus. Then, I discovered
        Calmr - Sleep & Burn. It offered a straightforward solution,{" "}
        <SBoldText>
          helping me manage my weight while also promoting better sleep and reducing stress.
        </SBoldText>{" "}
        The convenience of addressing both sleep and weight management without the need for
        restrictive diets was exactly what I needed in my busy life.
      </SText>

      <Stack>
        <SGrid columns={2}>
          <StaticImage alt="weight before" src="../../images/scales-before.jpg" />
          <StaticImage alt="weight after" src="../../images/scales-after.jpg" />
        </SGrid>

        <SGrid columns={2}>
          <SItalicText>
            <Text as="span" fontWeight={"bold"} color="black" fontSize={"md"}>
              Week 1.
            </Text>{" "}
            Feb 6, 2023.
          </SItalicText>

          <SItalicText>
            <Text as="span" fontWeight={"bold"} color="black" fontSize={"md"}>
              Week 56
            </Text>{" "}
            May 9, 2024.
          </SItalicText>
        </SGrid>
      </Stack>

      <SText>
        <SBoldText>
          My Weight Loss Journey with{" "}
          <SLink to="#winner" sectionID={sectionID}>
            Calmr - Sleep & Burn
          </SLink>
        </SBoldText>
      </SText>

      <SText>
        From the moment I started using Calmr - Sleep & Burn, I noticed a significant change —{" "}
        <SBoldText>I lost about 12 pounds in just the first month.</SBoldText> It felt like my body
        had undergone a reset. After that, I settled into a steady rhythm, consistently shedding
        around 2 pounds each week.
      </SText>

      <SText>
        Before discovering{" "}
        <SLink to="#winner" sectionID={sectionID}>
          Calmr - Sleep & Burn
        </SLink>
        , I was drained by the endless cycle of dieting—constantly worrying about what to eat,
        feeling deprived, and dealing with the stress of meal planning. It was overwhelming,
        especially with my family and work commitments. But with Calmr, everything became simpler.
        Incorporating just two capsules into my daily routine reduced all that stress. It seamlessly
        fit into my busy life.
      </SText>

      <SText>
        Calmr was a real game-changer for me. It helped reduce my stress levels, improved my sleep,
        and boosted my energy, eliminating those midday slumps.{" "}
        <SBoldText>
          The best part? I didn’t have to give up my favorite meals or follow a restrictive diet. By
          simply adding Calmr to my routine, I could enjoy the foods I love and still look forward
          to traditional Saturday dinners with my family.
        </SBoldText>
      </SText>

      <SGrid columns={2}>
        <StaticImage height={400} alt="supplement" src="../../images/sup-ag-1.jpg" />
        <StaticImage height={400} alt="supplement" src="../../images/sup-ag-2.jpg" />
      </SGrid>

      <Stack>
        <SGrid columns={2}>
          <StaticImage height={400} alt="supplement" src="../../images/sup-ag-3.jpg" />
          <StaticImage height={400} alt="supplement" src="../../images/sup-ag-4.jpg" />
        </SGrid>

        <SItalicText>
          Taking{" "}
          <SLink to="#winner" sectionID={sectionID}>
            Calmr - Sleep & Burn
          </SLink>{" "}
          for weight management is incredibly easy—just 2 pills a day.
        </SItalicText>
      </Stack>

      <SText>
        <SBoldText>Summing Up:</SBoldText>
      </SText>

      <SText>
        Discovering Calmr - Sleep & Burn was a game changer. The benefits were immediately
        noticeable. Not only did I begin losing weight, but I also experienced a significant
        reduction in bloating and relief from constipation—issues that had been constant struggles.
        Unlike other weight management methods,{" "}
        <SBoldText>Calmr helped me shed fat effectively</SBoldText>, thanks to its thoughtfully
        crafted formula.
      </SText>

      <SText>
        Each dose was packed with potent ingredients, designed to support sleep, reduce stress, and
        assist with weight management.{" "}
        <SBoldText>Calmr also played a crucial role in enhancing my overall well-being</SBoldText>{" "}
        by including essential nutrients like Vitamin D, Magnesium, and Melatonin, which helped
        improve my sleep quality and mood. The formula was free from unnecessary additives like
        gluten, GMOs, lactose, nuts, soy, hormones, added sugars, and trans fats, showing a
        commitment to purity and quality.
      </SText>

      <SText>
        Calmr didn't just improve my physical health;{" "}
        <SBoldText>it also gave me a noticeable boost in energy and mental clarity.</SBoldText> It
        offered a holistic approach to feeling better. Incorporating it into my daily routine was
        seamless. This wasn’t just another supplement; it was a lifestyle shift that brought real,
        positive changes to my overall well-being and weight management journey.
      </SText>

      <SLink to="#winner" sectionID={sectionID}>
        <Text fontWeight={"semibold"} fontStyle={"italic"} fontSize={"lg"}>
          "Finally it's over! I found a sustainable weight management solution that prioritizes
          health"
        </Text>
      </SLink>
    </Section>
  );
}
