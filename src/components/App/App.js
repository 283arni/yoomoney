import React from 'react';
import {Container, FormGroup, Grid, Button} from '@material-ui/core';
import SelectCard from "../SelectCard/SelectCard";
import MoneyField from "../MoneyField/MoneyField";
import CardBank from "../CardBank/CardBank";
import AddCard from "../AddCard/AddCard";



function App() {


  return (
    <div className="App">
      <h1 hidden>Тестовое задание</h1>
      <Container>
        <AddCard/>
        {/*<h2>Мои карты</h2>*/}
        {/*<Grid container>*/}
        {/*  <CardBank/>*/}
        {/*</Grid>*/}
        {/*<Button variant="contained" color="primary">*/}
        {/*  Primary*/}
        {/*</Button>*/}
        {/*<h2>Перевод на кошелек</h2>*/}
        {/*<form>*/}
      {/*    <SelectCard/>*/}
      {/*    <MoneyField/>*/}
      {/*    <SelectCard/>*/}
        {/*  <Button variant="contained" color="primary">*/}
        {/*    Primary*/}
        {/*  </Button>*/}
        {/*</form>*/}
      </Container>
    </div>
  );
}

export default App;
