import React from 'react';
import List from './components/listComponent';
import Form from './components/formComponent';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

function App() {
    const classes = useStyles();

  return (
      <div className={classes.root}>
      <Grid container spacing={3}>
          <Grid item className={classes.paper} xs={4}>
              <Paper>
                <Form/>
              </Paper>
          </Grid>
          <Grid item className={classes.paper} xs={4}>
              <Paper>
                  <List/>
              </Paper>
          </Grid>
      </Grid>
      </div>
  );
}

export default App;
