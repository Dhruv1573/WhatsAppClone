import React from "react";
import { AppBar,Toolbar,makeStyles,Box } from "@material-ui/core";
//components
import Login from "./account/Login";
const userStyles=makeStyles({
    loginHeader:{
        height:200,
        background:'#00bfa5',
        boxShadow:'none'
    },
    component:{
        
    }
})
const Messenger=()=>{
    const classes=userStyles();
    return(
        <Box className={classes.component}>
        <AppBar className={classes.loginHeader}>
            <Toolbar></Toolbar>
        </AppBar>
        <Login/>
        <p>Hello</p>
        </Box>
    )
}
export default Messenger;