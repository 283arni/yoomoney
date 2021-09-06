export const validateFieldCard = ({number, date, cvc}) => {
  if (number.length === 19 && date.length === 5 && cvc.length === 3) {
    return false;
  }

  return true;
}

export const creatIDCard = (number) => {
  return `${Math.random() * 100000}${number.substring(15, 19)}`
}

export const transformNumberCard = (numberCard) => {
  return numberCard.substring(0,7) + '** **** ' + numberCard.substring(numberCard.length - 4,numberCard.length);
}