import {Input} from 'antd';
import { useState } from 'react';

export default function AddFoodForm(props){

    const [formData, setFormData] = useState({
        name: '',
        calories: 0,
        image: '',
        servings: 0
    });

    function handleDataChange(event){
        const inputName = event.target.name;
        let value = event.target.value;

        setFormData({...formData, [inputName]: value});
    };

    function handleSubmit(event){
        event.preventDefault();

        props.addFood(formData);

        setFormData({
            name: '',
            calories: 0,
            image: '',
            servings: 0
        });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <Input name='name' value={formData.name} type="text" onChange={handleDataChange} />

                <label>Calories</label>
                <Input name='calories' value={formData.calories} type="number" onChange={handleDataChange} />

                <label>Image URL</label>
                <Input name='image' value={formData.image} type="text" onChange={handleDataChange} />

                <label>Number of servings</label>
                <Input name='servings' value={formData.servings} type="number" onChange={handleDataChange} />

                <button type='submit'>Add</button>
            </form>
        </div>
    );
};