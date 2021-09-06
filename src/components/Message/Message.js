import {makeStyles} from "@material-ui/core/styles";
import {useHistory} from "react-router-dom";
import ButtonApp from "../ButtonApp/ButtonApp";
import BindLayout from "../BindLayout/BindLayout";
import Success from "../Success/Success";

const useStyle = makeStyles({
  root: {
    maxWidth: 400,
    textAlign: "center",
    padding: '20px 0'
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
        <Success/>
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
