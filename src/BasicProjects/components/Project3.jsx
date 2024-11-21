import React, { useEffect, useState } from 'react'
import useAxion from '../Hooks/useAxion'
import '../styles/Project3.css'
import MealCategory from './MealCategory'

const Project3 = () => {

  const [selectedCategory, setSelectedCategory] = useState('Vegetarian');
  const { data: items, loading, error } = useAxion('https://www.themealdb.com/api/json/v1/1/filter.php?c=', selectedCategory)

  // if (loading) {
  //   return <div>...Loading</div>
  // }
  // if (error) {
  //   return <div className='meal-error'> {error.message} while accessing <b>{error.config.url}</b></div>
  // }

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='meal-main'>
      <MealCategory className='meal-select-side' onMealCategoryChange={handleCategoryChange} />

      <div className='meal-content'>
        <h1 className='meal-heading'>Meal Menu for {selectedCategory}</h1>
        <div className='meal-container'>

          {
            items && items.length > 0 ? (
              items.map(({ idMeal, strMeal, strMealThumb }) => (
                <div className='meal-card' key={idMeal}>
                  <img className='meal-img' src={strMealThumb} alt={strMeal} />
                  <p className='meal-name'>{strMeal}</p>
                </div>)
              )) : (
              <div className='meal-error'>{error}</div>
            )
          }
        </div>
      </div>
    </div>
  )
}

export default Project3