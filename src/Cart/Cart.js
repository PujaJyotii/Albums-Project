import { useContext } from "react";
import Context from "../Context/CreateContext";
import classes from "./Cart.module.css";

const Cart = (props) => {
  let ctx = useContext(Context);

  let totalAmount = ctx.totalAmount.toFixed(2);
  const increaseHandler = (item) => {
    ctx.addItem(item);
  };

  const decreaseHandler = (item) => {
    ctx.reduceItem(item);
  };
  return (
    <div className={classes.container}>
      <h1>Your Cart</h1>
      <ul>
        {ctx.items.map((item) => (
          <li key={item.albumName}>
            <div className={classes.newChanges}>
              <img src={item.photo} alt="item" />
              <div className={classes.details}>
                <h3>{item.albumName}</h3>
                <h4>{item.singer}</h4>
                <h5>Price:${item.price}</h5>
              </div>
            </div>
            <div>
              <span
                className={classes.increase}
                onClick={() => increaseHandler(item)}
              >
                +
              </span>
              <span className={classes.quantity}>x{item.quantity}</span>
              <span
                className={classes.decrease}
                onClick={() => decreaseHandler(item)}
              >
                -
              </span>
            </div>
          </li>
        ))}
      </ul>
      <div className={classes.footer}>
        <div className={classes.totalAmount}>Total Amount:${totalAmount}</div>
        <div className={classes.msg}>
          <h2 className={classes.army}>Borahea ARMY</h2>
          <div className={classes.btn}>
            <button onClick={props.onClose} className={classes.btn1}>
              Close
            </button>
            <button className={classes.btn2}>Purchase</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
