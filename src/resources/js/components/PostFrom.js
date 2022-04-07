import React from "react";
import { TextField, Button } from "@material-ui/core";
import { makeStyles, createStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => createStyles({
    textArea: {
        marginRight: theme.spacing(2),
    },
}));

function PostFrom(props){
    const classes = useStyles();

    return (
      <form>
          <TextField id="name" label="タスク名" variant="outlined" ClassName={classes.textArea} name="name" />
          <TextField id="content" label="内容" variant="outlined" ClassName={classes.textArea} name="content" />
          <Button color="primary" variant="contained" href="/">登録</Button>
      </form>  
    );
}

export default PostFrom;