import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { SEO } from "@components/SEO";
import { Badge, Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { siteConfig } from "src/conf";
import { StaticImage } from "gatsby-plugin-image";
import { ProductCard } from "@components/ProductCard";
import { SGrid, Section, SBoldText, SItalicText, SLink, SText } from "@components/components";

import { FullComparisonChart } from "@components/sections/FullComparisonChart";
import { Verdict } from "@components/sections/Verdict";
import { SupNOW } from "@components/sections/SupNOW";
import { SupVitauthority } from "@components/sections/SupVitauthority";
import { SupStripfast } from "@components/sections/SupStripfast";
import { SupBurnXT } from "@components/sections/SupBurnXT";
import { SupHydroxycut } from "@components/sections/SupHydroxycut";
import { SupOzempic } from "@components/sections/SupOzempic";
import { SupContrave } from "@components/sections/SupContrave";
import { SupHuel } from "@components/sections/SupHuel";
import { SupWeightWatchers } from "@components/sections/SupWeightWatchers";
import { BestSolution } from "@components/sections/BestSolution";
import { TenMethods } from "@components/sections/TenMethods";
import { ShortTermMethods } from "@components/sections/ShortTermMethods";
import { SummaryComparisonChart } from "@components/sections/SummaryComparisonChart";
import { TestingMethodology } from "@components/sections/TestingMethodology";
import { Backstory } from "@components/sections/Backstory";
import { Intro } from "@components/sections/Intro";
import { Hero } from "@components/sections/Hero";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";

export const Head: HeadFC = () => {
  return <SEO title={`My Weight Loss Journey - ${siteConfig.brandName}`} />;
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box>
      <Container maxW="container.md">
        <Header />

        <Hero />
        <Intro />
        <Backstory />
        <TestingMethodology />
        <SummaryComparisonChart />
        <ShortTermMethods />
        <TenMethods />
        <BestSolution />

        <SupWeightWatchers />
        <SupHuel />
        <SupContrave />
        <SupOzempic />
        <SupHydroxycut />
        <SupBurnXT />
        <SupStripfast />
        <SupVitauthority />
        <SupNOW />

        <Verdict />
        <FullComparisonChart />

        <Stack spacing={10}>
          <ProductCard
            bannerText="🏆 The Winner 🏆"
            productTitle="Calmr - Sleep & Burn (with Ashwagandha)"
            productImage={
              <StaticImage height={240} src="../images/calmr.png" alt="Calmr - Sleep & Burn" />
            }
            rating={5}
            positives={[
              {
                title: "Impressive Weight Loss",
                text: "I lost an amazing 12 pounds in my first month of using Calmr, all while enjoying better sleep. It's been a game-changer for me!",
              },
              {
                title: "Two-in-One Solution",
                text: "I love how Calmr tackles both my weight issues and sleep problems. It's like getting two supplements in one, which is incredibly convenient.",
              },
              {
                title: "Sleep Like a Baby",
                text: "The Mood and Sleep Blend in Calmr has transformed my nights. I'm falling asleep faster and waking up feeling refreshed like never before.",
              },
              {
                title: "Stress? What Stress?",
                text: "Since starting Calmr, I've noticed a significant drop in my stress and anxiety levels. I feel more relaxed and composed throughout the day.",
              },
              {
                title: "Gentle on My System",
                text: "Unlike other supplements I've tried, Calmr hasn't given me any nasty side effects. It's been smooth sailing from day one.",
              },
              {
                title: "Energized Days",
                text: "Surprisingly, even though it helps me sleep better, I'm feeling more energetic during the day. I'm tackling my tasks with newfound vigor!",
              },
              {
                title: "Goodbye, Midnight Snacks",
                text: "My late-night cravings have practically vanished, and I'm finding it much easier to stick to my diet. It's like my appetite is finally under control.",
              },
              {
                title: "Happier Me",
                text: "I've noticed a significant uplift in my mood since starting Calmr. I feel more balanced and positive, which has improved various aspects of my life.",
              },
            ]}
            negatives={[
              {
                title: "Investment in Health",
                text: "While it's pricier than some other options I've tried, the multiple benefits I'm experiencing make Calmr absolutely worth every penny.",
              },
              {
                title: "Patience Pays Off",
                text: "It took a few weeks before I started noticing significant changes, but staying consistent with Calmr has truly paid off in the long run.",
              },
            ]}
          />

          <ProductCard
            bannerText="🥈 Runner Up 🥈"
            productTitle="WeightWatchers Weight Loss Program"
            productImage={
              <StaticImage
                src="../images/weightwatchers.png"
                alt="Biome Secret Superfood Weight Loss Shake"
                height={240}
              />
            }
            rating={4.5}
            positives={[
              {
                title: "Weight Loss",
                text: "Lost 10 pounds in the first month by following the point-based system.",
              },
              {
                title: "Maintaining Weight Loss",
                text: "Kept the weight off by sticking to the WeightWatchers guidelines and learning portion control.",
              },
              {
                title: "Flexibility of the Points System",
                text: "I was able to enjoy a wide range of foods without strict calorie counting and it was liberating.",
              },
              {
                title: "Comprehensive Support",
                text: "I had access to both online and in-person community support that helped me stay motivated and connected with others on the same journey.",
              },
              {
                title: "Inclusive Mobile App",
                text: "The app provided me helpful features like meal planning tools, recipes, workouts, and meditations, making daily tracking and planning easier.",
              },
              {
                title: "More Energy",
                text: "Felt more energetic throughout the day, which was unexpected and delightful.",
              },
            ]}
            negatives={[
              {
                title: "Tough Start",
                text: "Initially, adapting to the points system was challenging and took some time to understand fully.",
              },
              {
                title: "Cost",
                text: "The subscription cost, plus a membership starter fee, was a concern initially, although it paid off in the long run. Additionally, there are optional add-ons, such as weight loss medications and coach-led workshops, which also require payment.",
              },
              {
                title: "Lack of Guaranteed Nutrition Balance",
                text: "While flexible, the program doesn’t always ensure a balanced diet, which might require additional planning.",
              },
            ]}
          />

          <ProductCard
            productTitle="Huel Original Complete Meal"
            productImage={
              <StaticImage
                height={240}
                src="../images/huel.jpg"
                alt="Huel Original Complete Meal"
              />
            }
            rating={3.5}
            positives={[
              { title: "Effective Weight Loss", text: "I lost 8 pounds in the first month." },
              {
                title: "Consistent Weight Management",
                text: "Each week, I continued to lose 0.5-1 pound, without feeling hungry.",
              },
              {
                title: "Balanced Nutrients",
                text: "The shakes provide a robust mix of protein, fats, and carbs, plus essential vitamins and minerals, including vitamin B12 to boost my metabolism.",
              },
              {
                title: "Affordability",
                text: "Each shake costs less than typical fast food options.",
              },
              {
                title: "No Compromise on Meals",
                text: "I replaced my daily lunch with the shake and managed my favorite foods by controlling portion sizes.",
              },
              {
                title: "Convenience",
                text: "Quicker to prepare than a full meal, which is ideal for busy workdays.",
              },
              {
                title: "Socially Flexible",
                text: "I could easily fit the meal replacement shake into my social life without impacting dining out.",
              },
            ]}
            negatives={[
              {
                title: "Not Satisfying",
                text: "Despite Huel's claim that it should keep you feeling fuller for longer without cravings or the need for snacks, I still found it challenging to avoid reaching for an extra snack like a granola or protein bar to achieve fullness.",
              },
              {
                title: "Average Taste",
                text: "The flavors are a bit bland and don't compare well to real food.",
              },
              {
                title: "Grainy Texture",
                text: "When shaken, the powder doesn't mix well, leaving a gritty feeling that's less enjoyable to drink.",
              },
            ]}
          />

          <ProductCard
            productTitle="Contrave Weight Loss Pills"
            productImage={
              <StaticImage
                height={240}
                src="../images/contrave.jpg"
                alt="Contrave Weight Loss Pills"
              />
            }
            rating={4}
            positives={[
              {
                title: "Effective Weight Loss",
                text: "I started noticing a difference in my weight within just four weeks and lost 10 pounds.",
              },
              {
                title: "Reduced Appetite",
                text: "I'm no longer as hungry as I used to be, which makes it so much easier to eat smaller portions and not feel like I'm missing out.",
              },
              {
                title: "Reduced Cravings",
                text: "My cravings for snacks and sweets have really dropped off. This change has been a huge help in sticking to my weight loss goals.",
              },
              {
                title: "Convenience",
                text: "Taking the pills daily is so straightforward compared to keeping up with a strict diet. It fits seamlessly into my routine.",
              },
              {
                title: "Enhanced Mood",
                text: "The pills have had a bonus effect; I feel happier and more stable, thanks to the mood-enhancing effects of the bupropion. It's like getting a boost of positivity along with the weight loss benefits.",
              },
            ]}
            negatives={[
              {
                title: "Side Effects",
                text: "While taking Contrave, I've had to deal with some annoying side effects like hot flashes, constipation, and headache.",
              },
              {
                title: "Requires Prescription and Medical Dependency",
                text: "Getting started with Contrave was more complicated than picking up something over-the-counter. I had to see my doctor for a prescription and attend regular check-ups. Additionally, it feels unsettling to rely on medication for weight loss, and I'm concerned about becoming too dependent on these pills rather than focusing on sustainable lifestyle changes.",
              },
              {
                title: "Not Suitable for Everyone",
                text: "Contrave really isn't a one-size-fits-all solution. It has potential side effects, including an increased risk of suicidal thoughts and behaviors. It's important to be cautious and talk thoroughly with a healthcare provider before starting it.",
              },
            ]}
          />

          <ProductCard
            productTitle="Weight Loss Injection - Ozempic"
            productImage={
              <StaticImage height={240} src="../images/ozempic.png" alt="Ozempic Injection" />
            }
            rating={4}
            positives={[
              {
                title: "Effective Weight Loss",
                text: "Started seeing weight loss results quickly.",
              },
              {
                title: "Reduced Appetite",
                text: "My hunger levels dropped significantly, making it easier to eat less without feeling deprived.",
              },
              {
                title: "Convenience",
                text: "Just a weekly injection, which was much simpler than remembering daily pills or sticking to a strict diet.",
              },
              {
                title: "Improved Blood Sugar Levels",
                text: "Noticed my blood sugar levels were more stable.",
              },
            ]}
            negatives={[
              {
                title: "Bad Side Effects",
                text: "Experienced some nausea, digestion issues and stomach pain.",
              },
              {
                title: "Temporary Solution",
                text: "Worried that the weight might come back if I stopped the injections, questioning the long-term sustainability.",
              },
              {
                title: "Cost",
                text: "The injections were expensive, making it a significant financial consideration.",
              },
              {
                title: "Injection Site Reactions",
                text: "Sometimes the area where I injected would get red and itchy.",
              },
              {
                title: "Medical Dependency",
                text: "Felt uneasy about relying on a medication for weight loss rather than lifestyle changes alone.",
              },
            ]}
          />

          <ProductCard
            productTitle="Hydroxycut Weight Loss Pills"
            productImage={
              <StaticImage
                height={240}
                src="../images/hydroxycut.jpg"
                alt="Hydroxycut Weight Loss Pills"
              />
            }
            rating={3.5}
            positives={[
              {
                title: "Weight Loss",
                text: "It did help me lose 5 lbs over a few weeks by reducing my food intake on the days I used it.",
              },
              {
                title: "Appetite Suppression",
                text: "Hydroxycut was effective at curbing my hunger, particularly on days filled with temptations or when I noticed I was more prone to snacking.",
              },
              {
                title: "Designed for Women",
                text: "Hydroxycut +Women is enriched with nutrients important for women's health, like Iron, Folate, and Biotin, which help maintain healthy hair, skin, and nails, and Collagen for additional health benefits.",
              },
              {
                title: "Energy Boost",
                text: "The supplement significantly increased my energy levels, which enhanced my physical activity, helping burn more calories.",
              },
              {
                title: "Energy and Metabolism Boost",
                text: "The key ingredient, C. Canephora Robusta, was effective in boosting my metabolism.",
              },
              {
                title: "Convenience",
                text: "The capsules were easy to take on the go, had no smell, and were tasteless, making them easy to incorporate into my daily routine.",
              },
              { title: "Taste", text: "The capsules had no smell, and were tasteless." },
            ]}
            negatives={[
              {
                title: "Long-term Concerns",
                text: "While Hydroxycut was effective for temporary weight loss, I was concerned about using it over the long term due to the potential health risks, such as mood changes and how the high stimulant levels affected my body.",
              },
              {
                title: "Tough Side Effects",
                text: "The caffeine (150mg per dose) caused uncomfortable jitters and restlessness.",
              },
              {
                title: "Usage Issues",
                text: "I couldn't use Hydroxycut every day. On the days I did, it helped control my hunger, but I often felt really sick afterwards, with my heart racing uncomfortably fast.",
              },
            ]}
          />

          <ProductCard
            productTitle="Burn-XT Fat Burner"
            productImage={
              <StaticImage height={240} src="../images/burn-xt.jpg" alt="Burn-XT Fat Burner" />
            }
            rating={3.5}
            positives={[
              { title: "Weight Loss", text: "I managed to lose about 6 pounds in 8 weeks." },
              {
                title: "Controlled Appetite",
                text: "It really did help manage my cravings and control my eating patterns.",
              },
              {
                title: "Energy Boost",
                text: "I loved the extra energy during the day. It kept me moving and more active than usual.",
              },
              {
                title: "Digestive Aid",
                text: "It seemed to help with my digestion, making me feel less bloated and more comfortable.",
              },
            ]}
            negatives={[
              {
                title: "Side Effects",
                text: "The caffeine led to some jitters and sleepless nights, which were manageable but not ideal. The initial stomach upset was also a downside.",
              },
              {
                title: "Inconsistency",
                text: "Some days the effects were stronger than others, which made it hard to predict how I'd feel.",
              },
            ]}
          />

          <ProductCard
            productTitle="Stripfast5000 Fire Bullet Weight-Loss Supplement"
            productImage={
              <StaticImage
                height={240}
                src="../images/stripfast500.jpg"
                alt="Stripfast5000 Fire Bullet Weight-Loss Supplement"
              />
            }
            rating={3.5}
            positives={[
              {
                title: "Weight Loss",
                text: "Over the course of three months, I steadily lost a total of 7 pounds.",
              },
              {
                title: "Good Tolerance",
                text: "My body adjusted well to the supplement without any harsh side effects.",
              },
              {
                title: "Weight Loss Support",
                text: "It effectively supported my weight loss, especially when combined with my increased activities and better diet.",
              },
              {
                title: "Controlled Appetite",
                text: "I felt less inclined to snack, particularly in the evenings, which has always been a challenge for me.",
              },
            ]}
            negatives={[
              {
                title: "Altered Taste",
                text: "The change in how food tasted helped reduce my snacking but also made meals less enjoyable.",
              },
              {
                title: "Extreme Thirst",
                text: "The increased thirst was beneficial for my water intake but sometimes felt excessive.",
              },
            ]}
          />

          <ProductCard
            productTitle="Vitauthority Multi Collagen Burn"
            productImage={
              <StaticImage
                height={240}
                src="../images/collagen.jpg"
                alt="Vitauthority Multi Collagen Burn"
              />
            }
            rating={3.5}
            positives={[
              {
                title: "Taste and Mixability",
                text: "The collagen powder tastes good and mixes seamlessly with both coffee and water, making it easy to consume regularly without any hassle.",
              },
              {
                title: "Skin Improvement",
                text: "My skin started glowing, and signs of aging such as smile lines and crow's feet visibly reduced.",
              },
              {
                title: "Hair and Nail Growth",
                text: "I saw noticeable improvements in the strength and growth of my hair and nails, contributing to my overall feeling of wellness.",
              },
              {
                title: "Appetite Suppression",
                text: "It effectively curbed my appetite, making me feel less hungry throughout the day.",
              },
            ]}
            negatives={[
              {
                title: "Minimal Weight Loss",
                text: "The weight loss result was extremely minor, less significant than I had hoped, making it a less effective solution for those primarily seeking weight reduction.",
              },
              {
                title: "Packaging Issues",
                text: "The packaging was messy despite being sealed, which was a bit frustrating. Retrieving the scoop from the powder also created an unnecessary mess.",
              },
            ]}
          />

          <ProductCard
            productTitle="NOW Foods Acetyl-L-Carnitine"
            productImage={
              <StaticImage
                height={240}
                src="../images/nowfoods.jpg"
                alt="NOW Foods Acetyl-L-Carnitine"
              />
            }
            rating={4}
            positives={[
              {
                title: "Increased Energy",
                text: "The most noticeable benefit was the boost in energy, which helped me stay active.",
              },
              {
                title: "Cognitive Benefits",
                text: "I appreciated the cognitive enhancement from the supplement, which was a great bonus, helping me feel more alert and focused throughout the day.",
              },
              {
                title: "Clean Ingredients",
                text: "The vegetarian capsules and the clean, straightforward formulation of the supplement were appealing, aligning with my preference for minimal and natural ingredients.",
              },
            ]}
            negatives={[
              {
                title: "Modest Weight Loss",
                text: "The weight loss effects were minimal and not as impactful as I had anticipated, considering the research I had done.",
              },
              {
                title: "No Immediate Results",
                text: "Unlike some supplements that show quick results, the effects of Acetyl-LCarnitine were extremely minor and required consistent intake over a long period.",
              },
            ]}
          />
        </Stack>
      </Container>

      <Footer />
    </Box>
  );
};

export default IndexPage;
