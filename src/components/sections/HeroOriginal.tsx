import { Box, Card, Container, Flex, Heading, Icon, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { siteConfig } from "src/conf";
import { BiSolidBadgeCheck } from "react-icons/bi";

import "@fontsource-variable/eb-garamond";
import { Header } from "@components/Header";
import { FacebookLikeButton, FacebookShareButton, Span } from "@components/components";

export function HeroOriginal() {
  return (
    <Box mb={0} pb={4} bgGradient="linear(to-b, yellow.200, transparent)">
      <Header />
      <Container as={Flex} mt={3} flexDirection={"column"} alignItems={"center"}>
        <Flex flexWrap={"wrap"} alignItems={"center"} gap={4} my={2}>
          <StaticImage
            alt="personal weight loss blogger picture"
            src="../../images/jen1.png"
            height={140}
            width={140}
            style={{ flexShrink: 0, width: 64, height: 64, borderRadius: "100%" }}
          />
          <Heading fontFamily={"'EB Garamond Variable', serif"} textAlign={"center"}>
            Hey! I'm {siteConfig.personaName}
          </Heading>
        </Flex>

        <Card mt={2} p={2} px={4} fontSize={"sm"}>
          <Text>
            As a busy mom of three juggling the endless responsibilities of family life and my
            demanding role as a marketing manager, discovering a weight loss solution that could
            easily fit into my tight schedule felt nearly impossible. The pressures of parenting,
            combined with long hours spent at my desk and the tendency to grab quick snacks between
            meetings, made it difficult to stick to any weight management plan. I explored various
            options, including injections, weight management programs, and metabolism boosters, but
            nothing truly clicked for me.
          </Text>

          <Text my={2}>
            Now, I'm excited to announce that I've finally found a weight loss approach that works
            wonders for me!
          </Text>
        </Card>

        <Flex gap={3} alignSelf={"start"} my={4} alignItems={"center"} flexWrap={"wrap"}>
          <Flex
            gap={2}
            bg="blackAlpha.50"
            borderRadius={"full"}
            alignItems={"center"}
            px={3}
            py={1}
          >
            <Icon as={BiSolidBadgeCheck} color="green.500" />
            <Text fontSize={"sm"}>Updated June 2024</Text>
          </Flex>
          <Flex
            gap={2}
            bg="blackAlpha.50"
            borderRadius={"full"}
            alignItems={"center"}
            px={3}
            py={1}
          >
            <Icon as={BiSolidBadgeCheck} color="green.500" />
            <Text fontSize={"sm"}>Based on personal trials & errors</Text>
          </Flex>
          <Flex
            gap={2}
            bg="blackAlpha.50"
            borderRadius={"full"}
            alignItems={"center"}
            px={3}
            py={1}
          >
            <Icon as={BiSolidBadgeCheck} color="green.500" />
            <Text fontSize={"sm"}>3+ years on research & trials</Text>
          </Flex>

          <Flex gap={2}>
            <FacebookLikeButton />
            <FacebookShareButton />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
