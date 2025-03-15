import React from "react";
import classes from "./main-header.module.css";
import logoImg from "@/assets/logo.png";
import Link from "next/link";
import Image from "next/image";

const MainHeader = () => {
  return (
    <>
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="fast food logo" priority />
          <h2>Fast Food App</h2>
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <a>
                <Link href="/meals">Fast Food Meals</Link>
              </a>
            </li>
            <li>
              <a>
                <Link href="/community">Community For Meals</Link>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
