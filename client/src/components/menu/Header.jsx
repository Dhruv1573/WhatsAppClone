import { useContext, useState } from 'react';
import { Box, makeStyles } from '@material-ui/core';
import {Chat as MessageIcon} from '@material-ui/icons'
import { AccountContext } from '../../context/AccountProvider';

//components
import HeaderMenu from './HeaderMenu';

const useStyles = makeStyles({
    header: {
        height: 35,
        background: '#ededed',
        display: 'flex',
        padding: '10px 16px',
        alignItems: 'center'
    },
    chatIcons: {
        marginLeft: 'auto',
        '& > *': {
            marginLeft: 2,
            padding: 8,
            color: '#919191'
        },
        '& :first-child': {
            fontSize: 22,
            marginRight: 8,
            marginTop: 3
        }
    },
    avatar: {
        height: 37,
        width: 37,
        borderRadius: '50%'
    }
})

const Header = () => {
    const classes = useStyles();
    const [ setOpenDrawer] = useState(false);

    const { account } = useContext(AccountContext);
    
    const toggleDrawer = () => {
        setOpenDrawer(true);
    }

    return (
        <>
            <Box className={classes.header}>
                <img src={account.imageUrl} className={classes.avatar} onClick={() => toggleDrawer()} alt='Hello'/>
                <Box className={classes.chatIcons}>
                    <MessageIcon/>
                    <HeaderMenu/>
                </Box>
            </Box>
            
        </>
    )
}


export default Header;