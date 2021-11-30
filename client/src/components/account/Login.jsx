import {Dialog,withStyles,Box,Typography,makeStyles} from '@material-ui/core';
//css part
const style={
    dialogPaper:{
        width:'60%',
        height:'95%',
        marginTop:'12%',
        boxShadow:'none',
        borderRadius:0
    }
}
const Login=({classes})=>{
    return(
        <Dialog 
        open={true}
        classes={{paper:classes.dialogPaper}}
        BackdropProps={{style:{backgroundColor:'unset'}}}
        >
        <Box>
            <Box></Box>
        </Box>
        </Dialog>
    )
}
export default withStyles(style)(Login);
