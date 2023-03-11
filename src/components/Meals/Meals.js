import React from "react";
import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailbaleMeals";
const Meals = () => {
  return (
    <React.Fragment>
      <MealsSummary />
      <AvailableMeals />
    </React.Fragment>
  );
};

export default Meals;
