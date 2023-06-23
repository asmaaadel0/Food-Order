/* eslint-disable jsx-a11y/img-redundant-alt */
import React, { Fragment } from "react";

import mealImage from "../../assests/meals.jpg";
import classes from "./Header.module.css";

import Button from "./HeaderCartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1> FoodMeals </h1> <Button />{" "}
      </header>{" "}
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="image" />
      </div>{" "}
    </Fragment>
  );
};

export default Header;
