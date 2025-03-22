import Image from "next/image";
import Link from "next/link";
import classes from "./page.module.css";
import NavLinks from "@/components/main-header/navLinks";

export default function Home() {
  return (
    <div className={classes.mainContainer}>
      <div className={classes["header-container"]}>
        <div className={classes.slide}>Slideshow</div>
        <div className={classes.links}>
          <NavLinks href="meals">Explore the Meals</NavLinks> <br></br>
          <NavLinks href="community">Join the Community</NavLinks>
        </div>
      </div>

      <div className={classes["section-content"]}>
        <p>
          MealBoard combines recipe management, meal planning, groceries and
          pantry management into a single app. You can manage your recipes,
          ingredients, food categories, meal types, stores, store aisles,
          grocery items and many more with its clean, uncluttered interface. Cut
          your time spent planning your meals and groceries.
        </p>
      </div>
    </div>
  );
}
