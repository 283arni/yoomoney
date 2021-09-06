import React, {useState} from 'react';
import {Container} from '@material-ui/core';
import MyCards from "../MyCards/MyCards";
import MoneyTransfer from "../MoneyTransfer/MoneyTransfer";
import {Route, Switch} from "react-router-dom";
import AddCard from "../AddCard/AddCard";
import Message from "../Message/Message";

function App() {
  const [cards, setCards] = useState([])

  const handleAddCardClick = (newCard) => {
    setCards([...cards, newCard])
  }

  return (
    <div className="App">
      <h1 hidden>Тестовое задание</h1>
      <Container>
        <Switch>
          <Route exact path="/">
            <MyCards
              cards={cards}
            />
            <MoneyTransfer
              cards={cards}
            />
          </Route>
          <Route exact path="/add-card">
            <AddCard
              onAddCardClick={handleAddCardClick}
            />
          </Route>
          <Route exact path="/info" component={Message} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
