import React, { Component } from 'react'
import Hoc from '../../hoc/Hoc'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'
import Toolbar from '../Navigation/Toolbar/Toolbar'
import classes from './../Layout/Layout.module.css'

class Layout extends Component {
  state = {
    showSideDrawer: false,
  }

  sideDrawerCloseHandler = () => {
    this.setState({ showSideDrawer: false })
  }

  drawerToggleHandler = () => {
    this.setState((oldState) => {
      return { showSideDrawer: !oldState.showSideDrawer }
    })
  }

  render() {
    return (
      <Hoc>
        <Toolbar drawerToggleClicked={this.drawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerCloseHandler}
        />
        <main className={classes.content}>{this.props.children}</main>
      </Hoc>
    )
  }
}

export default Layout
