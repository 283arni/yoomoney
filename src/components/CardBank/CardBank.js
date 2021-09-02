import {Card, CardMedia, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import cardImage from '../../images/template-card.png'

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
    color: 'white',
  }
});

const transformNumberCard = (numberCard) => {
  return numberCard.substring(0,7) + '** **** ' + numberCard.substring(numberCard.length - 4,numberCard.length);
}

const CardBank = ({card}) => {
  const classes = useStyles();
  const numberCard = transformNumberCard(card.number);

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="180"
        image={cardImage}
        title="Contemplative Reptile"
      />
      <Typography className={classes.number}>
        {numberCard}
      </Typography>
    </Card>
  )
}


export default CardBank;
