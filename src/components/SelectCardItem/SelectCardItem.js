import template from "../../images/card.png";
import mastercard from "../../images/master.png";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    fontSize: 8,
    alignItems: "center",
    '& img': {
      marginRight: 10
    }
  },
  number: {
    color: '#b2b2b2'
  }
}));

const SelectCardItem = ({card}) => {
  const classes = useStyles();

  return (
    <div className={classes.item}>
      {card ?
        <>
          <img src={mastercard} width={20} height={15} alt={card.bank}/>
          <div>
            <div>{card.bank}</div>
            <div className={classes.number}>{`**** ${card.number.substring(card.number.length - 4, card.number.length)}`}</div>
          </div>
        </> :
        <>
          <img src={template} width={20} height={15} alt='Новая карта'/>
          <div>Новая карта</div>
        </>
      }
    </div>
  )
}

export  default SelectCardItem;
