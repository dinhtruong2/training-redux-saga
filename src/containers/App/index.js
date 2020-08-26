import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import styles from './styles.js';
import { withStyles } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import Taskboard from '../Taskboard/index.js';



class App extends Component {
    render() {
        const { classes } = this.props;
        return (
            <ThemeProvider>
                <Taskboard />
            </ThemeProvider>
        )
    }
}


export default withStyles(styles)(App);