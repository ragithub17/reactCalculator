import styles from "../App.module.css";
const Displays = ({ displayCalVal }) => {
  return (
    <input className={styles.disp} type="text" value={displayCalVal} readOnly />
  );
};

export default Displays;
