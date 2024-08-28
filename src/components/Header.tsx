import { Box, Button, Container, Flex, Icon, Text } from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";
import { Logo } from "./Logo";
import { StaticImage } from "gatsby-plugin-image";

export function Header() {
  return (
    <Flex direction={"column"} alignItems={"center"}>
      <Flex
        as={Container}
        p={5}
        pb={2}
        gap={2}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Box width={"48px"}>
          <StaticImage
            alt="personal weight loss blogger picture"
            src="../images/jen1.png"
            height={80}
            width={80}
            style={{
              flexShrink: 0,
              borderRadius: "100%",
            }}
          />
        </Box>

        <Flex px={2} flex={3} direction={"column"} alignItems={"center"}>
          <Logo height={"32px"} />
        </Flex>

        <Flex width={"48px"} justifyContent={"end"}>
          <Button variant={"ghost"} size={"sm"}>
            <Icon as={GiHamburgerMenu} />
          </Button>
        </Flex>
      </Flex>

      <Container>
        <Text
          px={8}
          fontFamily={"'EB Garamond Variable', serif"}
          fontSize={"sm"}
          textAlign={"center"}
        >
          Balancing life as a mother of three, high-school teacher, and healthy living enthusiast.
        </Text>
      </Container>
    </Flex>
  );
}
