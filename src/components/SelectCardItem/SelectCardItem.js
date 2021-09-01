import {MenuItem} from "@material-ui/core";
import template from "../../images/card.png";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  item: {
    display: "flex",
    fontSize: 8,
    alignItems: "center",
    '& img': {
      marginRight: 10
    }
  }
}));

const SelectCardItem = ({value}) => {
  const classes = useStyles();

  return (
    <MenuItem value={value}>
      <div className={classes.item}>
        <img src={template} width={20} height={15} alt="Tinkoff"/>
        <div>
          <div>Tinkoff</div>
          <div>4444</div>
        </div>
      </div>
    </MenuItem>
  )
}

export  default SelectCardItem;
