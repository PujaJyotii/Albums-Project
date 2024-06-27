import { useContext } from "react";
import classes from "./Header.module.css";
import Context from "../Context/CreateContext";

const Header = (props) => {
  let ctx = useContext(Context);
  let totalquantity = ctx.items.reduce((totalAmount, item) => {
    return totalAmount + +item.quantity;
  }, 0);
  return (
    <div className={classes.header}>
      <h1>Get Yourself Good Music</h1>
      <button onClick={props.handler}>Your Cart({totalquantity})</button>
    </div>
  );
};

export default Header;
