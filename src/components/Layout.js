import * as React from "react";
import SEO from "src/components/Seo";

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <div class="h-screen grid grid-cols-4">{children}</div>
    </>
  );
};

export default Layout;
