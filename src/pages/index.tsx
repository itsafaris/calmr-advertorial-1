import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { SEO } from "@components/SEO";
import { Box, Container } from "@chakra-ui/react";
import { siteConfig } from "src/conf";

import { FullComparisonChart } from "@components/sections/FullComparisonChart";
import { Verdict } from "@components/sections/Verdict";

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

import { Footer } from "@components/Footer";
import { FloatingBar } from "@components/FloatingBar";
import { Hero } from "@components/sections/Hero";
import { JumpToSection } from "@components/sections/JumpToSection";
import { SHeading } from "@components/components";

export const Head: HeadFC = () => {
  return (
    <SEO
      title={`My Weight Loss Journey - ${siteConfig.brandName}`}
      description="I've tested 10 different weight loss products in my weight loss experiment... And I found my winner for 2024"
    />
  );
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box>
      <FloatingBar />
      <Hero />
      <Container maxW="container.md">
        <Intro />
        <JumpToSection />
        <Backstory />
        <TestingMethodology />
        <SummaryComparisonChart />
        <ShortTermMethods />
        <TenMethods />

        <BestSolution />
        <SHeading mb={8}>Other Products </SHeading>
        <SupWeightWatchers />
        <SupHuel />
        <SupContrave />
        <SupOzempic />
        <SupHydroxycut />
        <SupBurnXT />
        <SupStripfast />
        <SupVitauthority />

        <Verdict />
        <FullComparisonChart />
      </Container>

      <Footer />
    </Box>
  );
};

export default IndexPage;
