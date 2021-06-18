import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./Main.css";
import homeSvg from "../../assets/meal.svg";
import { MainContainer, HomeImg, ImgDiv } from "./style";

const APP_ID = process.env.REACT_APP_API_ID;
const APP_KEY = process.env.REACT_APP_API_KEY;
console.log(APP_ID, APP_KEY);

const recipeId = "b0550759";
const recipeKey = "6b4b90eb2caa8ff110cbfb949a5f3b9c";
const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];

const Main = () => {
  const [mealList, setMealList] = useState(mealTypes[0].toLocaleLowerCase());
  const [recipes, setRecipes] = useState(null);
  const [query, setQuery] = useState("");

  const getData = async () => {
    if (query !== "") {
      const res = await axios.get(
        `https://api.edamam.com/search?q=${query}
          &app_id=${recipeId}&app_key=${recipeKey}&mealType=${mealList}`
      );
      console.log("res", res);
      if (res.status === 200) {
        setRecipes(res.data.hits);
      }
    } else {
      alert("Please fill the Form");
    }
  };
  const handleSearch = (e) => {
    console.log(e.target.value);
    setQuery(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(query, mealTypes);
    getData();

    setQuery("");
  };
  const handleChange = (e) => {
    setMealList(e.target.value);
  };

  return (
    <div className="body">
      <div className="header">
        <h2>Food App</h2>
        <form onSubmit={handleSubmit} action="" method="get">
          <input
            type="text"
            value={query}
            placeholder="Search"
            onChange={handleSearch}
          />

          <button className="submit-button" type="submit">
            Search
          </button>

          <select
            className="meal"
            id="meal"
            name="mealTypes"
            onChange={handleChange}
          >
            {mealTypes?.map((item) => (
              <option value={item.toLowerCase()} key={item}>
                {item}
              </option>
            ))}
          </select>
        </form>
      </div>
      {recipes ? (
        <div className="main">
          {recipes.map((recipe, index) => (
            <Recipe key={index} recipe={recipe.recipe} />
          ))}
        </div>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}
    </div>
  );
};

export default Main;
