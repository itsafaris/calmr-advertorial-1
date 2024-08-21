import React from "react";
import { SBoldText, Section, SGrid, SHeading, SItalicText, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";

export function SupBurnXT() {
  return (
    <Section>
      <SText>
        <SBoldText>Why I Chose Burn-XT Fat Burner</SBoldText>
      </SText>

      <SText>
        I decided to try Burn-XT fat burner because I was looking for something to help me manage my
        weight more effectively. The promise of day time fat loss, boosted metabolism, and appetite
        suppression really caught my attention. Plus, the added benefit of helping with wakefulness
        seemed like a great fit for my busy lifestyle.
      </SText>

      <SText>
        <SBoldText>My Weight Loss Experience Using Burn-XT Fat Burner</SBoldText>
      </SText>

      <SText>
        ‍Starting out, I followed the package’s advice carefully: I took one capsule each day with a
        big glass of water and my breakfast, to see how my body would handle it. That first week, I
        noticed I was waking up feeling more alert and less groggy than usual. My stomach felt a bit
        off at times, but it wasn’t too bad.{" "}
      </SText>

      <SText>
        Encouraged by the first week, I moved up to the regular usage—taking one capsule with
        breakfast and another with lunch. I made sure to drink lots of water, as suggested, to keep
        hydrated. Almost immediately, I felt my appetite starting to lessen. I wasn’t snacking as
        much between meals, which was a big win for me.{" "}
      </SText>

      <SText>
        However, the increased caffeine really made itself known. I’m not a big coffee drinker, so
        the surge in energy was quite intense.I felt energized during the day, which was great, but
        when it came time to wind down for the night, I struggled. Sleeplessness became a bit of an
        issue, especially during the first few nights after upping the dose.{" "}
      </SText>

      <SText>
        During this period, I managed to lose about 10 pounds in 12 weeks, which was aligned with my
        expectations without being overly drastic.
      </SText>

      <SGrid columns={2}>
        <StaticImage alt="" src="../../images/burn_XT_1.jpeg" />
        <StaticImage alt="" src="../../images/burnXT_2.jpeg" />
      </SGrid>

      <SItalicText>
        Burn-XT Fat Burner capsules brought less hunger and more energy, but made sleeping tough.
      </SItalicText>

      <SText>
        <SBoldText>Summary</SBoldText>
      </SText>

      <SText>
        Burn-XT Fat Burner offered some great benefits like appetite control and enhanced energy,
        which fit well into my daily routine and helped with my weight loss goals. However, the
        strong effects of caffeine and some inconsistency in how it worked from day to day were
        challenges. I stopped taking it once I reached my weight goal, and when I tried it again
        months later, it still helped, but the magic wasn’t quite the same. For anyone considering
        it, it’s a good tool for specific goals but be mindful of the potential for side effects and
        ensure it fits your lifestyle.
      </SText>
    </Section>
  );
}
