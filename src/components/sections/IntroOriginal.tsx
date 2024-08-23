import { SBoldText, Section, SGrid, SItalicText, SLink, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { Box, Stack } from "@chakra-ui/react";

import { Link } from "gatsby";

export function IntroOriginal() {
  return (
    <Section>
      <SGrid columns={2}>
        <Stack>
          <SItalicText>Before weight loss. 189 lbs. Feb 6, 2023</SItalicText>
          <StaticImage
            height={640}
            alt="before weight loss journey"
            src="../../images/jen-before.jpg"
            style={{ height: "100%" }}
          />
        </Stack>

        <Stack>
          <SItalicText>After weight loss. 143 lbs. Mar 9, 2024</SItalicText>
          <StaticImage
            height={640}
            alt="after weight loss journey"
            src="../../images/jen-after.jpg"
            style={{ height: "100%" }}
          />
        </Stack>
      </SGrid>

      <SText>
        <SBoldText>Want the short answer?</SBoldText> I personally experimented with 10 distinct
        solutions. The image below displays all of them.{" "}
        <SLink to="/#winner">Go here to see the winner that worked for me.</SLink>
      </SText>
      <Box as={Link} to="/#winner" _hover={{ filter: "brightness(1.1)" }}>
        <StaticImage src="../../images/all-products.jpg" alt="all supplements" />
      </Box>
      <SItalicText>
        From the 10 products that I reviewed, the{" "}
        <SLink to="/#winner">Calmr - Sleep & Burn supplement</SLink> came out on top.
      </SItalicText>
    </Section>
  );
}
