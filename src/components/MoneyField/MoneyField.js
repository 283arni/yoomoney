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
  label: {
    fontSize: 12
  },
  input: {
    width: 100,
    borderRadius: 4,
    position: 'relative',
    border: '1px solid #ced4da',
    fontSize: 10,
    padding: 5,
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&.Mui-focused': {
      border: '1px solid #3f51b5'
    },
    'label + &': {
      marginTop: 15,
    },
    '& .MuiInputBase-input': {
      padding: 0,
      '&::placeholder': {
        textAlign: 'right'
      },
      '&::-webkit-outer-spin-button, &::-webkit-inner-spin-button': {
        '-webkit-appearance': 'none',
        margin: 0
      }
    }
  }

}));

const MoneyField = () => {
  const classes = useStyles();

  return (
    <FormControl className={classes.root}>
      <InputLabel className={classes.label}  shrink htmlFor="my-input">Сколько</InputLabel>
      <Input className={classes.input} id="my-input" aria-describedby="my-helper-text" placeholder='₽' type='number'/>
    </FormControl>
  )
}

export default MoneyField;
