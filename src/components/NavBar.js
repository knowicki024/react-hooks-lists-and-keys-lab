import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return (
  <nav>
      <div>
      <a key="home" href= "#home">home</a>
      <a key="projects" href= "#projects">projects</a>
      <a key="about" href= "#about">about</a>
      </div>
  </nav>
  )
}

export default NavBar;
