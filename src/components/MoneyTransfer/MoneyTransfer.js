import SelectCard from "../SelectCard/SelectCard";
import MoneyField from "../MoneyField/MoneyField";
import {useEffect, useState} from "react";
import ButtonApp from "../ButtonApp/ButtonApp";
import {makeStyles} from "@material-ui/core/styles";
import TransferMessage from "../TransferMessage/TransferMessage";

const useStyle = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 30
  }
})

const MoneyTransfer = ({cards}) => {
  const classes = useStyle();

  const [values, setValues] = useState({firstField: '0', secondField: '0', moneyField: ''});
  const [active, setActive] = useState(true);
  const [openPopup, setOpenPopup] = useState(false)

  const handleFieldChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setValues({...values, [name]: value})
  }

  const handlePopupClick = () => {
    setOpenPopup(true);
    
    const timer = setTimeout(() => {
      setOpenPopup(false);
    }, 3000)
    return () => clearTimeout(timer);
  }

  useEffect(() => {
    if (values.firstField !== '0' && values.secondField !== '0' && values.moneyField.length) {
      setActive(false);
      return;
    }

    setActive(true);
  }, [values])


  return (
    <>
      <h2>Перевод на кошелек</h2>
      <form>
        <div className={classes.form}>
          <SelectCard
            name='firstField'
            id={values.firstField}
            cards={cards}
            onSelectChange={handleFieldChange}
            checkedCard={values.secondField}
          />
          <MoneyField
            name='moneyField'
            onMoneyChange={handleFieldChange}
          />
          <SelectCard
            name='secondField'
            id={values.secondField}
            cards={cards}
            onSelectChange={handleFieldChange}
            checkedCard={values.firstField}
          />
        </div>
        <ButtonApp
          text="Сделать перевод"
          color="purple"
          isActive={active}
          onNextClick={handlePopupClick}
        />
      </form>
      {openPopup ? <TransferMessage/> : null}
    </>
  )
}

export default MoneyTransfer;
