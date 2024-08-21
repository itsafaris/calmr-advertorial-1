import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { SEO } from "@components/SEO";
import { Badge, Box, Container, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import { siteConfig } from "src/conf";
import { StaticImage } from "gatsby-plugin-image";
import { SGrid, Section, SItalicText, SLink, SText } from "@components/components";
import { Content } from "@components/Content";

export const Head: HeadFC = () => {
  return <SEO title={`My Weight Loss Journey - ${siteConfig.brandName}`} />;
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Box>
      <Container maxW="container.md">
        <Content />
      </Container>
    </Box>
  );
};

export default IndexPage;
