import React, { useContext } from "react";
import { AppBar,Toolbar,makeStyles,Box } from "@material-ui/core";
//components
import Login from "./account/Login";
import { AccountContext } from "../context/AccountProvider";
import ChatBox from "./ChatBox";
const userStyles=makeStyles({
    loginHeader:{
        height:200,
        background:'#00bfa5',
        boxShadow:'none'
    },
    component:{
        background:'#DCDCDC',
        height:'100vh'
    }
})
const Messenger=()=>{
    const classes=userStyles();
    const {account}=useContext(AccountContext);
    return(
        <Box className={classes.component}>
        <AppBar className={classes.loginHeader}>
            <Toolbar></Toolbar>
        </AppBar>
        {account ?<ChatBox/>:<Login/>}
        
        </Box>
    )
}
export default Messenger;