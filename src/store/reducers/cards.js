import { cards as cardsDefault } from "data/normalized";

export default (cards = cardsDefault, action) => {
  console.log(cards);

  return cards;
};
