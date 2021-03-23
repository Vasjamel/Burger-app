import React from 'react'
import classes from './Modal.module.css'

const Modal = (props) => {
  return (
    <div
      className={classes.Modal}
      style={{
        opacity: props.showModal ? '1' : '0',
        transform: props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
      }}>
      {props.children}
    </div>
  )
}

export default Modal
