import CalculationBlock from './components/calculation-block/CalculationBlock'
import ResultBlock from './components/results-block/ResultsBlock';
import Tips from './components/tips/Tips';
import LimitationsOfBMI from './components/limitations-of-BMI/LimitationsOfBMI';
function App() {

  return (
    <>
      <div className="gradient-background"></div>
      <CalculationBlock />
      <ResultBlock/>
      <Tips />
      <LimitationsOfBMI />
    </>
  );
}

export default App
