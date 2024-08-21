import React from "react";
import {
  TextProps,
  Text,
  Heading,
  HeadingProps,
  Stack,
  StackProps,
  SimpleGridProps,
  SimpleGrid,
} from "@chakra-ui/react";
import { Link } from "gatsby";

export function Span(props: TextProps) {
  return <Text as="span" {...props} />;
}

export function SHeading(props: HeadingProps) {
  return <Heading {...props} />;
}

export function SText(props: TextProps) {
  return <Text fontSize={"sm"} fontWeight={"regular"} {...props} />;
}

export function SItalicText(props: TextProps) {
  return (
    <Text
      fontSize={"md"}
      fontWeight={"semibold"}
      fontStyle={"italic"}
      color="gray.500"
      {...props}
    />
  );
}

export function SBoldText(props: TextProps) {
  return <Text as="span" fontWeight={"bold"} {...props} />;
}

export function SLink({ to, ...rest }: TextProps & { to: string }) {
  return (
    <Link to={to}>
      <Text as="span" fontWeight={"bold"} textDecoration={"underline"} {...rest} />
    </Link>
  );
}

export function SGrid(props: SimpleGridProps) {
  return <SimpleGrid gap={6} {...props} />;
}

export function Section(props: StackProps) {
  return <Stack spacing={5} mb={12} {...props} />;
}
