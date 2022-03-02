import "./App.css";
import { useState } from "react";
import FoodBox from "./components/FoodBox";
import AddFoodForm from "./components/AddFoodForm";
import Search from "./components/Search";
import { Divider } from "antd";

import originalFoods from "./foods.json";

function App() {
  const [foodData, setFood] = useState([...originalFoods]);
  const [filteredFood, setFilteredFood] = useState([...originalFoods]);
  const [search, setSearch] = useState("");
  const [toggleForm, setToggleForm] = useState(false);

  const handleFilter = (query) => {
    setSearch(query);

    if (query === "") {
      setFilteredFood(foodData);
    } else {
      const newFilteredFood = foodData.filter((food) =>
        food.name.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredFood(newFilteredFood);
    }
  };

  const addFood = (info) => {
    setFood([info, ...foodData]);
    setFilteredFood([info, ...filteredFood]);
  };

  const deleteFood = (name) => {
    const newFood = foodData.filter((f) => f.name !== name);
    setFood(newFood);
    setFilteredFood(newFood);
  };

  return (
    <div className='App'>
      <Divider plain>Add Food</Divider>
      <button onClick={() => setToggleForm(!toggleForm)}>
        {toggleForm ? "Hide form" : "Show form"}
      </button>
      {toggleForm && <AddFoodForm addFood={addFood} />}

      <Divider plain>Search</Divider>
      <Search search={search} handleFilter={handleFilter} />

      <Divider plain>Food List</Divider>
      <div className='food-list'>
        {filteredFood.length === 0 ? (
          <div className='no-food'>
            <p>No food to display!</p>
            <img
              src='https://www.freeiconspng.com/uploads/forbidden-icon-27.png'
              alt='nothing to display'
            />
          </div>
        ) : (
          filteredFood.map((f, i) => (
            <FoodBox key={i} food={f} deleteFood={deleteFood} />
          ))
        )}
      </div>
    </div>
  );
}

export default App;
