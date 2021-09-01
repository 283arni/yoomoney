import SelectCard from "../SelectCard/SelectCard";
import MoneyField from "../MoneyField/MoneyField";
import React from "react";
import ButtonApp from "../ButtonApp/ButtonApp";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
  form: {
    display: "flex",
    flexDirection: "column",
    marginBottom: 30
  }
})

const MoneyTransfer = () => {
  const classes = useStyle();

  return (
    <>
      <h2>Перевод на кошелек</h2>
      <form>
        <div className={classes.form}>
          <SelectCard/>
          <MoneyField/>
          <SelectCard/>
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
