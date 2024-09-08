import React from "react";

import { Section, SHeading } from "@components/components";
import ComparisonTable from "@components/ComparisonTable";
import { productData } from "src/productData";

export function FullComparisonChart() {
  return (
    <Section id="comparison-chart-section">
      <SHeading>Full Comparison Chart</SHeading>

      <ComparisonTable data={productData} />
    </Section>
  );
}
