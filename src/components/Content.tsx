import React from "react";
import { Box, Flex, Stack } from "@chakra-ui/react";
import { SBoldText, Section, SGrid, SHeading, SItalicText, SLink, SText } from "./components";
import { StaticImage } from "gatsby-plugin-image";
import { FullComparisonChart } from "./sections/FullComparisonChart";
import { Verdict } from "./sections/Verdict";
import { SupNOW } from "./sections/SupNOW";
import { SupVitauthority } from "./sections/SupVitauthority";
import { SupStripfast } from "./sections/SupStripfast";
import { SupBurnXT } from "./sections/SupBurnXT";
import { SupHydroxycut } from "./sections/SupHydroxycut";
import { SupOzempic } from "./sections/SupOzempic";
import { SupContrave } from "./sections/SupContrave";
import { SupHuel } from "./sections/SupHuel";
import { SupWeightWatchers } from "./sections/SupWeightWatchers";
import { BestSolution } from "./sections/BestSolution";
import { TenMethods } from "./sections/TenMethods";
import { ShortTermMethods } from "./sections/ShortTermMethods";
import { SummaryComparisonChart } from "./sections/SummaryComparisonChart";
import { TestingMethodology } from "./sections/TestingMethodology";
import { Backstory } from "./sections/Backstory";
import { Intro } from "./sections/Intro";
import { Hero } from "./sections/Hero";

export function Content() {
  return (
    <Box>
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
    </Box>
  );
}
