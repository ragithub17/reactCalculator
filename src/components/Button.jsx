import BtnStyleCss from "../BtnStyle.module.css";

const Button = ({ onClickButton }) => {
  const BtnNames = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "=",
    "9",
    "0",
    ".",
  ];

  return (
    <>
      {BtnNames.map((names) => (
        <button
          key={Math.random()}
          className={BtnStyleCss.Btn}
          onClick={() => onClickButton(names)}
        >
          {names}
        </button>
      ))}
    </>
  );
};

export default Button;
