import * as React from "react";
import { Icon } from "@iconify/react";
import { useStaticQuery, Link, graphql } from "gatsby";
import BarBottom from "src/components/BarBottom";

const BarItem = ({ children }) => {
  return <div class="text-xl text-right mb-4"> {children}</div>;
};

const Topbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          siteUrl
          siteName
          sign
        }
      }
    }
  `);

  const handleClick = () => {
    setIsOpen(false);
  };
  const handleToggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div class="block lg:hidden">
      <div
        class={`z-10 fixed inset-0 transition-opacity ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div
          onClick={handleClick}
          class="absolute inset-0 bg-black opacity-50"
        ></div>
      </div>
      <aside
        class={`transform top-0 left-0 w-64 bg-white fixed h-full overflow-auto ease-in-out transition-all duration-300 z-30 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div class="mb-20"></div>
        <Link to="/">
          <div class="bg-gray-50 p-4 border-r-4 border-blue-300">
            <div class="font-montserrat text-3xl text-right">
              {data.site.siteMetadata.siteName}
            </div>
            <div class="font-montserrat text-xl text-right">
              {data.site.siteMetadata.sign}
            </div>
          </div>
        </Link>
        <div class="mt-20 p-4">
          <BarItem>About</BarItem>
          <BarItem>Tags</BarItem>
          <BarItem>Friends site</BarItem>
        </div>
        <BarBottom>
          <div class="font-montserrat text-right">
            © 2019-{new Date().getFullYear()} ahacad. <br />
            All rights reserved.
          </div>
        </BarBottom>
      </aside>
      <div class="h-14 p-4 shadow-md flex">
        <Icon
          icon="akar-icons:three-line-horizontal"
          width="24"
          height="24"
          onClick={handleToggleSidebar}
        />
        <div class="w-full flex justify-center">
          <span class="font-montserrat text-xl">Ahacad</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
