import React from 'react';
import './App.css';
import SideMenu from "../components/SideMenu";
import { CssBaseline, makeStyles, createTheme, ThemeProvider } from '@material-ui/core';
import Header from "../components/Header";
import PageHeader from '../components/PageHeader';
import DriveEtaTwoToneIcon from '@material-ui/icons/DriveEtaTwoTone';
import Vehicles from '../pages/Vehicles/Vehicles';

const theme = createTheme({
  palette:{
    primary:{
      main: "#333996",
      light: '#3c44b126'
    },
    secondary: {
      main: "#f83245",
      light: '#8324526'
    },
    background:{
      default: "f4f5fd"
    },
  },
  overrides:{
    MuiAppBar:{
      root:{
        transform: 'translateZ(0)'
      }
    }
  },
  props:{
    MuiIconButton:{
      disableRipple:true
    }
  }
})

const useStyles = makeStyles({
  appMain:{
    paddingLeft: '320px',
    width: '100%'
  }
})

function App() {
  const classes = useStyles();

    return (
        <ThemeProvider theme={theme}>
        <SideMenu />
        <div className={classes.appMain}>
          <Header />
          
          <Vehicles />
        </div>
        <CssBaseline />
        </ThemeProvider>
    );
}

export default App;
