import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import useAxion from '../Hooks/useAxion'

const MealCategory = ({ onMealCategoryChange }) => {

    const [selectedCategory, setSelectedCategory] = useState('');

    const { data: categories, loading, error } = useAxion('https://www.themealdb.com/api/json/v1/1/list.php?c=list', null)
    const exclude = ['Pork', 'Beef', 'Goat', 'Lamb']
    const filteredCategories = categories.filter(meal =>
        !exclude.some(keyword =>
            meal.strCategory.includes(keyword)
        ));

    
    const handleCategorySelect = (mealCategory) => {
        setSelectedCategory(mealCategory);
        onMealCategoryChange(mealCategory);
        console.log(mealCategory);
    }

    return (
        <div className='meal-sidebar'>
            <h2>Categories</h2>
            <ul className='meal-list'>
                {
                    filteredCategories.length > 0 ? (
                        filteredCategories.map(({ strCategory }) => (
                            <div
                                key={strCategory}
                                className={`category-item ${selectedCategory === strCategory ? 'active' : ''}`}
                                onClick={() => handleCategorySelect(strCategory)}
                            >
                                {strCategory}
                            </div>
                            // <li className='meal-item' key={uuidv4()} >{strCategory}</li>
                        ))) : (
                        <p>No Menu</p>
                    )
                }
            </ul>
        </div>
    )
}

export default MealCategory