import React, { Component } from 'react'
import Hoc from '../../../hoc/Hoc'
import Button from '../../UI/Button/Button'

class OrderSummary extends Component {
  componentWillUpdate() {
    console.log('[OrderSummary] willUpdate')
  }

  render() {
    const summaryOfIngredients = Object.keys(this.props.ingredients).map(
      (eachIngredient) => {
        return (
          <li>
            <span style={{ textTransform: 'capitalize' }}>
              {eachIngredient}
            </span>
            :{this.props.ingredients[eachIngredient]}
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
          <strong>TOTAL PRICE: {this.props.price.toFixed(2)}</strong>
        </p>
        <p>Continue to checkout?</p>
        <Button buttonType='Danger' clicked={this.props.purchaseCancel}>
          CANCEL
        </Button>
        <Button buttonType='Success' clicked={this.props.purchaseContinue}>
          CONTINUE
        </Button>
      </Hoc>
    )
  }
}

export default OrderSummary
