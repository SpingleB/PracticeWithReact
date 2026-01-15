import TopInfo from "./top-info/TopInfo";
import CalculationContainer from "./calculation-container/CalculationContainer";
import styles from "./CalculationBlock.module.scss";

const CalculationBlock = () => {
    return (
      <div className={styles.calculationBlock}>
        <TopInfo />
        <CalculationContainer />
      </div>
    );
}

export default CalculationBlock;