import React from "react";
import { AppBar,Toolbar,makeStyles } from "@material-ui/core";
//components
import Login from "./account/Login";
const userStyles=makeStyles({
    loginHeader:{
        height:200,
        background:'#00bfa5',
        boxShadow:'none'
    }
})
const Messenger=()=>{
    const classes=userStyles();
    return(
        <>
        <AppBar className={classes.loginHeader}>
            <Toolbar></Toolbar>
        </AppBar>
        <Login/>
        <p>Hello</p>
        </>
    )
}
export default Messenger;