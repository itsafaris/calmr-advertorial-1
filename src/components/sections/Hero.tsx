import { Box, Card, Container, Flex, Heading, Text } from "@chakra-ui/react";
import { StaticImage } from "gatsby-plugin-image";
import { siteConfig } from "src/conf";

import "@fontsource-variable/eb-garamond";
import { Header } from "@components/Header";

export function Hero() {
  return (
    <Box mb={0} pb={4} bgGradient="linear(to-b, yellow.200, transparent)">
      <Header />
      <Container as={Flex} mt={3} flexDirection={"column"} alignItems={"center"}>
        <Heading fontFamily={"'EB Garamond Variable', serif"} textAlign={"center"}>
          Hey! I'm {siteConfig.personaName}
        </Heading>

        <Flex flexWrap={"wrap"} justifyContent={"center"} my={2}>
          <StaticImage
            alt="personal weight loss blogger picture"
            src="../../images/main-avatar.jpg"
            height={200}
            width={200}
            style={{ flexShrink: 0, width: 80, height: 80, borderRadius: "100%" }}
          />
        </Flex>

        <Card mt={2} p={2} mx={2} maxWidth={["container.sm"]}>
          <Text
            fontFamily={"'EB Garamond Variable', serif"}
            fontSize={"xl"}
            textAlign={"center"}
            px={4}
          >
            A mother of two, ex elementary school teacher, now a full-time wellness blogger
          </Text>
        </Card>
      </Container>
    </Box>
  );
}
