import React from 'react'
import Hoc from '../../../hoc/Hoc'
import Button from '../../UI/Button/Button'

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
      <p>
        <strong>TOTAL PRICE: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to checkout?</p>
      <Button buttonType='Danger' clicked={props.purchaseCancel}>
        CANCEL
      </Button>
      <Button buttonType='Success' clicked={props.purchaseContinue}>
        CONTINUE
      </Button>
    </Hoc>
  )
}

export default OrderSummary
