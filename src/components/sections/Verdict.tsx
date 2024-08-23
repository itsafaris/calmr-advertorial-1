import React from "react";
import { Section, SGrid, SHeading, SItalicText, SText } from "@components/components";
import { StaticImage } from "gatsby-plugin-image";

export function Verdict() {
  return (
    <Section>
      <SHeading>My verdict</SHeading>

      <StaticImage alt="winner" src="../../images/verdict-1.jpg" style={{ maxHeight: 450 }} />

      <SItalicText>
        After trying several weight management methods, I ultimately chose Calmr - Sleep & Burn as
        my top solution.
      </SItalicText>

      <SText>
        In my journey to lose weight, I’ve tried almost every method imaginable—from weight
        management programs and appetite suppressants to weight loss injections and fat
        burners/metabolism boosters. Each method had its own set of challenges.
      </SText>

      <SText>
        Joining a weight loss program taught me the importance of commitment. It wasn’t just a quick
        fix; it required real changes to my lifestyle and eating habits, which I appreciated for its
        focus on sustainability. Despite the level of dedication needed, the comprehensive support
        provided was highly effective.
      </SText>

      <SText>
        Next, I turned to appetite control medication, hoping for a more straightforward solution.
        While it did help manage my weight, the side effects were hard to ignore. Nausea,
        constipation, headaches, and mood swings made it clear that this approach required careful
        medical oversight, which was a bit intimidating.
      </SText>

      <SText>
        Following that, I experimented with weight loss injections, drawn to the promise of rapid
        results. However, the high costs and severe health risks—such as stomach pain, vomiting, and
        constipation—made this the least appealing option. Additionally, the risk of regaining even
        more weight after stopping the injections was discouraging.
      </SText>

      <SText>
        I then tried fat burners and metabolism boosters. While they did offer a slight energy boost
        and helped with initial weight loss, the side effects—like jitters, anxiety, elevated heart
        rate, altered taste, and extreme thirst—were overwhelming. The potential health risks far
        outweighed the benefits, confirming that this method lacked long-term viability.
      </SText>

      <SText>
        Finally, I discovered Calmr - Sleep & Burn, and it was a game-changer. This supplement felt
        like it was giving my body everything it had been missing. Imagine getting the benefits of
        restful sleep, reduced stress, and effective weight management all in one. Calmr wasn’t just
        a convenient solution—it was like a holistic wellness package that fit seamlessly into my
        daily life. The combination of targeted ingredients not only supported my weight loss goals
        but also improved my sleep and overall well-being, making it the clear winner in my quest
        for a sustainable, effective solution.
      </SText>

      <StaticImage
        height={700}
        alt="winner"
        src="../../images/verdict-2.jpg"
        style={{ maxHeight: 600 }}
      />

      <SGrid columns={2}>
        <StaticImage height={700} alt="winner" src="../../images/verdict-3.jpeg" />
        <StaticImage height={700} alt="winner" src="../../images/verdict-4.jpg" />
      </SGrid>

      <SItalicText>
        Now, I can finally feel happy and relaxed without obsessing over weight loss, thanks to this
        incredible product.
      </SItalicText>

      <SText>
        What truly set Calmr - Sleep & Burn apart for me was how it addressed all my weight
        management and health needs in one comprehensive solution. It helped me lose weight and keep
        it off by supporting fat burning. The constant bloating and constipation I used to
        experience—completely gone. Calmr's carefully selected ingredients, including fiber-rich
        components, along with stress-reducing and digestion-supporting elements, got my gut health
        back on track. No more feeling like I was perpetually bloated!
      </SText>

      <SText>
        But the benefits didn’t end there. I was nourishing my body every day with essential
        nutrients like Vitamin D, Magnesium, and Melatonin, which not only supported my weight loss
        journey but also improved my sleep and overall well-being. And the best part? It was all
        from a clean, thoughtfully formulated supplement, without any unwanted additives like
        gluten, GMOs, lactose, nuts, soy, hormones, added sugars, or trans fats. Calmr was the
        all-in-one solution I had been searching for—a product that truly delivered on its promises.
      </SText>

      <SGrid columns={2}>
        <SItalicText>STARTING WEIGHT FEBRUARY 6TH, 2023</SItalicText>
        <SItalicText>CURRENT WEIGHT MARCH 9TH, 2024</SItalicText>
      </SGrid>

      <SGrid columns={2}>
        <StaticImage height={400} alt="weight before" src="../../images/scales-before.jpeg" />
        <StaticImage height={400} alt="weight after" src="../../images/scales-after.jpeg" />
      </SGrid>

      <SGrid columns={2}>
        <StaticImage
          height={700}
          alt="before weight loss journey"
          src="../../images/me-before.jpg"
        />
        <StaticImage height={700} alt="after weight loss journey" src="../../images/me-after.jpg" />
      </SGrid>

      <SItalicText>
        My transformation journey, where Calmr - Sleep & Burn was my trusted companion in losing 46
        pounds over six months.
      </SItalicText>

      <SText>
        When I consider all the options, choosing Calmr - Sleep & Burn is an easy decision. This
        isn’t just another supplement; it’s a complete health enhancer that's perfect for anyone
        looking to lose weight and feel their best. After all the diets, supplements, medications,
        and weight loss plans I've tried, nothing has made me feel as great as Calmr. It’s truly
        been a winning solution for me.
      </SText>
    </Section>
  );
}
