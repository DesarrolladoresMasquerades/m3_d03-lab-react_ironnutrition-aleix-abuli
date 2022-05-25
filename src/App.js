// src/App.js
import Search from "./components/Search";
import { useState } from "react";
import "./App.css";
import AddFoodForm from "./components/AddFoodForm";
import FoodBox from "./components/FoodBox";
import foods from './foods.json';

const foodsJson = foods.slice();


function App() {
  const [foodData, setFoodData] = useState(foodsJson);
  const [foods, setFoods] = useState(foodsJson);

  function addFood(newFood){
    setFoodData([...foodData, newFood]);
    setFoods([...foodData, newFood].sort((a,b) => a.name>b.name ));
  };

  function checkCoincidences(searchInfo) {
    let searchResults = foodData.filter((food) => {
      return food.name.toLowerCase().includes(searchInfo.toLowerCase());
    });

    setFoods(searchResults);
  };

  function deleteFood(foodToDelete){
    const newFoods = foods.filter((food)=>{
      return food.name !== foodToDelete;
    })

    setFoods(newFoods);
  };

  function toggleForm(){
    document.getElementById('displayButton').classList.toggle('hidden');
    document.getElementById('hiddenForm').classList.toggle('hidden');
  }

  return (
    <div className="App">
      <h1>Search</h1>
      <Search checkCoincidences={checkCoincidences} />
      
      <button id="displayButton" onClick={toggleForm}>Add a new Food</button>
      <div id="hiddenForm" className="hidden">
        <h1>Add Food Entry</h1>
        <AddFoodForm addFood={addFood} />
        <button onClick={toggleForm}>Hide form</button>
      </div>

      <h1>Food List</h1>
      {foods.map((foodItem) => (
        <FoodBox key={foodItem.name} food={foodItem} deleteFood={deleteFood} />
      ))}
    </div>
  );
}
export default App;