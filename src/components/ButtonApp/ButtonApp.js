import {Button} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";


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

const ButtonApp = ({color, text}) => {
  const classes = useStyle();

  return (
    <Button variant="contained" className={color ? classes.purple : ''}>
      {text ? text : "Отмена"}
    </Button>
  )
}

export default ButtonApp;