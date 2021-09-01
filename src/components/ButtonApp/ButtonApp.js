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

const ButtonApp = ({color, text, href, isActive}) => {
  const classes = useStyle();

  return (
    <NewButton
      href={href}
      variant="contained"
      className={color ? classes.purple : ''}
      disabled={isActive}
    >
      {text ? text : "Отмена"}
    </NewButton>
  )
}

export default ButtonApp;
