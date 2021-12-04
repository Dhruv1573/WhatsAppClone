
import {Dialog,withStyles,Box,makeStyles} from '@material-ui/core';
import Menu from './menu/Menu';

//css part
const style = {
    dialogPaper: {
        marginTop: '12%',
        height: '95%',
        width: '91%',
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
    leftComponent:{
        minWidth:380
    },
    rightComponent:{
        borderLeft:'1px solid rgba(0,0,0,0.14)'
    }
})

const ChatBox=({classes})=>{
    const classname=userStyles();
    
    
    return(
        <Dialog 
        open={true}
        classes={{paper:classes.dialogPaper}}
        BackdropProps={{style:{backgroundColor:'unset'}}}
        >
        <Box className={classname.component}>
            <Box className={classname.leftComponent}>
            <Menu/>
            </Box>
            <Box className={classname.rightComponent}>Hii</Box>
        </Box>
        </Dialog>
    )
}
export default withStyles(style)(ChatBox);

