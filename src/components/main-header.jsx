import React from "react";
import classes from "./main-header.module.css";
import logoImg from "@/assets/logo.png";
import Link from "next/link";

const MainHeader = () => {
  return (
    <>
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <img src={logoImg.src} alt="fast food logo" />
          <h2>Fast Food App</h2>
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <Link href="/meals">Fast Food Meals</Link>
            </li>
            <li>
              <Link href="/community">Community For Meals</Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
