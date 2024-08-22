import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { SEO } from "@components/SEO";
import { Box, Container, Stack } from "@chakra-ui/react";
import { siteConfig } from "src/conf";
import { StaticImage } from "gatsby-plugin-image";
import { ProductCard } from "@components/ProductCard";
import { Section } from "@components/components";

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
import ComparisonTable from "@components/ComparisonTable";
import { Header } from "@components/Header";
import { Footer } from "@components/Footer";
import { productData } from "src/productData";

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

        <Section>
          <ComparisonTable data={productData} />
        </Section>
      </Container>

      <Footer />
    </Box>
  );
};

export default IndexPage;
