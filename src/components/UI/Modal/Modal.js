import React from 'react'
import classes from './Modal.module.css'
import Hoc from './../../../hoc/Hoc'
import Backdrop from './../Backdrop/Backdrop'

const Modal = (props) => {
  return (
    <Hoc>
      <Backdrop show={props.showModal} hideModal={props.hideModal} />
      <div
        className={classes.Modal}
        style={{
          opacity: props.showModal ? '1' : '0',
          transform: props.showModal ? 'translateY(0)' : 'translateY(-100vh)',
        }}>
        {props.children}
      </div>
    </Hoc>
  )
}

export default Modal
