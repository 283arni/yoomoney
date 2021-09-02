import {TextField, Paper} from "@material-ui/core";
import master from '../../images/master.png';
import visa from '../../images/visa.png';
import mir from  '../../images/mir.png';
import {makeStyles} from "@material-ui/core/styles";
import ButtonApp from "../ButtonApp/ButtonApp";
import {Link, useHistory} from "react-router-dom";
import {useEffect, useState} from "react";

const images = [
  {
    img: master,
    alt: 'Mastercard'
  },
  {
    img: visa,
    alt: 'VISA'
  },
  {
    img: mir,
    alt: 'MIR'
  }
]

const useStyle = makeStyles({
  root: {
    width: 500,
  },
  card: {
    padding: 15,
    marginBottom: 20
  },
  list: {
    listStyle: "none",
    margin: "0 0 30px 0",
    padding: 0,
    display: 'flex',
    justifyContent: 'flex-end',
    "& li": {
      marginLeft: 5
    }
  },
  form: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
    "& input": {
      padding: 10
    }
  },
  numberCard: {
    width: "100%",
    marginBottom: 30
  },
  dateCard: {
    width: 100
  },
  cvcCard: {
    width: 100,
    "& label": {
      left: "auto",
      right: 100,
      width: 100
    },
    "& span": {
      display: "none"
    },
    "& .MuiInputLabel-outlined": {
      transform: "none",
      transition: "none"
    },
    "& .MuiInputLabel-outlined.MuiInputLabel-shrink": {
      transform: "none",
      transition: "none"
    }
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
  }
})

const fieldsCard = {
  number: '',
  date: '',
  cvc: ''
}

const validateFieldCard = ({number, date, cvc}) => {

  if (number.length === 19 && date.length === 5 && cvc.length === 3) {
    return false;
  }

  return true;
}

const creatIDCard = (number) => {
  return `${Math.random(0, 1) * 100000}${number.substring(15, 19)}`
}

const AddCard = ({onAddCardClick}) => {
  const classes = useStyle();
  const history = useHistory();

  const [card, setCard] = useState(fieldsCard)
  const [isActive, setActive] = useState(true)

  const handleNextClick = () => {
    history.push('/info')
  }

  const transformValueInput = (e) => {
    let value = e.target.value;
    const name = e.target.name;

    if (name === "date") {
      if (e.nativeEvent.inputType === 'deleteContentBackward') {
        e.target.value = '';

        setCard({...card, date: e.target.value});
        return;
      }

      value = value.replace(/[^\d0-9]/g, '').replace(/(.{2})/g, '$1/').trim().slice(0, 5);
    }

    if (name === "number") {
      value = value.replace(/[^\d0-9]/g, '').replace(/(.{4})/g, '$1 ').trim().slice(0, 19);
    }

    if (name === "cvc") {
      value = value.replace(/[^\d0-9]/g, '').trim().slice(0, 3);
    }

    e.target.value = value;
    setCard({...card, id: creatIDCard(card.number), [name]: value});
  }

  useEffect(() => {
    setActive(validateFieldCard(card))
  }, [card])

  return (
    <>
      <h2>Привязка банковской карты</h2>
      <form className={classes.root}>
        <Paper
          elevation={2}
          className={classes.card}
        >
          <ul className={classes.list}>
            {images.map((item) => {
              return (
                <li key={item.alt}>
                  <img src={item.img} alt={item.alt} width={40} height={28}/>
                </li>
              )
            })}
          </ul>
          <div className={classes.form}>
            <TextField
              className={classes.numberCard}
              id="number"
              name="number"
              placeholder="Номер карты"
              variant="outlined"
              onChange={(e) => transformValueInput(e)}
            />
            <TextField
              className={classes.dateCard}
              id="date"
              name="date"
              placeholder="ММ/ГГ"
              variant="outlined"
              onChange={(e) => transformValueInput(e)}
            />
            <TextField
              className={classes.cvcCard}
              id="cvc"
              name="cvc"
              label="Три цифры на обороте"
              placeholder="CVC"
              variant="outlined"
              type="password"
              onChange={(e) => transformValueInput(e)}
            />
          </div>
        </Paper>
        <div className={classes.buttons}>
          <ButtonApp />
          <ButtonApp
            card={card}
            color="purple"
            text="Привязать карту"
            isActive={isActive}
            onNextClick={handleNextClick}
            onAddCardClick={onAddCardClick}
          />
        </div>
      </form>
    </>
  )
}

export default AddCard;
