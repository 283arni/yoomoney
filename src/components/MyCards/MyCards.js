import {Grid} from "@material-ui/core";
import CardBank from "../CardBank/CardBank";
import ButtonApp from "../ButtonApp/ButtonApp";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";

const useStyle = makeStyles({
  list: {
    marginBottom: 30
  }
})

const MyCards = ({cards}) => {
  const classes = useStyle();
  const history = useHistory();

  const handleNextClick = () => {
    history.push('/add-card')
  }

  return (
    <>
      <h2>Мои карты</h2>
      <Grid className={classes.list} container>
        {
          cards.length ?
          cards.map(card => <CardBank key={card.id} card={card}/>)
            :
          <span>У вас нет карт :(</span>
        }
      </Grid>
      <ButtonApp
        color="purple"
        text={cards.length ? "Добавить еще карту" : "Добавить карту"}
        onNextClick={handleNextClick}
      />
    </>
  )
}

export default MyCards;
