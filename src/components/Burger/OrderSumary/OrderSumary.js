import React from 'react'
import Hoc from '../../../hoc/Hoc'

const OrderSummary = (props) => {
  const summaryOfIngredients = Object.keys(props.ingredients).map(
    (eachIngredient) => {
      return (
        <li>
          <span style={{ textTransform: 'capitalize' }}>{eachIngredient}</span>:
          {props.ingredients[eachIngredient]}
        </li>
      )
    }
  )

  return (
    <Hoc>
      <h3>Your order</h3>
      <p>Delicious burger with a following ingredients:</p>
      <ul>{summaryOfIngredients}</ul>
      <p>Continue to checkout?</p>
    </Hoc>
  )
}

export default OrderSummary
