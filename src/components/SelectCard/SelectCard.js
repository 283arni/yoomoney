import {FormControl, InputLabel, MenuItem, Select} from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {useState} from "react";
import {makeStyles} from "@material-ui/core/styles";
import SelectCardItem from "../SelectCardItem/SelectCardItem";

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
    fontSize: 12,
  },
  select: {
    width: 300,
    fontSize: 8,
    borderRadius: 4,
    position: 'relative',
    border: '1px solid #ced4da',
    padding: '5px 0 5px 5px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    '&.Mui-focused': {
      border: '1px solid #3f51b5'
    },
    'label + &': {
      marginTop: 15,
    },
    '& .MuiInputBase-input': {
      padding: 0
    }
  },
  icon: {
    color: '#999999'
  }
}));

const SelectCard = ({name, cards, onSelectChange, checkedCard}) => {
  const classes = useStyles();
  const [id, setId] = useState('0');

  const newCards = cards.filter((card) => card.id !== checkedCard)


  return (
    <FormControl className={classes.root}>
      <InputLabel
        className={classes.label}
        shrink
        id={`${name}-label`}
      >
        {name === 'firstField' ? 'Куда перевести' : 'Откуда'}
      </InputLabel>
      <Select
        className={classes.select}
        labelId={`${name}-label`}
        name={name}
        value={id}
        IconComponent={() => <ExpandMoreIcon className={classes.icon} fontSize='small'/>}
        onChange={(e) => {
          const name = e.target.name;
          const value = e.target.value;

          setId(value)
          onSelectChange(name, value)
        }}
      >
        <MenuItem value='0'>
          <SelectCardItem />
        </MenuItem>
        {
          newCards.map(card => {
            return (
              <MenuItem key={card.id} value={card.id}>
                <SelectCardItem card={card}/>
              </MenuItem>
            )
          })
        }
      </Select>
    </FormControl>
  )
}

export default SelectCard;
