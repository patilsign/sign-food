import React from "react";
import classes from "./main-header.module.css";
import logoImg from "@/assets/logo.png";
import bgImage from "@/assets/bgImage.jpg";
import Link from "next/link";
import Image from "next/image";
import NavLinks from "./navLinks";

const MainHeader = () => {
  return (
    <>
      <header
        className={classes.header}
        style={{
          backgroundImage: bgImage.src
            ? `url(${bgImage.src})`
            : "linear-gradient(to right, #1e3c72, #2a5298)",
        }}
      >
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="fast food logo" priority />
          <h2>Fast Food App</h2>
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLinks href="/meals">Fast Food Meals</NavLinks>
            </li>
            <li>
              <NavLinks href="/community">Community For Meals</NavLinks>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
