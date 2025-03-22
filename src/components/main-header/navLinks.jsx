"use client";
import { usePathname } from "next/navigation";
import React from "react";
import classes from "@/app/page.module.css";
import Link from "next/link";

const NavLinks = ({ href, children }) => {
  const path = usePathname();
  return (
    <>
      <Link
        href="meals"
        className={
          path.startsWith("/meals")
            ? `${classes.link} ${classes.active}`
            : classes.link
        }
      >
        Explore the Meals
      </Link>
      <br></br>
      <Link
        href="community"
        className={
          path.startsWith("/community")
            ? `${classes.link} ${classes.active}`
            : classes.link
        }
      >
        Join the Community
      </Link>
      {children}
    </>
  );
};

export default NavLinks;
