import { useState } from "react";
import { Input } from "antd";

const AddFoodForm = ({ addFood }) => {
  const [info, setInfo] = useState({
    name: "",
    image: "",
    calories: 0,
    servings: 0,
  });

  const handleInput = (e) => {
    setInfo({ ...info, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addFood(info);
    setInfo({
      name: "",
      image: "",
      calories: 0,
      servings: 0,
    });
  };

  return (
    <form>
      <Input
        placeholder='Insert food name'
        name='name'
        value={info.name}
        type='text'
        onChange={(e) => handleInput(e)}
      />
      <Input
        placeholder='Insert image url'
        name='image'
        value={info.image}
        type='text'
        onChange={(e) => handleInput(e)}
      />
      <Input
        placeholder='Insert calories number'
        name='calories'
        value={info.calories}
        type='number'
        onChange={(e) => handleInput(e)}
      />
      <Input
        placeholder='Insert servings amount'
        name='servings'
        value={info.servings}
        type='number'
        onChange={(e) => handleInput(e)}
      />
      <button type='submit' onClick={handleSubmit}>
        Create Food
      </button>
    </form>
  );
};

export default AddFoodForm;
