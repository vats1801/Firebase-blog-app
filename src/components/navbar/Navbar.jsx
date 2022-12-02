import { collection, doc, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const Navbar = () => {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  return (
    <div className=" h-16 w-full flex bg-white items-center justify-between px-10 ">
      <div className=" items-center h-10 w-2/4 ">
        <input
          type="text"
          placeholder="Search Title/Tag"
          className="h-full px-5  w-full rounded-full placeholder-gray-800 bg-slate-200"
        />
      </div>
      <div className="flex items-center space-x-8">
        <p className="text-lg font-medium">
          {isAuthenticated ? user.name : "No user"}
        </p>
        <img
          src="https://th.bing.com/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?w=205&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
          alt=""
          className="h-10 w-10 rounded-full"
        />
      </div>
    </div>
  );
};
