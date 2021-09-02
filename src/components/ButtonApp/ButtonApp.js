import {Button, withStyles} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const NewButton = withStyles(theme => ({
  root: {
    textTransform: "none",
    textDecoration: "none"
  }
}))(Button)


const useStyle = makeStyles({
  purple: {
    backgroundColor: "purple",
    color: "white",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "purple",
      opacity: 0.8
    }
  }
})

const ButtonApp = ({card, color, text, isActive, onNextClick, onAddCardClick}) => {
  const classes = useStyle();

  const addCardOrNull = (card) => {
    return onAddCardClick ? onAddCardClick(card) : null;
  }

  return (
    <NewButton
      variant="contained"
      className={color ? classes.purple : ''}
      disabled={isActive}
      onClick={() => {
        onNextClick();
        addCardOrNull(card)
      }}
    >
      {text ? text : "Отмена"}
    </NewButton>
  )
}

export default ButtonApp;
