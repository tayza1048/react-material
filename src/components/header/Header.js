import React, { Component } from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import TypoGraphy from '@material-ui/core/Typography'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';

import styles from './Header.module.scss';

class Header extends Component {
  render() {
    return (
      <AppBar color="primary" position="static">
        <Toolbar>
          <TypoGraphy variant="title" color="inherit">
            React Snippets
          </TypoGraphy>
          
          <List component="nav">
            <ListItem component="div" >
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="title">
                  <Link to="/" className={styles["link-custom"]}>Home</Link>
                </TypoGraphy>
              </ListItemText>
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="title">
                  <Link to="/calculator" className={styles["link-custom"]}>Calculator</Link>
                </TypoGraphy>
              </ListItemText>
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="title">
                  <Link to="/posts" className={styles["link-custom"]}>Posts</Link>
                </TypoGraphy>
              </ListItemText>
              <ListItemText inset>
                <TypoGraphy color="inherit" variant="title">
                  <Link to="/contact" className={styles["link-custom"]}>Contact</Link>
                </TypoGraphy>
              </ListItemText>
            </ListItem >
          </List>

        </Toolbar>
      </AppBar>
    )
  }
}

export default Header;