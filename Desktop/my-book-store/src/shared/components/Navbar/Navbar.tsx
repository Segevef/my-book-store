import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import { NavLink } from "react-router-dom";
import Tooltip from '@material-ui/core/Tooltip';
import Button from "@material-ui/core/Button";

import IconButton from '@material-ui/core/IconButton';

import AccountCircle from '@material-ui/icons/AccountCircle';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import logo from '../../../assets/images/logo.png'

import { makeStyles } from "@material-ui/core/styles";
import styles from "./NavbarStyle";

//@ts-ignore
const useStyles = makeStyles(styles);

export default function Navbar() {
  const classes = useStyles();
  const activestyle = { color: "black", backgroundColor: 'white', };

  return (
    <div>
      <AppBar position="sticky" style={{backgroundColor: 'black'}} >
        <Toolbar>
          <div>
              <img src={logo} alt="logo" className={classes.logo} />
          </div>
          <div className={classes.buttonNavsDiv}>
            <NavLink
              activeStyle={activestyle}
              className={classes.navLink}
              exact
              to="/"
              style={{borderRight: '0.1em solid white'}}
            >
              Home
            </NavLink>
            <NavLink
              activeStyle={activestyle}
              className={classes.navLink}
              to="/StorePage"
              style={{borderRight: '0.1em solid white'}}

            >
              Store
            </NavLink>
            <NavLink
              activeStyle={activestyle}
              className={classes.navLink}
              to="/SalesPage"
            >
              Sales
            </NavLink>

          </div>
          <div className={classes.buttonIconsDiv}>
            <Tooltip title="Account Info" arrow>
              <IconButton
                edge="end"
                color="inherit"
              >
                <AccountCircle style={{fontSize: 45, marginRight: 10}}/>
              </IconButton>
            </Tooltip>
            <Tooltip title="Shopping Cart" arrow>
              <IconButton
                edge="end"
                color="inherit"
              >
                <ShoppingCartIcon style={{fontSize: 45}}/>
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
