import React from 'react'
import classes from './EachBuildControl.module.css'

const EachBuildControl = (props) => {
  return (
    <div className={classes.EachBuildControl}>
      <div className={classes.Label}>{props.label}</div>
      <button
        className={classes.Less}
        onClick={props.remove}
        disabled={props.disabled}>
        Less
      </button>
      <button className={classes.More} onClick={props.add}>
        More
      </button>
    </div>
  )
}

export default EachBuildControl
