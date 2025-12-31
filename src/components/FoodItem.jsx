import React from "react";
import styles from "../styles/foodItem.module.css";

export default function FoodItem({ food }) {
  function getRandomNumber() {
    return Math.floor(Math.random() * (150 - 15 + 1)) + 15;
  }


  return (
    <div className={styles.card}>
      <img className={styles.image} src={food.image} alt={food.title} />
      <h2 className={styles.title}>{food.title}</h2>
      <h3 className={styles.price}>{getRandomNumber()} $</h3>
      {/* <button
        className={styles.button}
        onClick={() => navigate(`/recipe/${food.id}`)}
      >
        View Recipe
      </button> */}
    </div>
  );
}
