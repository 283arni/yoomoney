import {Card, CardMedia, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import cardImage from '../../images/template-card.png'
import {transformNumberCard} from "../../utils";

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    position: "relative",
    margin: '0 5px 5px 5px'
  },
  number: {
    position: "absolute",
    top: '50%',
    transform: 'translateY(-50%)',
    left: 20,
    color: '#999999',
  }
});

const CardBank = ({card}) => {
  const classes = useStyles();
  const numberCard = transformNumberCard(card.number);

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt={card.bank}
        height="180"
        image={cardImage}
        title={card.bank}
      />
      <Typography className={classes.number}>
        {numberCard}
      </Typography>
    </Card>
  )
}


export default CardBank;
