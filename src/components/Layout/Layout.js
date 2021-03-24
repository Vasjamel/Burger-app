import React from 'react'
import Hoc from '../../hoc/Hoc'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './../Layout/Layout.module.css'

const Layout = (props) => {
  return (
    <Hoc>
      <Toolbar />
      <SideDrawer />
      <main className={classes.content}>{props.children}</main>
    </Hoc>
  )
}

export default Layout
