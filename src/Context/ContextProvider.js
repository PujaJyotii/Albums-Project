import { useEffect, useState } from "react";
import Context from "./CreateContext";

export default function ContextProvider(props) {
  let [res, setRes] = useState([]);
  let [totalAmount, setTotalAmount] = useState(0);
  const addItemHandler = async (item) => {
    let findIndex = res.findIndex((p) => p.albumName === item.albumName);
    setTotalAmount((prevTotal) => prevTotal + item.price);
    if (findIndex === -1) {
      try {
        let resp = await fetch(
          "https://movie-project-28d8c-default-rtdb.firebaseio.com/cart.json",
          {
            method: "POST",
            body: JSON.stringify({ ...item, quantity: 1 }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!resp.ok) {
          throw new Error("Somthing went wrong");
        }
        let data = await resp.json();
        setRes((prev) => [...prev, { ...item, id: data.name, quantity: 1 }]);
      } catch (err) {
        console.log(err);
      }
    } else {
      let cpyArr = [...res];
      cpyArr[findIndex] = {
        ...cpyArr[findIndex],
        quantity: cpyArr[findIndex].quantity + 1,
      };
      setRes(cpyArr);
      try {
        let resp = await fetch(
          `https://movie-project-28d8c-default-rtdb.firebaseio.com/cart/${cpyArr[findIndex].id}.json`,
          {
            method: "PUT",
            body: JSON.stringify(cpyArr[findIndex]),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!resp.ok) {
          throw new Error("Put Error");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };
  useEffect(() => {
    let getData = async () => {
      let response = await fetch(
        "https://movie-project-28d8c-default-rtdb.firebaseio.com/cart.json"
      );
      let data = await response.json();
      let localD = [];
      let totalAmounts = 0;
      for (let key in data) {
        localD.push({
          id: key,
          ...data[key],
        });
        totalAmounts += data[key].price * data[key].quantity;
      }
      setRes(localD);

      setTotalAmount(totalAmounts);
    };
    getData();
  }, []);

  const reduceItemHandler = async (item) => {
    let findIndex = res.findIndex((val) => val.albumName === item.albumName);
    let cpyArr = [...res];
    let numberofQuantity = cpyArr[findIndex].quantity;
    setTotalAmount((prevTotal) => prevTotal - item.price);
    if (numberofQuantity === 1) {
      try {
        let output = res.filter((items) => items.albumName !== item.albumName);
        setRes(output);
        let response = await fetch(
          `https://movie-project-28d8c-default-rtdb.firebaseio.com/cart/${cpyArr[findIndex].id}.json`,
          {
            method: "DELETE",
          }
        );
        if (!response.ok) {
          throw new Error("Delete 1 Error");
        }
      } catch (err) {
        console.log(err);
      }
    } else {
      cpyArr[findIndex] = {
        ...cpyArr[findIndex],
        quantity: cpyArr[findIndex].quantity - 1,
      };
      setRes(cpyArr);
      try {
        let response = await fetch(
          `https://movie-project-28d8c-default-rtdb.firebaseio.com/cart/${cpyArr[findIndex].id}.json`,
          {
            method: "PUT",
            body: JSON.stringify(cpyArr[findIndex]),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Delete multiple error");
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  const context = {
    items: res,
    totalAmount: totalAmount,
    addItem: addItemHandler,
    reduceItem: reduceItemHandler,
  };
  return <Context.Provider value={context}>{props.children}</Context.Provider>;
}
