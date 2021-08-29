import {Card, CardMedia, Typography} from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import cardImage from '../../images/master.png'

const useStyles = makeStyles({
  root: {
    minWidth: 300,
    position: "relative"
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
  const hiddenNumber = numberCard.substring(0,6) + '******' + numberCard.substring(numberCard.length - 4,numberCard.length);
  return hiddenNumber.replace(/(.{4})/g, '$1 ');
}

const CardBank = () => {
  const classes = useStyles();
  const numberCard = transformNumberCard('1234123412341234');

  return (
    <Card className={classes.root}>
      <CardMedia
        component="img"
        alt="Contemplative Reptile"
        height="140"
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