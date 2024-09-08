import { SBoldText, Section, SItalicText, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { productData } from "src/productData";
import { ProductCard } from "@components/ProductCard";
import { Stack } from "@chakra-ui/react";

export function SupOzempic() {
  return (
    <Section>
      <ProductCard
        productTitle={productData[4].method}
        productImage={productData[4].image}
        rating={productData[4].overallRating}
        positives={productData[4].positives}
        negatives={productData[4].negatives}
      />

      <SText>
        <SBoldText>How I Chose Weight Loss Injection - Ozempic</SBoldText>
      </SText>

      <SText>
        After years of struggling with my weight and trying every diet and weight loss supplement
        out there, I felt stuck. My doctor suggested Ozempic, a medication primarily used for
        diabetes but noted for its weight loss benefits in patients. The idea of a simple injection
        achieving what years of dieting couldn’t was both intriguing and gave me a sense of hope.
        Hearing success stories from friends and reading online testimonials praising its
        effectiveness also played a big role in my decision.
      </SText>

      <SText>
        <SBoldText>My Weight Loss Journey with Ozempic</SBoldText>
      </SText>

      <SText>
        Starting on, the weekly injections were easy to manage, and I quickly adapted to the
        routine. Within the first few months, I noticed a significant drop in my appetite, which
        made smaller portions more satisfying and greatly reduced my snacking. Slowly but surely,
        the weight began to come off, and my energy levels started to rise. However, it wasn’t
        without challenges. The side effects, particularly nausea and occasional digestive
        discomfort, were tough at times but became more manageable as my body adjusted. Despite
        these hurdles, the steady weight loss and improved health markers kept me motivated.
      </SText>

      <Stack>
        <StaticImage height={500} alt="supplement" src="../../images/sup-ozempic-1.jpg" />

        <SItalicText>
          On April 11 2023 I began my weight loss journey using Ozempic. As on June 22 2023 I’m
          officially down 18 pounds.
        </SItalicText>
      </Stack>

      <SText>
        <SBoldText>Summing-up:</SBoldText>
      </SText>

      <SText>
        My experience with Ozempic was eye-opening, revealing that the journey to weight loss comes
        with its own set of challenges. While it did help me lose weight, the downsides were
        substantial and, at times, overshadowed the benefits. The financial cost was a significant
        burden, but the side effects were even more concerning. Nausea, stomach pain, and vomiting
        were just the beginning; the risk of severe complications like pancreatitis, kidney failure,
        gallbladder disease, and gastroparesis added a layer of anxiety to my decision to continue
        the medication.
      </SText>

      <SText>
        The prospect of potentially needing to stay on the medication indefinitely to prevent
        regaining the weight added another layer of complexity, emphasizing the harsh reality that
        this "solution" comes with significant strings attached. The severe health risks, some of
        which could lead to hospitalization or require further medical intervention, highlighted the
        serious trade-offs involved in using Ozempic for weight loss. This experience served as a
        stark reminder that what might appear to be a quick fix for weight loss can come with
        consequences that require careful consideration.
      </SText>
    </Section>
  );
}
