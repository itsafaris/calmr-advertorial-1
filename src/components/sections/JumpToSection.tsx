import React from "react";
import { Section, SHeading, SText } from "@components/components";
import { Box, Stack, Text } from "@chakra-ui/react";
import { Link } from "gatsby";

const sections = [
  { title: "A Backstory", to: "#backstory-section" },
  { title: "My Testing Approach", to: "#testing-approach-section" },
  { title: "All Results Summarized", to: "#results-summarized-section" },
  { title: "Testing 10 Weight-Loss Products", to: "#testing-products-section" },
  { id: "winner", title: "The Winner 🏆", to: "#winner" },
  { title: "Full Comparison Chart", to: "#comparison-chart-section" },
];

export function JumpToSection() {
  return (
    <Section>
      <SHeading>Jump to Section Quickly:</SHeading>

      <Stack spacing={2}>
        {sections.map((it, idx) => {
          return <ListItem id={it.id} key={idx} idx={idx + 1} title={it.title} to={it.to} />;
        })}
      </Stack>
    </Section>
  );
}

function ListItem({ title, to, idx, id }: { title: string; to: string; idx: number; id?: string }) {
  return (
    <Link to={to}>
      <Stack
        direction={"row"}
        alignItems={"center"}
        gap={3}
        py={2}
        backgroundColor={"gray.100"}
        borderRadius={"sm"}
        px={2}
      >
        <Stack
          justifyContent={"center"}
          alignItems={"center"}
          backgroundColor={id === "winner" ? "orange.400" : "black"}
          width={"30px"}
          height={"30px"}
          borderRadius={"full"}
          flexShrink={0}
        >
          <Text fontWeight={"semibold"} color="white">
            {idx}
          </Text>
        </Stack>

        <SText fontWeight={"semibold"} textDecoration="underline">
          {title}
        </SText>
      </Stack>
    </Link>
  );
}
