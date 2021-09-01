import {Grid} from "@material-ui/core";
import CardBank from "../CardBank/CardBank";
import ButtonApp from "../ButtonApp/ButtonApp";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const useStyle = makeStyles({
  list: {
    marginBottom: 30
  }
})

const MyCards = () => {
  const classes = useStyle();

  return (
    <>
      <h2>Мои карты</h2>
      <Grid className={classes.list} container>
        <CardBank/>
      </Grid>
      <Link
        to='/add-card'
        color="purple"
        text="Добавить карту"
        component={ButtonApp}
      />
    </>
  )
}

export default MyCards;
