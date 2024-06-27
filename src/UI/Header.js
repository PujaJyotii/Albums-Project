import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.header}>
      <h1>Get Yourself Good Music</h1>
      <button>Your Cart</button>
    </div>
  );
};

export default Header;
