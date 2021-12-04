import { MoreVert } from "@material-ui/icons"
import { Menu,MenuItem,makeStyles } from "@material-ui/core";
import { useContext, useState } from "react";
import { GoogleLogout } from "react-google-login";
import { clientid } from "../../constants/data";
import { AccountContext } from "../../context/AccountProvider";

const useStyle = makeStyles({
    menuItem: {
        fontSize: 14,
        padding: '15px 60px 5px 24px',
        color: '#4A4A4A'
    },
    logout: {
        border:'none!important', 
        boxShadow: 'none!important',
        '& > *': {
            padding: '0px!important'
        }
    }
})

const HeaderMenu=()=>{
    const [open,setOpen]=useState(false);
    const {setAccount}=useContext(AccountContext);
    const handleClose=()=>{
        setOpen(false);
    }
    const handleClick=(event)=>{
        setOpen(event.currentTarget);
    }
    const logoutSuccess=()=>{
        alert("you have been loggedout sucessfully");
        console.clear();
        setAccount('');
    }
    const classes=useStyle();
    return(
        <>
            <MoreVert onClick={handleClick} />
            <Menu
                anchorEl={open}
                keepMounted
                open={open}
                onClose={handleClose}
                getContentAnchorEl={null}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem className={classes.menuItem} onClick={() => { handleClose();}}>Profile</MenuItem>
                <MenuItem  className={classes.menuItem} onClick={() => { handleClose(); }}>
                    <GoogleLogout
                        isSignedIn={true}
                        buttonText="Logout"
                        onLogoutSuccess={logoutSuccess}
                        clientId={clientid}
                    />
                </MenuItem>
            </Menu>
        </>
    )
}
export default HeaderMenu;