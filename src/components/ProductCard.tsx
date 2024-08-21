import { Box, Button, Card, Flex, Icon, Stack, Text } from "@chakra-ui/react";
import * as React from "react";
import { FaBan, FaCheckCircle, FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { SBoldText, Span } from "./SText";

export interface IProductCardProps {
  bannerText?: string;
  productTitle: string;
  productImage: React.ReactNode;
  rating: number;
  positives: Array<{ title: string; text: string }>;
  negatives: Array<{ title: string; text: string }>;
}

export function ProductCard({
  bannerText,
  productTitle,
  productImage,
  rating,
  positives,
  negatives,
}: IProductCardProps) {
  return (
    <Card overflow={"hidden"}>
      {bannerText && (
        <Box bg="green.600" p={4}>
          <Text color="white" textAlign={"center"} fontWeight={"bold"}>
            {bannerText}
          </Text>
        </Box>
      )}
      <Box p={[4, 8]}>
        <Flex flexWrap={"wrap"} gap={[2, 8]} justifyContent={"center"}>
          <Flex flexDirection={"column"} minW={240}>
            <Text fontWeight={"bold"} fontSize={"2xl"} mb={[4, 8]} maxW={280}>
              {productTitle}
            </Text>
            <Flex justifyContent={"center"}>{productImage}</Flex>
            <Button
              colorScheme="green"
              my={4}
              width={"full"}
              fontWeight={"bold"}
              maxW={340}
              mx="auto"
            >
              Check Availability
            </Button>
            <Flex justifyContent={"center"}>
              <Rating value={rating} />
            </Flex>
          </Flex>

          <Stack flex={1} spacing={2} minW={300} mt={8}>
            <Text fontWeight={"bold"} mb={4}>
              What I liked
            </Text>
            {positives.map((p) => (
              <ComparisonListItem key={p.title} title={p.title} text={p.text} />
            ))}

            <Text fontWeight={"bold"} mb={4} mt={8}>
              What could be better
            </Text>
            {negatives.map((p) => (
              <ComparisonListItem key={p.title} negative title={p.title} text={p.text} />
            ))}
          </Stack>
        </Flex>
      </Box>
    </Card>
  );
}

function ComparisonListItem({
  negative,
  title,
  text,
  ...rest
}: {
  negative?: boolean;
  title: string;
  text: string;
} & React.ComponentProps<typeof Flex>) {
  return (
    <Flex alignItems={"start"} gap={2} {...rest}>
      <Icon
        as={negative ? FaBan : FaCheckCircle}
        color={negative ? "red.400" : "green.400"}
        fontSize={"lg"}
        mt={1}
      />
      <Text>
        <SBoldText mr={1}>{title}:</SBoldText>
        {text}
      </Text>
    </Flex>
  );
}

const Rating = ({ value, ...rest }: { value: number } & React.ComponentProps<typeof Flex>) => {
  const fullStars = Math.floor(value); // Number of full stars
  const hasHalfStar = value % 1 !== 0; // Check if there is a half star
  const emptyStars = 5 - Math.ceil(value); // Number of empty stars

  return (
    <Flex alignItems={"center"} gap={3} {...rest}>
      <Text fontWeight={"bold"}>
        <Span fontSize={"2xl"}>{value}</Span> / 5
      </Text>
      <Flex alignItems="center" gap={1} fontSize={"lg"}>
        {Array(fullStars)
          .fill("")
          .map((_, index) => (
            <Icon as={FaStar} key={index} color="orange.400" />
          ))}
        {hasHalfStar && <Icon as={FaStarHalfAlt} color="orange.400" />}
        {Array(emptyStars)
          .fill("")
          .map((_, index) => (
            <Icon as={FaRegStar} key={index} color="orange.400" />
          ))}
      </Flex>
    </Flex>
  );
};
