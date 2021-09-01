import DoneIcon from '@material-ui/icons/Done';
import {green} from "@material-ui/core/colors";
import ButtonApp from "../ButtonApp/ButtonApp";
import {makeStyles} from "@material-ui/core/styles";
import {Link} from "react-router-dom";

const useStyle = makeStyles({
  root: {
    maxWidth: 500,
    textAlign: "center"
  },
  circle: {
    borderRadius: '50%',
    border: `3px solid ${green[500]}`,
    width: 60,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: '0 auto'
  }
})

const Message = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <div className={classes.circle}>
        <DoneIcon fontSize="large" style={{color: green[500]}}/>
      </div>
      <h3>Все получилось</h3>
      <p>Через несколько минут ваша карта появится в кошельке - вы увидите ее в разделе "Банковские карты"</p>
      <Link
        to="/"
        text="Обратно к картам"
        component={ButtonApp}
      />
    </div>
  )
}

export default Message;
