import {
  TextProps,
  Text,
  Heading,
  HeadingProps,
  Stack,
  StackProps,
  SimpleGridProps,
  SimpleGrid,
  Button,
  Icon,
} from "@chakra-ui/react";
import { Link } from "gatsby";
import { FaRegThumbsUp } from "react-icons/fa";
import { trackPosthogEvent } from "src/tracking";

export function Span(props: TextProps) {
  return <Text as="span" {...props} />;
}

export function SHeading(props: HeadingProps) {
  return <Heading {...props} fontSize={"2xl"} />;
}

export function SText(props: TextProps) {
  return <Text fontSize={"sm"} fontWeight={"regular"} {...props} />;
}

export function SItalicText(props: TextProps) {
  return (
    <Text
      fontSize={["sm", "md"]}
      fontStyle={"italic"}
      color="gray.500"
      fontWeight={"semibold"}
      {...props}
    />
  );
}

export function SBoldText(props: TextProps) {
  return <Text as="span" fontWeight={"bold"} {...props} />;
}

export function SLink({ to, sectionID, ...rest }: TextProps & { to: string; sectionID: string }) {
  return (
    <Link
      to={to}
      onClick={() => {
        trackPosthogEvent({
          name: "internal-link-clicked",
          properties: {
            sectionID,
          },
        });
      }}
    >
      <Text
        as="span"
        color="orange.500"
        fontWeight={"bold"}
        textDecoration={"underline"}
        {...rest}
      />
    </Link>
  );
}

export function SGrid(props: SimpleGridProps) {
  return <SimpleGrid gap={3} {...props} />;
}

export function Section(props: StackProps) {
  return <Stack spacing={5} mb={12} {...props} />;
}

export function FacebookLikeButton() {
  return (
    <Button
      bg="rgb(24, 119, 242)"
      color="white"
      leftIcon={<Icon as={FaRegThumbsUp} mr={-1} />}
      height={"20px"}
      size="xs"
      fontSize={"11px"}
      borderRadius={"3px"}
    >
      <Span fontWeight={"bold"}>Like</Span>
      <Span ml={1} display={"inline-flex"}>
        5.4k
      </Span>
    </Button>
  );
}

export function FacebookShareButton() {
  return (
    <Button
      bg="rgb(24, 119, 242)"
      color="white"
      py={1}
      height={"20px"}
      size="xs"
      fontSize={"11px"}
      borderRadius={"3px"}
    >
      <Span fontWeight={"bold"}>Share</Span>
    </Button>
  );
}
