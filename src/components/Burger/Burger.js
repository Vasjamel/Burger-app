import React from 'react'
import classes from './Burger.module.css'
import Ingredients from './Ingredients/Ingredients'

const Burger = (props) => {
  let arrayOfIngredients = Object.keys(props.ingredients)
    .map((ingredientKey) => {
      return [...Array(props.ingredients[ingredientKey])].map((_, i) => {
        return <Ingredients key={ingredientKey + i} type={ingredientKey} />
      })
    })
    .reduce((arr, el) => {
      return arr.concat(el)
    }, [])

  if (arrayOfIngredients.length === 0) {
    arrayOfIngredients = <p>Please start adding ingredients</p>
  }

  return (
    <div className={classes.Burger}>
      <Ingredients type='bread-top' />
      {arrayOfIngredients}
      <Ingredients type='bread-bottom' />
    </div>
  )
}

export default Burger
