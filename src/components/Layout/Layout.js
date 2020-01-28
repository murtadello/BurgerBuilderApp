import React, { Component } from "react";
import Auxilary from "../../Auxilary/Auxilary";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer.js";
class Layout extends Component {
  state = {
    showSideDrawer: false
  };
  sideDrawerClosedHandler = () => {
    this.setState({ showSideDrawer: false });
  };
  sideDrawerToggleHandler = () => {
    this.setState(prevState => {
      return { showSideDrawer: !prevState.showSideDrawer };
    });
  };
  render() {
    return (
      <Auxilary>
        <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
        <SideDrawer
          open={this.state.showSideDrawer}
          closed={this.sideDrawerClosedHandler}
        />
        <main className={classes.Content}>{this.props.children}</main>
      </Auxilary>
    );
  }
}
export default Layout;
