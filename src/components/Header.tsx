import { Box, Button, Container, Flex, Icon } from "@chakra-ui/react";

import { GiHamburgerMenu } from "react-icons/gi";
import { Logo } from "./Logo";

export function Header() {
  return (
    <Flex as={Container} py={5} gap={4} alignItems={"center"} justifyContent={"space-between"}>
      <Box width={"80px"}>
        <Logo />
      </Box>

      <Button variant={"ghost"} size={"sm"}>
        <Icon as={GiHamburgerMenu} />
      </Button>
    </Flex>
  );
}
