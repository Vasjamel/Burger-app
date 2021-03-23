import React from 'react'
import classes from './BuildControl.module.css'
import EachBuildControl from './EachBuildControl.js/EachBuildControl'

const controls = [
  { label: 'Salad', type: 'salad' },
  { label: 'Cheese', type: 'cheese' },
  { label: 'Meat', type: 'meat' },
  { label: 'Bacon', type: 'bacon' },
]

const BuildControl = (props) => {
  return (
    <div className={classes.BuildControl}>
      <p>
        PRICE IS <strong>{props.price.toFixed(2)}</strong>
      </p>
      {controls.map((cntrl) => {
        return (
          <EachBuildControl
            key={cntrl.label}
            label={cntrl.label}
            add={() => props.addIngredient(cntrl.type)}
            remove={() => props.removeIngredient(cntrl.type)}
            disabled={props.disabled}
          />
        )
      })}
      <button
        className={classes.OrderButton}
        disabled={!props.purchasable}
        onClick={props.ordered}>
        ORDER NOW
      </button>
    </div>
  )
}

export default BuildControl
