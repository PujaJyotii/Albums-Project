import Cart from "../Cart/Cart";
import Card from "./Card";
import classes from "./ModalOverlay.module.css";
import ReactDOM from "react-dom";
function Backdrop(props) {
  return <div className={classes.backdrop} onClick={props.onClose} />;
}

function Overlay(props) {
  return (
    <>
      <Card className={classes.overlay}>
        <Cart onClose={props.onClose} />
      </Card>
    </>
  );
}

function ModalOverlay(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Overlay onClose={props.onClose} />,
        document.getElementById("overlay-root")
      )}
    </>
  );
}

export default ModalOverlay;
