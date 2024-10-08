import { Container, Icon, Stack, Text } from "@chakra-ui/react";
import React from "react";

import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";

import { Link } from "gatsby";

export function Footer() {
  return (
    <Stack bgGradient="linear(to-t, yellow.200, transparent)" py={10} pb={20} mt={10}>
      <Container maxW={"container.md"}>
        <Stack alignItems={"center"} spacing={8}>
          <Stack spacing={6} direction={["column", "column", "row"]} align={"center"}>
            <Link to="#">
              <Text color="black" fontSize={"sm"} fontWeight={"semibold"}>
                Blog
              </Text>
            </Link>

            <Link to="#">
              <Text color="black" fontSize={"sm"} fontWeight={"semibold"}>
                About me
              </Text>
            </Link>

            <Link to="#">
              <Text color="black" fontSize={"sm"} fontWeight={"semibold"}>
                Contact me
              </Text>
            </Link>

            <Link to="#">
              <Text color="black" fontSize={"sm"} fontWeight={"semibold"}>
                Privacy Policy
              </Text>
            </Link>
          </Stack>

          <Stack spacing={6} direction={"row"} align={"center"}>
            <Link to="#">
              <Icon color="black" boxSize={7} as={FaFacebook} />
            </Link>

            <Link to="#">
              <Icon color="black" boxSize={7} as={FaInstagramSquare} />
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Stack>
  );
}
