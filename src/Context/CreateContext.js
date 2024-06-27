import React from "react";

const Context = React.createContext({
  items: [],
  totalAmount: 0,
  addItem: () => {},
  reduceItem: () => {},
});

export default Context;
