import React from "react";
import blogImg from "../../../assets/allProducts.jpg";

const Blog = () => {
  const allProductBgImgStyles = {
    background: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url( ${blogImg})`,
    backgroundPosition: "center bottom",
    backgroundSize: "cover",
  };
  return (
    <div className="space-y-10 mb-12">
      <div
        style={allProductBgImgStyles}
        className="flex flex-col items-center justify-center h-80"
      >
        <h4 className="text-5xl text-white font-bold"> Blogs</h4>
      </div>
      <div className="grid grid-cols-1 w-4/5 mx-auto space-y-10">
        {/* ------------------------------- */}
        <div className=" text-gray-900 shadow-lg">
          <div className="container grid grid-cols-12 mx-auto ">
            <div className="bg-no-repeat bg-cover  col-span-full lg:col-span-4">
              <img src="https://source.unsplash.com/random/640x480" alt="" />
            </div>
            <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
              <div className="flex justify-start">
                <span className="px-2 py-1 text-xs rounded-full bg-lime-500 text-gray-900">
                  Codding
                </span>
              </div>
              <h1 className="text-3xl font-semibold">
                Difference between SQL and NoSQL
              </h1>
              <p className="flex-1 pt-2">
                SQL is the programming language used to interface with
                relational databases. (Relational databases model data as
                records in rows and tables with logical links between them).
                NoSQL is a class of DBMs that are non-relational and generally
                do not use SQL.
              </p>

              <div className="flex items-center justify-between pt-2">
                <div className="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="self-center text-sm">by Leroy Jenkins</span>
                </div>
                <span className="text-xs">3 min read</span>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------- */}
        <div className=" text-gray-900 shadow-lg">
          <div className="container grid grid-cols-12 mx-auto ">
            <div className="bg-no-repeat bg-cover  col-span-full lg:col-span-4">
              <img src="https://source.unsplash.com/random/640x480" alt="" />
            </div>
            <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
              <div className="flex justify-start">
                <span className="px-2 py-1 text-xs rounded-full bg-lime-500 text-gray-900">
                  Codding
                </span>
              </div>
              <h1 className="text-3xl font-semibold">
                What is JWT, and how does it work?
              </h1>
              <p className="flex-1 pt-2">
                WTs differ from other web tokens in that they contain a set of
                claims. Claims are used to transmit information between two
                parties. What these claims are depends on the use case at hand.
                For example, a claim may assert who issued the token, how long
                it is valid for, or what permissions the client has been
                granted.
              </p>

              <div className="flex items-center justify-between pt-2">
                <div className="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="self-center text-sm">by Leroy Jenkins</span>
                </div>
                <span className="text-xs">3 min read</span>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------- */}
        <div className=" text-gray-900 shadow-lg">
          <div className="container grid grid-cols-12 mx-auto ">
            <div className="bg-no-repeat bg-cover  col-span-full lg:col-span-4">
              <img src="https://source.unsplash.com/random/640x480" alt="" />
            </div>
            <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
              <div className="flex justify-start">
                <span className="px-2 py-1 text-xs rounded-full bg-lime-500 text-gray-900">
                  Codding
                </span>
              </div>
              <h1 className="text-3xl font-semibold">
                What is the difference between javascript and NodeJS?
              </h1>
              <p className="flex-1 pt-2">
                JavaScript is a simple programming language that can be used
                with any browser that has the JavaScript Engine installed. Node.
                js, on the other hand, is an interpreter or execution
                environment for the JavaScript programming language
              </p>

              <div className="flex items-center justify-between pt-2">
                <div className="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="self-center text-sm">by Leroy Jenkins</span>
                </div>
                <span className="text-xs">3 min read</span>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------- */}
        <div className=" text-gray-900 shadow-lg">
          <div className="container grid grid-cols-12 mx-auto ">
            <div className="bg-no-repeat bg-cover  col-span-full lg:col-span-4">
              <img src="https://source.unsplash.com/random/640x480" alt="" />
            </div>
            <div className="flex flex-col p-6 col-span-full row-span-full lg:col-span-8 lg:p-10">
              <div className="flex justify-start">
                <span className="px-2 py-1 text-xs rounded-full bg-lime-500 text-gray-900">
                  Codding
                </span>
              </div>
              <h1 className="text-3xl font-semibold">
                How does NodeJS handle multiple requests at the same time?
              </h1>
              <p className="flex-1 pt-2">
                NodeJS receives multiple client requests and places them into
                EventQueue. NodeJS is built with the concept of event-driven
                architecture. NodeJS has its own EventLoop which is an infinite
                loop that receives requests and processes them
              </p>

              <div className="flex items-center justify-between pt-2">
                <div className="flex space-x-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5 text-gray-400"
                  >
                    <path
                      fillRule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                  <span className="self-center text-sm">by Leroy Jenkins</span>
                </div>
                <span className="text-xs">3 min read</span>
              </div>
            </div>
          </div>
        </div>
        {/* ------------------------------- */}

        {/* ------------------------------- */}

        {/* ------------------------------- */}
      </div>
    </div>
  );
};

export default Blog;
