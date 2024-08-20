import * as React from "react";
import type { HeadFC, PageProps } from "gatsby";

import { SEO } from "@components/SEO";

export const Head: HeadFC = () => {
  return <SEO />;
};

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
      <h1>Congratulations</h1>
    </main>
  );
};

export default IndexPage;
