import React from 'react'
import classes from './Order.module.css'

const Order = (props) => {
  return (
    <div className={classes.Order}>
      <p>Ingredients: Salad (1)</p>
      <p>
        Price: <strong>USD 10</strong>
      </p>
    </div>
  )
}

export default Order
