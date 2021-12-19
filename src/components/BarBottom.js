import * as React from "react";
import { Icon } from "@iconify/react";

const BarBottom = ({ children }) => {
  return (
    <>
      <div class="absolute bottom-10 w-full p-4 text-xs">
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

        {children}
      </div>
    </>
  );
};

export default BarBottom;
