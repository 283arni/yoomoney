import {Paper} from "@material-ui/core";
import Success from "../Success/Success";
import {makeStyles} from "@material-ui/core/styles";

const useStyle = makeStyles({
  root: {
    position: "fixed",
    right: 0,
    left: 0,
    top: 0,
    bottom: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  message: {
    padding: 20
  }
})

const TransferMessage = () => {
  const classes = useStyle();

  return (
    <div className={classes.root}>
      <Paper className={classes.message}>
        <Success />
      </Paper>
    </div>
  )
}

export default TransferMessage;