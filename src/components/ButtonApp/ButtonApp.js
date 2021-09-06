import {Button, withStyles} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

const NewButton = withStyles({
  root: {
    textTransform: "none",
    fontSize: 10
  }
})(Button)


const useStyle = makeStyles({
  purple: {
    backgroundColor: "#8a3dfb",
    color: "white",
    transition: "0.3s",
    "&:hover": {
      backgroundColor: "#8a3dfb",
      opacity: 0.8
    }
  }
})

const ButtonApp = ({card, color, text, isActive, onNextClick, onAddCardClick}) => {
  const classes = useStyle();

  const addCardOrNull = (card) => {
    return onAddCardClick ? onAddCardClick(card) : null;
  }

  const addNextOrNull = () => {
    return onNextClick ? onNextClick() : null;
  }

  return (
    <NewButton
      variant="contained"
      className={color ? classes.purple : ''}
      disabled={isActive}
      onClick={() => {
        addNextOrNull();
        addCardOrNull(card)
      }}
    >
      {text ? text : "Отмена"}
    </NewButton>
  )
}

export default ButtonApp;
