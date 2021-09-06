import DoneIcon from "@material-ui/icons/Done";
import {makeStyles} from "@material-ui/core/styles";
import {green} from "@material-ui/core/colors";

const useStyle = makeStyles({
  circle: {
    borderRadius: '50%',
    border: `3px solid ${green[500]}`,
    width: 60,
    height: 60,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: '0 auto'
  },
  done: {
    color: green[500]
  }
})

const Success = () => {
  const classes = useStyle();

  return (
    <div className={classes.circle}>
      <DoneIcon className={classes.done} fontSize="large"/>
    </div>
  )
}

export default Success;