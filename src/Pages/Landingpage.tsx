import React from "react";
import Header from "./Header";

function Landingpage() {
  return (
    <div className="h-screen px-20 flex flex-col pb-10">
      <Header />
      <body className="flex-1 flex flex-row space-between">
        <div className="flex flex-col flex-1  justify-center pl-20 ">
          <img
            className="absolute rounded-full"
            src={require("../Assets/Images/flare.png")}
            alt=""
          />
          <h1 className="text-4xl text-stone-400 font-playfair pb-10">
            Hello, my name is{" "}
            <span className=" text-white font-extrabold bg-gradient-to-r text-transparent from-indigo-600 to-pink-600 bg-clip-text">
              Eleli
            </span>{" "}
            <span className="  text-white font-extrabold bg-gradient-to-r text-transparent from-indigo-600 to-pink-600 bg-clip-text">
              Ayub
            </span>{" "}
          </h1>
          <p className="text-stone-400 text-2xl">
            I'm a Web and Android developer with proficient skills in:{" "}
            <ul className="child:list-disc child:ml-10 child:border child:border-red-500 child:my-5 child:w-fit child:rounded-xl child:px-5 child-hover:bg-red-500 child:cursor-pointer child-hover:text-black child-hover:font-bold">
              <li>React JS</li>
              <li>Tailwind css</li>
              <li>Sass/SCSS</li>
              <li>Kotlin</li>
              <li>React Native</li>
              <li>Node js</li>
            </ul>{" "}
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <img
            className=" w-1/2 absolute rounded-full"
            src={require("../Assets/Images/circle2.png")}
            alt=""
          />
          <img
            className="rounded-full"
            src={require("../Assets/Images/profile.png")}
            alt=""
          />
        </div>
      </body>
    </div>
  );
}

export default Landingpage;
