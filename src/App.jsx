import styles from "./App.module.css";
import BtnStyle from "./BtnStyle.module.css";
import Displays from "./components/Displays";
import Button from "./components/Button";
import "./index.css";
import { useState } from "react";
function App() {
  const [calVal, setCalVal] = useState("");
  const onClickButton = (buttonText) => {
    if (buttonText === "C") {
      setCalVal("");
    } else if (buttonText === "=") {
      const result = eval(calVal);
      setCalVal(result);
    } else {
      const newDisplayValue = calVal + buttonText;
      setCalVal(newDisplayValue);
    }
  };

  return (
    <div className={styles.calculator}>
      <Displays displayCalVal={calVal}></Displays>
      <div className={BtnStyle.BtnContainer}>
        <Button onClickButton={onClickButton}></Button>
      </div>
    </div>
  );
}

export default App;
