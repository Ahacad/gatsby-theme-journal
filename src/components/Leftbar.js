import * as React from "react";

const BarItem = ({ children }) => {
  return (
    <div class="py-2 pr-6 my-2 border-r-4 border-transparent hover:border-r-4  hover:border-blue-300 hover:bg-gray-50 duration-500 cursor-pointer text-xl">
      {children}
    </div>
  );
};

const Leftbar = () => {
  return (
    <div class="text-right relative">
      <div class="font-montserrat h-36 flex flex-col justify-center py-4 pr-6 bg-gray-50 mt-6 border-r-4 border-blue-300">
        <div>
          <div class="text-3xl">Ahacad</div>
          <div class="text-xl">computer assissted design</div>
        </div>
      </div>
      <BarItem>关于</BarItem>
      <BarItem>Tags</BarItem>
      <BarItem>友链</BarItem>
      <BarItem>Icons (TODO)</BarItem>
      <div class="absolute bottom-10 w-full p-4 font-montserrat text-xs">
        © 2019-{new Date().getFullYear()} ahacad. <br />
        All rights reserved.
      </div>
    </div>
  );
  <div></div>;
};
export default Leftbar;
