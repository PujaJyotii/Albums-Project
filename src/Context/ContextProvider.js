import { useReducer } from "react";
import Context from "./CreateContext";

const defaultItems = {
  items: [],
  totalAmount: 0,
};

const Reducerfn = (state, action) => {
  if (action.type === "ADD") {
    let findIndex = state.items.findIndex(
      (item) => item.albumName === action.item.albumName
    );
    let cpyArr = [...state.items];
    let totalAmount = state.totalAmount + action.item.price;
    if (findIndex === -1) {
      cpyArr.push({ ...action.item, quantity: 1 });
    } else {
      cpyArr[findIndex] = {
        ...cpyArr[findIndex],
        quantity: cpyArr[findIndex].quantity + 1,
      };
    }

    return {
      items: cpyArr,
      totalAmount: totalAmount,
    };
  }

  if (action.type === "REDUCE") {
    let findIndex = state.items.findIndex(
      (item) => item.albumName === action.item.albumName
    );
    let cpyArr = [...state.items];
    let valueofQuantity = cpyArr[findIndex].quantity;
    let totalAmount = state.totalAmount - action.item.price;
    if (valueofQuantity === 1) {
      cpyArr.splice(findIndex, 1);
    } else {
      cpyArr[findIndex] = {
        ...cpyArr[findIndex],
        quantity: valueofQuantity - 1,
      };
    }

    return {
      items: cpyArr,
      totalAmount: totalAmount,
    };
  }
  return state;
};

export default function ContextProvider(props) {
  const [defaultItem, dispatchfn] = useReducer(Reducerfn, defaultItems);
  const addItemHandler = (item) => {
    dispatchfn({ type: "ADD", item: item });
  };

  const reduceItemHandler = (item) => {
    dispatchfn({ type: "REDUCE", item: item });
  };

  const context = {
    items: defaultItem.items,
    totalAmount: defaultItem.totalAmount,
    addItem: addItemHandler,
    reduceItem: reduceItemHandler,
  };
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
}
