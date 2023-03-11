import React from "react";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";
const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Pizza",
    description:
      "Dish made of dough spread with a savory mixture usually including tomatoes and cheese and other toppings",
    price: 1200,
  },
  {
    id: "m2",
    name: "Burger",
    description:
      "A burger is a flat round mass of minced meat or vegetables, which is fried and often eaten in a bread roll",
    price: 300,
  },
  {
    id: "m3",
    name: "Sandwich",
    description:
      "It is so delicious, sort of healthy and is devoid of sauces, spreads and cheese.",
    price: 100,
  },
  {
    id: "m4",
    name: "Dosa",
    description:
      "Dosa is famous for its simple ingredients and savory, slightly bitter flavor.",
    price: 250,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));
  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
