import DoneIcon from '@material-ui/icons/Done';
import {green} from "@material-ui/core/colors";
import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import ButtonApp from "../ButtonApp/ButtonApp";
import BindLayout from "../BindLayout/BindLayout";

const useStyle = makeStyles({
  root: {
    maxWidth: 400,
    textAlign: "center",
    padding: '20px 0'
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
  },
  done: {
    color: green[500]
  }
})

const Message = () => {
  const classes = useStyle();
  const history = useHistory();

  const handleNextClick = () => {
    history.push('/')
  }

  return (
    <BindLayout>
      <div className={classes.root}>
        <div className={classes.circle}>
          <DoneIcon className={classes.done} fontSize="large"/>
        </div>
        <h3>Все получилось</h3>
        <p>Через несколько минут ваша карта появится в кошельке - вы увидите ее в разделе "Банковские карты"</p>
        <ButtonApp
          text="Обратно к картам"
          onNextClick={handleNextClick}
        />
      </div>
    </BindLayout>
  )
}

export default Message;
