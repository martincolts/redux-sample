import React from 'react';
import List from './components/listComponent';
import Form from './components/formComponent';
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";


function App() {
  return (
      <Container>
          <Grid item xs={6}>
              <Paper>
                <Form/>
              </Paper>
          </Grid>
          <Grid item xs={6}>
              <Paper>
                  <List/>
              </Paper>
          </Grid>
      </Container>
  );
}

export default App;
