import * as React from "react";
import { Icon } from "@iconify/react";
import { graphql, Link, useStaticQuery } from "gatsby";

const BarItem = ({ children }) => {
  return (
    <div class="py-2 pr-6 my-2 border-r-4 border-transparent hover:border-r-4  hover:border-blue-300 hover:bg-gray-50 duration-500 cursor-pointer text-xl">
      {children}
    </div>
  );
};

const Leftbar = () => {
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
  return (
    <div class="text-right relative hidden lg:block">
      <Link to="/">
        <div class="font-montserrat h-36 flex flex-col justify-center py-4 pr-6 bg-gray-50 mt-6 border-r-4 border-blue-300">
          <div>
            <div class="text-3xl">{data.site.siteMetadata.siteName}</div>
            <div class="text-xl">{data.site.siteMetadata.sign}</div>
          </div>
        </div>
      </Link>
      <BarItem>About</BarItem>
      <BarItem>Tags</BarItem>
      <BarItem>Friends sites</BarItem>

      <div class="absolute bottom-10 w-full p-4  text-xs">
        <div class="flex justify-end mb-2">
          <div class="cursor-pointer ml-1">
            <a href="https://github.com/ahacad">
              <Icon icon="mdi:github" width="24" />
            </a>
          </div>
          <div class="cursor-pointer ml-1">
            <a href="https://t.me/+Saty05ECp5kyZGZl">
              <Icon icon="akar-icons:telegram-fill" width="24" />
            </a>
          </div>
          <div class="cursor-pointer ml-1">
            <a href="https://twitter.com/ahacad">
              <Icon icon="mdi:twitter" width="24" />
            </a>
          </div>
          <div class="cursor-pointer ml-1">
            <a href="/rss.xml">
              <Icon icon="mdi:rss-box" width="24" />
            </a>
          </div>
        </div>
        <div class="font-montserrat">
          © 2019-{new Date().getFullYear()} ahacad. <br />
          All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default Leftbar;
