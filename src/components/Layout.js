import * as React from "react";
import SEO from "src/components/Seo";
import Topbar from "src/components/Topbar";
import { Icon } from "@iconify/react";

const Layout = ({ children }) => {
  return (
    <>
      <SEO />
      <Topbar />
      <div class="h-screen grid grid-cols-4">{children}</div>
    </>
  );
};

export default Layout;
