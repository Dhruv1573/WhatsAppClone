import {Dialog,withStyles,Box,Typography,makeStyles, List, ListItem} from '@material-ui/core';
import {GoogleLogin} from 'react-google-login'
import { useContext } from 'react';
import { AccountContext } from '../../context/AccountProvider';
import { clientid } from '../../constants/data';
//css part
const style = {
    dialogPaper: {
        marginTop: '12%',
        height: '95%',
        width: '60%',
        maxWidth: '100%',
        maxHeight: '100%',
        borderRadius: 0,
        boxShadow: 'none',
        overflow: 'hidden'
    }
};
const userStyles = makeStyles({
    component: {
        display: 'flex'
    },
    dialog: {
        padding: '56px 0 56px 56px',
    },
    qr: {
        margin: '50px 0 0 50px',
        height: '  104px',
        width: '104px'
    },
    title: {
        fontSize: 26,
        marginBottom: 25,
        color: '#525252',
        fontFamily: 'Segoe UI,Helvetica Neue,Helvetica,Lucida Grande,Arial,Ubuntu,Cantarell,Fira Sans,sans-serif',
        fontWeight: 300   
    },
    list: {
        '&  > *': {
            padding: 0,
            marginTop: 15,
            fontSize: 18,
            lineHeight: '28px',
            color: '#4a4a4a'
        }
    }
})
const qrurl = 'https://www.ginifab.com/feeds/qr_code/img/qrcode.jpg';

const Login=({classes})=>{
    const classname=userStyles();
    
    const {setAccount}=useContext(AccountContext);
    
    const loginSuccess=(res)=>{
        console.log(res.profileObj);
        console.log("Login Successful")
        setAccount(res.profileObj);
    }
    const loginFailure=()=>{
        console.log("Login Failed")
    }
    
    return(
        <Dialog 
        open={true}
        classes={{paper:classes.dialogPaper}}
        BackdropProps={{style:{backgroundColor:'unset'}}}
        >
        <Box className={classname.component}>
        <Box className={classname.dialog}>
                    <Typography className={classname.title}>To use WhatsApp on your computer:</Typography>
                    <List className={classname.list}>
                        <ListItem>1. Open WhatsApp on your phone</ListItem>
                        <ListItem>2. Tap Menu Settings and select WhatsApp Web</ListItem>
                        <ListItem>3. Point your phone to this screen to capture the code</ListItem>
                    </List>
                </Box>
            <Box style={{position:'relative'}}>
                <img src={qrurl} alt='qr' className={classname.qrcode}/>
                <Box style={{position:'absolute',left:'50%',top:'50%'}}>
                    <GoogleLogin
                        isSignedIn={true}
                        cookiePolicy={'single_host_origin'}
                        buttonText=""
                        onSuccess={loginSuccess}
                        onFailure={loginFailure}
                        clientId={clientid}
                    />
                </Box>
            </Box>
        </Box>
        </Dialog>
    )
}
export default withStyles(style)(Login);
