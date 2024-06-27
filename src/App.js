import React, { useState } from "react";
import Header from "./UI/Header";
import FormData from "./Form/Data";
import ModalOverlay from "./UI/ModalOverlay";

function App() {
  const [showCart, setShowCart] = useState(false);
  const closeHandler = () => {
    setShowCart(false);
  };

  const showCartHandler = () => {
    setShowCart(true);
  };
  return (
    <div>
      {showCart && <ModalOverlay onClose={closeHandler} />}
      <Header handler={showCartHandler} />
      <FormData />
    </div>
  );
}

export default App;
