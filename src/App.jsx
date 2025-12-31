import { useState } from "react";
import { Routes, Route } from "react-router-dom";

import Search from "./components/Search";
import FoodList from "./components/FoodList";
import Header from "./components/Header";
import "./App.css";

function App() {
  const [foodData, setFoodData] = useState([]);
  const [error, setError] = useState("");

  return (
    <>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Search
                foodData={foodData}
                setFoodData={setFoodData}
                error={error}
                setError={setError}
              />
              {!error && <FoodList foodData={foodData} />}
            </>
          }
        />
        {/* <Route
          path="/recipe/:id"
          element={
            <>
              <FoodDetails />
            </>
          }
        /> */}
      </Routes>
    </>
  );
}

export default App;
