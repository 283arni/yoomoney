import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

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
  select: {
    width: 300,
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

const SelectCard = () => {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <FormControl className={classes.root}>
      <InputLabel shrink id="demo-customized-select-label">Куда перевести</InputLabel>
      <Select
        className={classes.select}
        labelId="demo-customized-select-label"
        id="demo-customized-select"
        value={age}
        onChange={handleChange}
      >
        <MenuItem value="">
          <em>None</em>
        </MenuItem>
        <MenuItem value={10}>Ten</MenuItem>
        <MenuItem value={20}>Twenty</MenuItem>
        <MenuItem value={30}>Thirty</MenuItem>
      </Select>
    </FormControl>
  )
}

export default SelectCard;