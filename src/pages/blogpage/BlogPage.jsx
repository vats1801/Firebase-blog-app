import React from "react";
import { Sidebar } from "../../components/sidebar/Sidebar";
import { Comment } from "../../components/comment/Comment";
import { Blog } from "../../components/blog/Blog";
import { SlLike } from "react-icons/sl";
import { BsShare } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
export const BlogPage = () => {
  return (
    <div className="flex h-screen w-100">
      <Sidebar />
      <div className="h-screen w-full flex-1 bg-gray-100 p-10 space-y-6 overflow-y-auto">
        <img
          src="https://cdn.wallpapersafari.com/70/34/UQF2K5.jpg"
          alt=""
          className=" h-80 w-full object-cover"
        />
        <div className="flex justify-between items-center px-10">
          <div className="space-x-6 flex items-center">
            <img
              src="https://th.bing.com/th/id/OIP.awAiMS1BCAQ2xS2lcdXGlwHaHH?w=205&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7"
              alt=""
              className="h-10 w-10 rounded-full"
            />
            <p className="text-lg">vats</p>
          </div>
          <p>1 week ago</p>
        </div>
        <p className="text-2xl font-medium px-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
          sunt?
        </p>

        <div className=" px-10 ">
          <p classname="text-md flex-wrap" flex-wrap>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            illo suscipit nobis perferendis aut, asperiores ab aliquam accusamus
            rerum rem impedit minima saepe atque et officiis, esse ex magnam
            eligendi eum consequatur excepturi? Ut id atque recusandae
            repudiandae nulla, enim pariatur accusamus ipsa provident iure
            voluptas cumque delectus fuga ex praesentium sunt voluptatem
            distinctio maxime quasi officia voluptatibus. Illum nesciunt, ad
            repudiandae aliquid molestias voluptatum consectetur, perferendis
            tenetur expedita molestiae rem quas blanditiis odio maiores veniam.
            Perferendis suscipit ad laudantium assumenda odit est rerum qui
            vitae! Dicta ipsum optio, omnis natus quaerat perspiciatis maxime
            tenetur nam illo? Officia, fugit maiores! Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Sapiente illo suscipit nobis
            perferendis aut, asperiores ab aliquam accusamus rerum rem impedit
            minima saepe atque et officiis, esse ex magnam eligendi eum
            consequatur excepturi? Ut id atque recusandae repudiandae nulla,enim
            pariatur accusamus ipsa provident iure voluptas cumque delectus fuga
            ex praesentium sunt voluptatem distinctio maxime quasi officia
            voluptatibus. Illum nesciunt, ad repudiandae aliquid molestias
            voluptatum consectetur, perferendis tenetur expedita molestiae rem
            quas blanditiis odio maiores veniam. Perferendis suscipit ad
            laudantium assumenda odit est rerum qui vitae! Dicta ipsum optio,
            omnis natus quaerat perspiciatis maxime tenetur nam illo? Officia,
            fugit maiores! Lorem ipsum dolor sit amet consectetur adipisicing
            elit. Sapiente illo suscipit nobis perferendis aut, asperiores ab
            aliquam accusamus rerum rem impedit minima saepe atque et officiis,
            esse ex magnam eligendi eum consequatur excepturi? Ut id atque
            recusandae repudiandae nulla, enim pariatur accusamus ipsa provident
            iure voluptas cumque delectus fuga ex praesentium sunt voluptatem
            distinctio maxime quasi officia voluptatibus. Illum nesciunt, ad
            repudiandae aliquid molestias voluptatum consectetur, perferendis
            tenetur expedita molestiae rem quas blanditiis odio maiores veniam.
            Perferendis suscipit ad laudantium assumenda odit est rerum qui
            vitae! Dicta ipsum optio, omnis natus quaerat perspiciatis maxime
            tenetur nam illo? Officia, fugit maiores!
          </p>
        </div>
        <div className="w-full space-y-6">
          <p className=" text-xl font-medium">Comments</p>
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="write a comment...."
              className="flex-1 bg-white h-12 px-5 rounded-full"
            />
            <button className="bg-blue-800 text-white h-12 w-1/5 rounded-full">
              Submit
            </button>
          </div>
          <div className="flex flex-wrap h-96 gap-4 justify-center  overflow-y-auto">
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      </div>
      <div className=" space-y-10 w-20 items-center bg-blue-800 text-white pt-10 px-2">
        <div className="text-center flex flex-col items-center space-y-3 rounded-2xl p-2 hover:bg-blue-500 hover:font-medium">
          <SlLike size={24} />
          <p className="text-sm">210</p>
        </div>
        <div className="text-center flex flex-col items-center space-y-3 rounded-2xl p-2 hover:bg-blue-500 hover:font-medium">
          <BsShare size={24} />
          <p className="text-sm">Share</p>
        </div>
        <div className="text-center flex flex-col items-center space-y-3 rounded-2xl p-2 hover:bg-blue-500 hover:font-medium">
          <BsBookmark size={24} />
          <p className="text-sm">Save</p>
        </div>
      </div>
    </div>
  );
};
