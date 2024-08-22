import React from "react";
import { SBoldText, Section, SGrid, SHeading, SItalicText, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { ProductCard } from "@components/ProductCard";
import { productData } from "src/productData";

export function SupContrave() {
  return (
    <Section>
      <ProductCard
        productTitle={productData[3].method}
        productImage={productData[3].image}
        rating={productData[3].overallRating}
        positives={productData[3].positives}
        negatives={productData[3].negatives}
      />

      <SText>
        <SBoldText>How I Chose Contrave Weight Loss Pills</SBoldText>
      </SText>

      <SText>
        When I was looking for a weight loss pill, I ultimately opted for Contrave. This
        FDA-approved combination of bupropion and naltrexone was designed to do more than just
        reduce food intake. These medications worked together to suppress my appetite, help me feel
        full longer, and provide a slight energy boost. Naltrexone, commonly used in addiction
        treatment, helped reduce my food cravings, while bupropion, an antidepressant, further
        supported appetite suppression.
      </SText>

      <SText>
        Choosing Contrave felt like the right decision—it aligned with what I was seeking in my
        weight loss journey. It wasn’t just about shedding pounds; it was about managing my eating
        habits in a way that felt more natural and kept me balanced.
      </SText>

      <SText>
        <SBoldText>My Weight Loss Experience with Contrave</SBoldText>
      </SText>

      <SText>
        I started noticing some weight loss within the first four weeks of taking Contrave, which
        was incredibly encouraging. By the end of the second month, I had lost a total of 16 pounds.
        The regimen was straightforward but required a gradual increase in dosage to ensure a smooth
        adjustment for both my body and mind.
      </SText>

      <SText>
        I began with just one pill each morning in the first week. In the second week, I added
        another pill in the evening. By the third week, the dosage increased to two pills in the
        morning and one at night. Finally, by the fourth week, I reached the full dose—two pills
        twice a day.
      </SText>

      <SText>
        What I truly appreciated about Contrave was its effectiveness in curbing my cravings and
        significantly reducing my appetite. This made it much easier to control both what I ate and
        how much.
      </SText>

      <SText>
        However, the journey wasn’t without its challenges. The most significant side effect for me
        was experiencing hot flashes, which were quite uncomfortable. I also dealt with some
        constipation and more frequent headaches than usual. Despite these issues, the overall
        benefits of reduced cravings and the weight I lost made it all worthwhile.
      </SText>

      <StaticImage height={200} alt="supplement" src="../../images/sup-contrave-1.jpg" />

      <SGrid columns={2}>
        <StaticImage height={350} alt="supplement" src="../../images/sup-contrave-2.jpg" />
        <StaticImage height={350} alt="supplement" src="../../images/sup-contrave-3.jpg" />
      </SGrid>

      <SItalicText>
        Here's how my schedule looked like for taking Contrave Weight Loss Pills
      </SItalicText>

      <SText>
        <SBoldText>Summing-up:</SBoldText>
      </SText>

      <SText>
        I started taking Contrave with hopeful expectations, and fortunately, I began seeing
        noticeable results within the first two months. I eased into the treatment by beginning with
        a lower dose and gradually increasing it, which helped minimize discomfort and allowed my
        body to adjust more smoothly. The medication effectively suppressed my appetite and reduced
        my cravings, making it easier for me to maintain healthier eating habits and a more active
        lifestyle. However, the journey wasn’t without its difficulties. I experienced several side
        effects, such as nausea and headaches, which were quite challenging to manage at times. More
        concerning was the need to closely monitor any potential changes in my mental health. Since
        Contrave contains bupropion, an antidepressant, there are warnings about possible mood
        changes and the risk of suicidal thoughts. This required me to stay in constant
        communication with my doctor and also inform my family to watch for any significant shifts
        in my mood or behavior. Overall, while Contrave helped me make substantial progress in my
        weight loss, it was crucial to carefully balance that with monitoring both my physical and
        mental well-being.
      </SText>
    </Section>
  );
}
