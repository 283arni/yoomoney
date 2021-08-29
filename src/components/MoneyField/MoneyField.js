import {makeStyles} from "@material-ui/core/styles";
import {FormControl, Input, InputLabel} from "@material-ui/core";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(1),
    '& .MuiInput-underline:hover:not(.Mui-disabled):before': {
      borderBottom: "none"
    },
    '& .MuiInput-underline:after': {
      borderBottom: "none"
    },
    '& .MuiInput-underline:before': {
      borderBottom: "none"
    },
    '& .MuiSelect-select:focus': {
      backgroundColor: "transparent",
    }
  },
  input: {
    width: 100,
    borderRadius: 4,
    position: 'relative',
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '5px 16px 5px 5px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&.Mui-focused': {
      border: '1px solid #3f51b5'
    },
    'label + &': {
      marginTop: '30px',
    }
  }

}));

const MoneyField = () => {
  const classes = useStyles();

  return (
    <FormControl className={classes.root}>
      <InputLabel shrink htmlFor="my-input">Сумма</InputLabel>
      <Input className={classes.input} id="my-input" aria-describedby="my-helper-text" />
    </FormControl>
  )
}

export default MoneyField;