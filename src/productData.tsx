import { StaticImage } from "gatsby-plugin-image";

export type ScoreOf5 = 1 | 2 | 3 | 4 | 5;

export type Product = {
  method: string;
  image: React.ReactNode;
  initialWeightLoss: ScoreOf5;
  weightMaintenance: ScoreOf5;
  sideEffects: string;
  monthlyCost: ScoreOf5;
  easeOfUse: "easy" | "medium";
  overallRating: number;
  ratingComment: string;
  isRuledOut?: boolean;
  positives: Array<{ title: string; text: string }>;
  negatives: Array<{ title: string; text: string }>;
};

export const mainProduct: Product & { shortTitle: string } = {
  shortTitle: "Calmr",
  method: "Calmr - Sleep & Burn",
  image: <StaticImage height={240} src="./images/sup-calmr-1.jpg" alt="Calmr - Sleep & Burn" />,
  initialWeightLoss: 5,
  weightMaintenance: 5,
  sideEffects: "None",
  monthlyCost: 2,
  easeOfUse: "easy",
  overallRating: 5,
  ratingComment:
    "Highly recommended for sustainable weight loss, banishing bloating and constipation, and providing a daily supercharge of essential vitamins and minerals. It's easy to integrate into your current lifestyle and diet.",
  positives: [
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
  ],
  negatives: [
    {
      title: "Patience Pays Off",
      text: "It took a few weeks before I started noticing significant changes, but staying consistent with Calmr has truly paid off in the long run.",
    },
  ],
};

export const productData: Product[] = [
  mainProduct,
  {
    method: "WeightWatchers Weight-Loss Program",
    image: (
      <StaticImage
        src="./images/sup-wwapp-1.png"
        alt="WeightWatchers Weight-Loss Program"
        height={240}
      />
    ),
    initialWeightLoss: 4,
    weightMaintenance: 4,
    sideEffects: "None",
    monthlyCost: 3,
    easeOfUse: "medium",
    overallRating: 4.5,
    ratingComment:
      "Ideal for those looking to make a lasting lifestyle and diet change. This approach demands more personal dedication but is highly effective and comes with extensive support.",
    positives: [
      {
        title: "Weight Loss",
        text: "Dropped 10 pounds in the first month by following the points-based program.",
      },
      {
        title: "Maintaining Weight Loss",
        text: "Successfully maintained weight by adhering to the guidelines and mastering portion control.",
      },
      {
        title: "Points System Flexibility",
        text: "I enjoyed a variety of foods without the need for strict calorie counting, which felt freeing.",
      },
      {
        title: "Extensive Support",
        text: "I had access to both online and in-person communities that kept me motivated and connected with others on the same path.",
      },
      {
        title: "User-Friendly Mobile App",
        text: "The app offered useful features like meal planning tools, recipes, workouts, and meditations, making daily tracking and planning more convenient.",
      },
      {
        title: "Increased Energy",
        text: "Experienced a noticeable boost in energy throughout the day, which was a pleasant surprise.",
      },
    ],
    negatives: [
      {
        title: "Challenging Start",
        text: "Initially, getting used to the points system was difficult and required some time to fully grasp.",
      },
      {
        title: "Cost",
        text: "The subscription fee, along with an initial membership fee, was a concern at first, though it proved worthwhile in the long run. There are also optional extras like weight loss medications and coach-led workshops that come with additional costs.",
      },
      {
        title: "Potential Nutritional Imbalance",
        text: "While flexible, the program doesn't always guarantee a balanced diet, which may require extra planning.",
      },
    ],
  },
  {
    method: "Huel Original Complete Meal",
    image: (
      <StaticImage height={240} src="./images/sup-huel-5.JPG" alt="Huel Original Complete Meal" />
    ),
    initialWeightLoss: 4,
    weightMaintenance: 3,
    sideEffects: "None",
    monthlyCost: 2,
    easeOfUse: "easy",
    overallRating: 3.5,
    ratingComment:
      "It's a solid choice for moderate weight loss, and overall, it’s a reliable product that keeps you feeling satisfied. Expect gradual results that are easy to sustain with this supplement.",
    positives: [
      {
        title: "Weight Loss Success",
        text: "I managed to lose 8 pounds in the first month.",
      },
      {
        title: "Ongoing Weight Management",
        text: "I consistently lost around 0.5-1 pound each week, without experiencing hunger.",
      },
      {
        title: "Well-Balanced Nutrition",
        text: "The supplement offers a balanced combination of protein, fats, and carbohydrates, along with essential vitamins and minerals, including vitamin B12 to support metabolism.",
      },
      {
        title: "Budget-Friendly",
        text: "Each serving is more affordable than most fast food options.",
      },
      {
        title: "No Meal Compromises",
        text: "I swapped my regular lunch with the supplement and managed my favorite foods by keeping portion sizes in check.",
      },
      {
        title: "Quick & Convenient",
        text: "It's faster to prepare than a full meal, which is perfect for hectic workdays.",
      },
      {
        title: "Socially Compatible",
        text: "I could easily incorporate the supplement into social situations without disrupting dining out.",
      },
    ],
    negatives: [
      {
        title: "Not Fully Satisfying",
        text: "Despite claims that it keeps you full, I still found myself reaching for an extra snack like a granola or protein bar to feel completely satisfied.",
      },
      {
        title: "Flavor Could Be Better",
        text: "The taste is somewhat bland and doesn't quite match the satisfaction of real food.",
      },
      {
        title: "Grainy Texture",
        text: "The powder doesn’t mix smoothly, leaving a gritty texture that’s not as enjoyable to drink.",
      },
    ],
  },
  {
    method: "Contrave Weight Loss Pill",
    image: (
      <StaticImage
        height={240}
        src="./images/sup-contrave-4.jpg"
        alt="Contrave Weight Loss Pills"
      />
    ),
    initialWeightLoss: 3,
    weightMaintenance: 3,
    sideEffects: "Nausea, constipation, headache, potential mood changes",
    monthlyCost: 4,
    easeOfUse: "medium",
    overallRating: 4,
    ratingComment:
      "It's effective for weight loss, but the side effects can be difficult, and it should be used under medical supervision.",
    positives: [
      {
        title: "Noticeable Weight Loss",
        text: "I began seeing changes in my weight within just four weeks, losing a total of 10 pounds.",
      },
      {
        title: "Appetite Suppression",
        text: "I no longer feel as hungry as before, which makes it much easier to eat smaller portions without feeling deprived.",
      },
      {
        title: "Less Cravings",
        text: "My cravings for snacks and sweets have significantly decreased. This shift has been a major factor in helping me stick to my weight loss goals.",
      },
      {
        title: "Ease of Use",
        text: "Taking these pills daily is so much simpler than following a strict diet. It easily fits into my daily routine.",
      },
      {
        title: "Mood Improvement",
        text: "The pills have also had an unexpected benefit; I feel more positive and emotionally balanced, thanks to bupropion's mood-enhancing effects. It's like getting an emotional uplift along with the weight loss.",
      },
    ],
    negatives: [
      {
        title: "Unpleasant Side Effects",
        text: "While using Contrave, I've had to deal with some bothersome side effects like hot flashes, constipation, and headaches.",
      },
      {
        title: "Requires Medical Oversight",
        text: "Starting Contrave wasn't as simple as buying an over-the-counter product. I needed a prescription from my doctor and had to attend regular check-ups. Additionally, it feels uneasy relying on medication for weight loss, and I'm concerned about becoming too dependent on it rather than focusing on lasting lifestyle changes.",
      },
      {
        title: "Not for Everyone",
        text: "Contrave isn't a universal solution. It comes with potential side effects, including an increased risk of suicidal thoughts and behaviors. It's important to exercise caution and have a thorough discussion with a healthcare provider before starting it.",
      },
    ],
  },
  {
    method: "Weight Loss Injection - Ozempic",
    image: <StaticImage height={240} src="./images/sup-ozempic-2.png" alt="Ozempic Injection" />,
    initialWeightLoss: 5,
    weightMaintenance: 1,
    sideEffects: "Stomach pain, vomiting, constipation",
    monthlyCost: 5,
    easeOfUse: "easy",
    overallRating: 2,
    ratingComment:
      "Least recommended due to high costs, serious health concerns, and the risk of regaining more weight after discontinuation. Requires close medical supervision.",
    positives: [
      {
        title: "Quick Weight Loss",
        text: "Noticed weight loss results fairly quickly.",
      },
      {
        title: "Appetite Suppression",
        text: "My hunger levels dropped noticeably, making it easier to eat less without feeling deprived.",
      },
      {
        title: "Simple Routine",
        text: "Only required a weekly injection, which was much simpler than managing daily pills or adhering to a strict diet.",
      },
      {
        title: "Better Blood Sugar Control",
        text: "Observed more stable blood sugar levels.",
      },
    ],
    negatives: [
      {
        title: "Unpleasant Side Effects",
        text: "Experienced nausea, digestive issues, and stomach discomfort.",
      },
      {
        title: "Short-Term Fix",
        text: "Concerned that the weight could return if I stopped the injections, raising doubts about long-term effectiveness.",
      },
      {
        title: "High Cost",
        text: "The injections were pricey, making it a significant financial burden.",
      },
      {
        title: "Injection Site Irritation",
        text: "Occasionally, the injection site would become red and itchy.",
      },
      {
        title: "Reliance on Medication",
        text: "Felt uneasy about depending on medication for weight loss instead of focusing solely on lifestyle changes.",
      },
    ],
  },
  {
    method: "Hydroxycut Weight Loss Pills",
    image: (
      <StaticImage
        height={240}
        src="./images/sup-hydroxycut-4.jpg"
        alt="Hydroxycut Weight Loss Pills"
      />
    ),
    initialWeightLoss: 1,
    weightMaintenance: 1,
    sideEffects: "Jitters, anxiety, elevated heart rate",
    monthlyCost: 2,
    easeOfUse: "easy",
    overallRating: 1,
    isRuledOut: true,
    ratingComment: "Not recommended, potential health risks outweigh the benefits.",
    positives: [
      {
        title: "Weight Loss",
        text: "It did help me shed 5 pounds over a few weeks by reducing my food intake on the days I used it.",
      },
      {
        title: "Appetite Control",
        text: "Hydroxycut was effective at suppressing my hunger, especially on days when I was more tempted to snack or indulge.",
      },
      {
        title: "Formulated for Women",
        text: "Hydroxycut + Women is fortified with essential nutrients like Iron, Folate, and Biotin, which support healthy hair, skin, and nails, along with Collagen for added benefits.",
      },
      {
        title: "Boost in Energy",
        text: "The supplement provided a significant energy boost, which helped increase my physical activity and burn more calories.",
      },
      {
        title: "Metabolism Enhancement",
        text: "The key ingredient, C. Canephora Robusta, effectively boosted my metabolism.",
      },
      {
        title: "Convenient to Use",
        text: "The capsules were easy to take on the go, had no odor, and were tasteless, making them simple to include in my daily routine.",
      },
      {
        title: "No Taste",
        text: "The capsules were odorless and tasteless.",
      },
    ],
    negatives: [
      {
        title: "Long-Term Health Concerns",
        text: "Although Hydroxycut was effective for short-term weight loss, I was worried about its long-term use due to potential health risks, such as mood changes and the impact of high stimulant levels on my body.",
      },
      {
        title: "Uncomfortable Side Effects",
        text: "The caffeine (150mg per dose) led to uncomfortable jitters and restlessness.",
      },
      {
        title: "Usage Limitations",
        text: "I couldn't use Hydroxycut daily. On the days I did, it helped curb my appetite, but I often felt quite unwell afterwards, with my heart racing uncomfortably fast.",
      },
    ],
  },
  {
    method: "Burn-XT Fat Burner",
    image: <StaticImage height={240} src="./images/sup-burnxt-3.jpg" alt="Burn-XT Fat Burner" />,
    initialWeightLoss: 1,
    weightMaintenance: 1,
    sideEffects: "Jitters, headaches, potential for energy crash",
    monthlyCost: 2,
    easeOfUse: "easy",
    overallRating: 1,
    isRuledOut: true,
    ratingComment:
      "It's effective for moderate weight loss and provides an energy boost, but it's not highly recommended due to the risk of severe side effects.",
    positives: [
      {
        title: "Weight Loss",
        text: "I was able to lose about 6 pounds over the course of 8 weeks.",
      },
      {
        title: "Appetite Control",
        text: "It definitely helped me manage my cravings and keep my eating habits in check.",
      },
      {
        title: "Increased Energy",
        text: "I enjoyed the extra energy throughout the day. It kept me more active and on the move.",
      },
      {
        title: "Digestive Support",
        text: "It seemed to aid in digestion, reducing bloating and helping me feel more comfortable.",
      },
    ],
    negatives: [
      {
        title: "Side Effects",
        text: "The caffeine caused some jitters and sleepless nights, which were manageable but less than ideal. The initial stomach discomfort was also a drawback.",
      },
      {
        title: "Inconsistent Effects",
        text: "The effects varied from day to day, making it difficult to predict how I'd feel.",
      },
    ],
  },
  {
    method: "Stripfast5000 Fire Bullet Weight-Loss Supplement",
    image: (
      <StaticImage
        height={240}
        src="./images/sup-stripf-3.jpg"
        alt="Stripfast5000 Fire Bullet Weight-Loss Supplement"
      />
    ),
    initialWeightLoss: 1,
    weightMaintenance: 1,
    sideEffects: "Altered taste, extreme thirst",
    monthlyCost: 2,
    easeOfUse: "easy",
    overallRating: 1,
    isRuledOut: true,
    ratingComment: "Not recommended due to side effects and lack of sustained effectiveness.",
    positives: [
      {
        title: "Gradual Weight Loss",
        text: "I steadily lost 7 pounds over three months.",
      },
      {
        title: "Well Tolerated",
        text: "My body adjusted smoothly to the supplement without experiencing any significant side effects.",
      },
      {
        title: "Supportive for Weight Loss",
        text: "It provided solid support for my weight loss, especially when combined with more exercise and an improved diet.",
      },
      {
        title: "Reduced Appetite",
        text: "I found myself snacking less, particularly in the evenings, which has always been a struggle for me.",
      },
    ],
    negatives: [
      {
        title: "Altered Food Flavor",
        text: "The change in how food tasted helped curb my snacking but made meals less enjoyable overall.",
      },
      {
        title: "Excessive Thirst",
        text: "While the increased thirst encouraged me to drink more water, it sometimes felt overwhelming.",
      },
    ],
  },
  {
    method: "Vitauthority Multi Collagen Burn",
    image: (
      <StaticImage
        height={240}
        src="./images/sup-vitout-4.jpg"
        alt="Vitauthority Multi Collagen Burn"
      />
    ),
    initialWeightLoss: 1,
    weightMaintenance: 1,
    sideEffects: "Minimal, occasional gastrointestinal discomfort",
    monthlyCost: 3,
    easeOfUse: "easy",
    overallRating: 1,
    isRuledOut: true,
    ratingComment:
      "It's not primarily recommended for weight loss due to its moderate results in that area, but it does offer benefits for skin and joint health.",
    positives: [
      {
        title: "Flavor and Easy Mixing",
        text: "The collagen powder has a pleasant taste and mixes effortlessly with both coffee and water, making it simple to include in my daily routine.",
      },
      {
        title: "Improved Skin Appearance",
        text: "My skin started to glow, and noticeable signs of aging like smile lines and crow's feet visibly diminished.",
      },
      {
        title: "Enhanced Hair and Nail Growth",
        text: "I observed significant improvements in the strength and growth of my hair and nails, contributing to an overall sense of wellness.",
      },
      {
        title: "Appetite Control",
        text: "It successfully curbed my appetite, making me feel less hungry throughout the day.",
      },
    ],
    negatives: [
      {
        title: "Limited Weight Loss",
        text: "The weight loss results were minimal and not as significant as I had hoped, making it less effective for those focused primarily on shedding pounds.",
      },
      {
        title: "Packaging Problems",
        text: "The packaging was messy, even though it was sealed, which was frustrating. Retrieving the scoop from the powder also caused unnecessary mess.",
      },
    ],
  },
  {
    method: "NOW Foods Acetyl-L-Carnitine",
    image: (
      <StaticImage height={240} src="./images/sup-now-4.jpg" alt="NOW Foods Acetyl-L-Carnitine" />
    ),
    initialWeightLoss: 1,
    weightMaintenance: 1,
    sideEffects: "None",
    monthlyCost: 1,
    easeOfUse: "easy",
    overallRating: 1,
    ratingComment:
      "It's not primarily recommended for weight loss due to its mild results, but it provides a noticeable cognitive and energy boost.",
    isRuledOut: true,
    positives: [
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
    ],
    negatives: [
      {
        title: "Modest Weight Loss",
        text: "The weight loss effects were minimal and not as impactful as I had anticipated, considering the research I had done.",
      },
      {
        title: "No Immediate Results",
        text: "Unlike some supplements that show quick results, the effects of Acetyl-LCarnitine were extremely minor and required consistent intake over a long period.",
      },
    ],
  },
];
