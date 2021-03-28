import React from 'react'
import Logo from '../../Logo/Logo'
import NavigationItems from '../NavigationItems/NavigationItems'
import classes from './SideDrawer.module.css'
import Backdrop from './../../UI/Backdrop/Backdrop'
import Hoc from './../../../hoc/Hoc'

const SideDrawer = (props) => {
  let attachClasses = [classes.SideDrawer, classes.Close]
  if (props.open) {
    attachClasses = [classes.SideDrawer, classes.Open]
  }

  return (
    <Hoc>
      <Backdrop show={props.open} hideModal={props.closed} />
      <div className={attachClasses.join(' ')}>
        <div className={classes.Logo}>
          <Logo />
        </div>
        <nav>
          <NavigationItems />
        </nav>
      </div>
    </Hoc>
  )
}

export default SideDrawer
