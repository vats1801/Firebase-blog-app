import React from "react";

export const Blog = () => {
  return (
    <div className=" w-80 p-3 bg-white shadow-xl rounded-xl space-y-6">
      <div className="w-full flex-1">
        <img
          src="https://th.bing.com/th/id/OIP.goJQroURfPX0Z5TpeMEYBQHaEK?w=324&h=182&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
        />
        <h1 className="mt-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          vel!
        </h1>
      </div>

      <div className="flex justify-between items-center">
        <div className="space-x-4 flex items-center">
          <img
            src="https://th.bing.com/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?w=205&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
            alt=""
            className="h-10 w-10 rounded-full"
          />
          <p className="text-lg">great</p>
        </div>
        <p>1 week ago</p>
      </div>
    </div>
  );
};
