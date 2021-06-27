import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import HomeAppBar from './ui/home/AppBar';
import HomeDrawer from './ui/home/Drawer';
import Main from './ui/home/Main';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
}));

export default function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <HomeAppBar />
      <HomeDrawer />
      <Main />
    </div>
  );
}
