import { Container, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import { Link } from "gatsby";

export function Footer() {
  return (
    <Stack backgroundColor={"teal.400"} py={10} mt={10}>
      <Container maxW={"container.md"}>
        <Stack alignItems={"center"} spacing={8}>
          <Stack spacing={6} direction={["column", "column", "row"]} align={"center"}>
            <Link to="#">
              <Text color="white" fontSize={"sm"} fontWeight={"semibold"}>
                Blog
              </Text>
            </Link>

            <Link to="#">
              <Text color="white" fontSize={"sm"} fontWeight={"semibold"}>
                About me
              </Text>
            </Link>

            <Link to="#">
              <Text color="white" fontSize={"sm"} fontWeight={"semibold"}>
                Contact me
              </Text>
            </Link>

            <Link to="#">
              <Text color="white" fontSize={"sm"} fontWeight={"semibold"}>
                Privacy Policy
              </Text>
            </Link>
          </Stack>

          <Stack spacing={6} direction={"row"} align={"center"}>
            <Link to="#">
              <Icon color="white" boxSize={7} as={FaFacebook} />
            </Link>

            <Link to="#">
              <Icon color="white" boxSize={7} as={FaInstagramSquare} />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
