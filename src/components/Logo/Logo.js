import React from 'react'
import burgerLogo from './../../assets/logo.png'
import classes from './Logo.module.css'

const Logo = (props) => {
  return (
    <div className={classes.Logo}>
      <img src={burgerLogo} alt='BurgerLogo' />
    </div>
  )
}

export default Logo
