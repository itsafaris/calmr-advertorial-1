import React from "react";
import { SBoldText, Section, SGrid, SHeading, SItalicText, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";
import { ProductCard } from "@components/ProductCard";
import { productData } from "src/productData";

export function SupStripfast() {
  return (
    <Section>
      <ProductCard
        productTitle={productData[7].method}
        productImage={productData[7].image}
        rating={productData[7].overallRating}
        positives={productData[7].positives}
        negatives={productData[7].negatives}
      />

      <SText>
        <SBoldText>How I Chose Stripfast5000Fire Bullet Weight Loss Supplement</SBoldText>
      </SText>

      <SText>
        I first heard about Stripfast5000 Fire Bullet weight loss supplement from a close friend who
        had experienced noticeable results with it. She excitedly shared how it helped her curb
        unnecessary snacking and boosted her energy levels without causing the jitteriness often
        associated with other weight loss supplements. Motivated by her success and the positive
        changes in her energy and habits, I decided it was worth trying, especially to help manage
        my own snacking tendencies and to provide an energy boost for my busy days. Her positive
        experience, coupled with my need for a gentle push in my weight loss journey, convinced me
        that Stripfast5000 Fire Bullet might be a perfect fit for my lifestyle, which includes only
        moderate physical activity.
      </SText>

      <SText>
        <SBoldText>My Journey Using Stripfast5000 Fire Bullet</SBoldText>
      </SText>

      <SText>
        I started my regimen with Stripfast5000 by taking one tablet in the morning and another in
        the early afternoon. Almost right away, I noticed an intense increase in thirst, which led
        me to drink more water throughout the day. While this was a bit inconvenient, it ensured I
        stayed well-hydrated. Additionally, the tablets had an unexpected effect on my taste buds—my
        favorite foods suddenly became less appealing, which surprisingly helped me avoid
        overeating.
      </SText>

      <SText>
        After a few uneventful days on a single pill, I followed the recommended advice to increase
        the dosage. This adjustment resulted in a noticeable boost in energy, which led to an
        unusual enthusiasm for household chores and helped me become more active in my daily
        routine. My appetite, especially my late-night cravings, was significantly reduced, which
        had always been a major challenge for me.
      </SText>

      <SText>
        To further enhance the effects of Stripfast5000, I made a few lifestyle changes. I began
        practicing yoga a couple of times a week, took longer walks, and consistently opted for
        stairs over elevators. These manageable activities complemented the supplement’s benefits,
        helping me feel more energized and active without being too strenuous.
      </SText>

      <SText>
        Over the course of three months, I steadily lost a total of 15 pounds, achieving my weight
        loss goals while also improving my overall fitness.
      </SText>

      <SGrid columns={2}>
        <StaticImage height={400} alt="supplement" src="../../images/sup-stripf-1.jpeg" />
        <StaticImage height={400} alt="supplement" src="../../images/sup-stripf-2.jpeg" />
      </SGrid>

      <SItalicText>
        One tablet in the morning and another in the early afternoon: my Stripfast5000 routine led
        to increased thirst and boosted my water intake.
      </SItalicText>

      <SText>
        <SBoldText>Summing-up:</SBoldText>
      </SText>

      <SText>
        After using Stripfast5000 Fire Bullet weight loss supplement for a period of time, I
        concluded my experience once I reached my target weight. The supplement effectively helped
        reduce my appetite and fit well into a lifestyle that included light exercise and some
        dietary changes. Although there were some manageable side effects, the overall benefits—such
        as weight loss and heightened activity levels—made it worthwhile. If you're seeking a
        supplement to help control your appetite and don’t mind dealing with a few manageable side
        effects, Stripfast5000 Fire Bullet could be a suitable choice. However, be prepared for
        changes in how your food tastes and an increase in thirst.
      </SText>
    </Section>
  );
}
