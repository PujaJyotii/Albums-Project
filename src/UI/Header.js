import classes from "./Header.module.css";

const Header = (props) => {
  return (
    <div className={classes.header}>
      <h1>Get Yourself Good Music</h1>
      <button onClick={props.handler}>Your Cart</button>
    </div>
  );
};

export default Header;
