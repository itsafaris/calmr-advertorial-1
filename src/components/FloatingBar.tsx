import { Flex } from "@chakra-ui/react";
import { Link } from "gatsby";
import { trackPosthogEvent } from "src/tracking";

export interface IFloatingBarProps {}

export function FloatingBar(props: IFloatingBarProps) {
  return (
    <Flex
      position={"fixed"}
      zIndex={1}
      bottom={0}
      left={0}
      width={"full"}
      as={Link}
      bg="white"
      p={3}
      textAlign={"center"}
      justifyContent={"center"}
      to="/#winner"
      textDecoration={"underline"}
      fontWeight={"semibold"}
      boxShadow={"2xl"}
      borderTop={"1px solid"}
      borderColor={"blackAlpha.100"}
      color={"orange.600"}
      onClick={() => {
        trackPosthogEvent({
          name: "internal-link-clicked",
          properties: {
            sectionID: "floating-bar",
          },
        });
      }}
    >
      Go to winner
    </Flex>
  );
}
