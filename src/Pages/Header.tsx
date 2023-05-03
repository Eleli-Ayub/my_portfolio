import React from "react";

function Header() {
  return (
    <header className=" flex flex-row justify-between pt-10 w-full">
      <img
        className="h-16 rounded-full"
        src={require("../Assets/Images/eleliAI.jpg")}
        alt=""
      />
      <span className="flex flex-col items-center justify-center">
        <ul className=" flex flex-row gap-5 items-center font-alegreya text-white child:text-xl child:bg-gradient-to-r child:text-transparent child:from-blue-600 child:bg-clip-text child:to-pink-600 child:cursor-pointer child-hover:text-red-600 child-hover:scale-105">
          <li>Home</li>
          <li>About</li>
          <li>Projects</li>
          <li>Contact</li>
          <li>Footer</li>
        </ul>
      </span>
    </header>
  );
}

export default Header;
