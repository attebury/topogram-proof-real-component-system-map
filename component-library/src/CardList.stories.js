import { CardList } from "./components.js";

export default {
  title: "Acme/CardList",
  component: CardList,
  parameters: {
    componentRef: "acme.cardList",
    styleRef: "acme.cards.mobile",
    designNote: "Mobile card list fallback for narrow viewports."
  }
};

export const Default = {
  args: {},
  render: CardList
};
