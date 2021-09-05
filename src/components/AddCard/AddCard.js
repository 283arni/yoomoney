import {TextField, Paper} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";
import ButtonApp from "../ButtonApp/ButtonApp";
import {useHistory} from "react-router-dom";
import {useEffect, useState} from "react";
import BindLayout from "../BindLayout/BindLayout";
import {images, fieldsCard} from "../../data";


const useStyle = makeStyles({
  root: {
    width: 300,
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
      padding: 5,
      fontSize: 12
    }
  },
  numberCard: {
    width: "100%",
    marginBottom: 30
  },
  dateCard: {
    width: 50
  },
  cvcCard: {
    width: 50,
    "& label": {
      left: "auto",
      right: 50,
      width: 75,
      fontSize: 12
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

const validateFieldCard = ({number, date, cvc}) => {

  if (number.length === 19 && date.length === 5 && cvc.length === 3) {
    return false;
  }

  return true;
}

const creatIDCard = (number) => {
  return `${Math.random() * 100000}${number.substring(15, 19)}`
}

const AddCard = ({onAddCardClick}) => {
  const classes = useStyle();
  const history = useHistory();

  const [card, setCard] = useState(fieldsCard)
  const [isActive, setActive] = useState(true)

  const handleNextClick = () => {
    history.push('/info')
  }

  const handleCancelClick = () => {
    history.push('/')
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
    <BindLayout>
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
          <ButtonApp
            onNextClick={handleCancelClick}
          />
          <ButtonApp
            card={card}
            color="purple"
            text="Продолжить"
            isActive={isActive}
            onNextClick={handleNextClick}
            onAddCardClick={onAddCardClick}
          />
        </div>
      </form>
    </BindLayout>
  )
}

export default AddCard;
