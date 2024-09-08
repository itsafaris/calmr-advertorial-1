import { SBoldText, Section, SGrid, SHeading, SItalicText, SText } from "@components/components";
import ComparisonTable from "@components/ComparisonTable";
import { productData } from "src/productData";

export function SummaryComparisonChart() {
  return (
    <Section id="results-summarized-section">
      <SHeading>All Results Summarized 👇</SHeading>

      <SText>
        After experimenting with numerous weight loss methods and experiencing a variety of
        outcomes, I decided to create a straightforward chart. This chart is based on my personal
        experiences and highlights what genuinely worked for me, what was easiest to maintain, and
        what provided lasting results. I've ranked the methods from most to least preferred and
        rated them on a scale of 1 to 5, with 5 being the highest score and 1 the lowest.
      </SText>

      <ComparisonTable data={productData.slice(0, 5)} />
    </Section>
  );
}
