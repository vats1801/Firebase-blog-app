import React from "react";

export const Comment = () => {
  return (
    <div className="w-80  space-y-4 bg-white p-3">
      <p className="text-md">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        reiciendis corporis neque. Ex architecto voluptatem illum esse fugit
        magnam fugiat.
      </p>
      <div className="space-x-6 flex items-center">
        <img
          src="https://th.bing.com/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?w=205&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
          className="h-10 w-10 rounded-full"
        />
        <p className="text-lg">vats</p>
      </div>
    </div>
  );
};
