import SelectCard from "../SelectCard/SelectCard";
import MoneyField from "../MoneyField/MoneyField";
import {useState} from "react";
import ButtonApp from "../ButtonApp/ButtonApp";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 30
  }
})

const MoneyTransfer = ({cards}) => {
  const classes = useStyle();

  const [idCards, setIdCards] = useState({firstField: '', secondField: ''});

  const handleSelectChange = (name, value) => {
    setIdCards({...idCards, [name]: value})
  }

  return (
    <>
      <h2>Перевод на кошелек</h2>
      <form>
        <div className={classes.form}>
          <SelectCard
            name='firstField'
            cards={cards}
            onSelectChange={handleSelectChange}
            checkedCard={idCards.secondField}
          />
          <MoneyField/>
          <SelectCard
            name='secondField'
            cards={cards}
            onSelectChange={handleSelectChange}
            checkedCard={idCards.firstField}
          />
        </div>
        <ButtonApp
          text="Сделать перевод"
          color="purple"
        />
      </form>
    </>
  )
}

export default MoneyTransfer;
