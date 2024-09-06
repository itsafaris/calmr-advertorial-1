import { SBoldText, Section, SHeading, SItalicText, SLink, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";

import { mainProduct } from "src/productData";

export function TestingMethodology() {
  return (
    <Section>
      <SHeading>My Testing Approach 🔬👇</SHeading>
      <StaticImage height={500} alt="supplement comparison" src="../../images/comparison-1.jpg" />
      <SItalicText>A list of all the weight loss methods I tried.</SItalicText>

      <SText>
        After experimenting with various weight loss methods and getting mixed results, I decided to
        take a more systematic approach to discover the best solution for myself. I invested over
        100+ hours in research and tested multiple strategies. This entire process spanned more than
        12 months and involved extensive experimentation, trials, and learning from my mistakes as I
        explored different weight loss options. My goal was to find sustainable weight loss
        practices that could improve my health without causing any negative side effects.
      </SText>

      <SText>
        After reviewing several weight loss methods, I structured my research project into two
        stages:
      </SText>

      <SText>
        <SBoldText>Stage 1</SBoldText> - How to lose weight quickly?
      </SText>

      <SText>
        <SBoldText>Stage 2</SBoldText> - How to maintain weight loss?
      </SText>

      <SText>
        <SBoldText>My #1 Weight Loss Product:</SBoldText> If you're pressed for time, my top
        recommendation is the <SLink to="/#winner">{mainProduct.method}</SLink>. It's not only
        effective for quick results but also offers a sustainable solution designed to help you keep
        the weight off in the long run.
      </SText>

      <StaticImage
        height={500}
        alt="supplement comparison"
        src="../../images/comparison-methodology.jpg"
      />
      <SItalicText>Comparing weight loss products - my 1 year experiment</SItalicText>
    </Section>
  );
}
