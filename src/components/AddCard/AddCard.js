import {TextField, Paper} from "@material-ui/core";
import master from '../../images/master.png';
import visa from '../../images/visa.png';
import mir from  '../../images/mir.png';
import {makeStyles} from "@material-ui/core/styles";
import ButtonApp from "../ButtonApp/ButtonApp";

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
  numberCart: {
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
    "& .MuiButton-root": {
      textTransform: "none"
    }
  }
})

const AddCard = () => {
  const classes = useStyle();

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
                <li>
                  <img src={item.img} alt={item.alt} width={40} height={28}/>
                </li>
              )
            })}
          </ul>
          <div className={classes.form}>
            <TextField className={classes.numberCart} id="outlined-basic" placeholder="Номер карты" variant="outlined" />
            <TextField className={classes.dateCard} id="outlined-basic" placeholder="ММ/ГГ" variant="outlined" />
            <TextField className={classes.cvcCard} id="outlined-basic" label="Три цифры на обороте" placeholder="CVC" variant="outlined" />
          </div>
        </Paper>
        <div className={classes.buttons}>
          <ButtonApp/>
          <ButtonApp
            color="purple"
            text="Привязать карту"
          />
        </div>
      </form>
    </>
  )
}

export default AddCard;