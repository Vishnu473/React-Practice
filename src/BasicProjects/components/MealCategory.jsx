import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useAxion from '../Hooks/useAxion'

const MealCategory = ({ onMealCategoryChange }) => {

    const [selectedCategory, setSelectedCategory] = useState('');

    const { data: categories, loading, error } = useAxion('https://www.themealdb.com/api/json/v1/1/list.php?c=list',null)
    const exclude = ['Pork', 'Beef', 'Goat', 'Lamb']
    const filteredCategories = categories.filter(meal =>
        !exclude.some(keyword =>
            meal.strCategory.includes(keyword)
        ));

    const handleCategoryChange = (e) => {
        e.preventDefault();
        const selected = e.target.value;
        setSelectedCategory(selected);
        onMealCategoryChange(selected);
        console.log(selected);
    }

    return (
        <div className='category-selector'>
            <select value={selectedCategory}
            onChange={handleCategoryChange}
            className="category-dropdown">
            <option value="">Select Menu Category</option>
            {
                filteredCategories.length > 0 ? (
                    filteredCategories.map(({ strCategory }) => (
                        <option key={uuidv4()} value={strCategory}>{strCategory}</option>
                    ))) : (
                    <option>No</option>
                )
            }
        </select>

        </div>
    )
}

export default MealCategory