import RadioInput from "./radio/RadioInput";
import Input from "./input/Input";
import ResultContainer from "./result-container/ResultContainer";
import styles from "./CalculationContainer.module.scss";
import { useState } from "react";
import { memo } from "react";

const CalculationContainer = () => {
const [height, setHeight] = useState(0)
const [weight, setWeight] = useState(0)
const [ft, setFt] = useState(0);
const [hIn, setHIn] = useState(0);
const [st, setSt] = useState(0);
const [lbs, setLbs] = useState(0);
const [typeOfCalc, setTypeOfCalc] = useState("")
let isImperial = typeOfCalc === 'imperial';
const characteristics = {
  metric: {
    height: {
      cm: 'cm',
    },
    weight: {
      kg: 'kg',
    },
  },
  imperial: {
    height: {
      ft: 'ft',
      in: 'in',
    },
    weight: {
      st: 'st',
      lbs: 'lbs',
    },
  }
}

function result(isImperial, height, weight, ft, hIn, st, lbs) {
  if (!isImperial) {
    if (height > 0 && weight > 0) {
      let metricalHeight = Number(height);
      let metricalWeight = Number(weight);

      return (metricalWeight / Math.pow(metricalHeight / 100, 2)).toFixed(1);
    }
  } else if (isImperial) {
    if (ft > 0 && hIn > 0 && st > 0 && lbs > 0) {

      let imperialHeight = Number(ft) * 12 + Number(hIn);
      let imperialWeight = Number(st) * 14 + Number(lbs);
     return((imperialWeight / Math.pow(imperialHeight / 100, 2) * 703) / 10000).toFixed(1);
    }
}
};

function minWeight(isImperial, height, hIn, ft) {
  if (!isImperial) {
    let metricalHeight = Number(height);

    return `${(18.5 * Math.pow(metricalHeight / 100, 2)).toFixed(1)}kgs`;
  } else if ( isImperial ) {
    let imperialHeight = Number(ft) * 12 + Number(hIn);
    let imperialResult = 18.5 * Math.pow(imperialHeight, 2) / 703;

    return `${Math.floor(imperialResult / 14).toFixed(0)}st ${(imperialResult % 14).toFixed(0)}lbs`;
  }
}

function maxWieght(isImperial, height, hIn, ft) {
  if (!isImperial) {
    let metricalHeight = Number(height);

    return `${(24.9 * Math.pow(metricalHeight / 100, 2)).toFixed(1)}kgs`;
  } else if (isImperial) {
    let imperialHeight = Number(ft) * 12 + Number(hIn);
    let imperialResult = 24.9 * Math.pow(imperialHeight, 2) / 703;

    return `${Math.floor(imperialResult / 14).toFixed(0)}st ${(imperialResult % 14).toFixed(0)}lbs`;
  }
}

let BMIResult = (result(isImperial, height, weight, ft, hIn, st, lbs));
let BMIminWeight = minWeight(isImperial, height, hIn, ft);
let BMImaxWeight = maxWieght(isImperial, height, hIn, ft);

    return (
      <form
        className={styles.calculationForm}
        aria-labelledby={styles.calculateTitle}
      >
        <legend
          id={styles.calculateTitle}
          className={`inter-preset-4-semiBold`}
        >
          Enter your details below
        </legend>
        <div className={styles.choice}>
          <div id="choice1">
            <RadioInput
              value="metric"
              selected={typeOfCalc}
              id="Metric"
              name="choice"
              labelContent="Metric"
              onChange={(e) => {
                setTypeOfCalc(e.target.value);
              }}
            />
          </div>
          <div id="choice2">
            <RadioInput
              value="imperial"
              selected={typeOfCalc}
              onChange={(e) => {
                setTypeOfCalc(e.target.value);
              }}
              id="Imperial"
              name="choice"
              labelContent="Imperial"
            />
          </div>
        </div>
        <div className={styles.calcDiv}>
          <Input
            typeOfCalc={typeOfCalc}
            id="Height"
            labelContent="Height"
            type="number"
            onChange={(e) =>
              isImperial ? setFt(e.target.value) : setHeight(e.target.value)
            }
            onInput={(e) => setHIn(e.target.value)}
            characteristics={
              isImperial
                ? characteristics.imperial.height.ft
                : characteristics.metric.height.cm
            }
            additionalCharacteristics={
              isImperial ? characteristics.imperial.height.in : ``
            }
          />
          <Input
            typeOfCalc={typeOfCalc}
            id="Weight"
            labelContent="Weight"
            type="number"
            onChange={(e) =>
              isImperial ? setSt(e.target.value) : setWeight(e.target.value)
            }
            onInput={(e) => {
              setLbs(e.target.value);
            }}
            characteristics={
              isImperial
                ? characteristics.imperial.weight.st
                : characteristics.metric.weight.kg
            }
            additionalCharacteristics={
              isImperial ? characteristics.imperial.weight.lbs : ``
            }
          />
        </div>
        <ResultContainer
          minWieght={BMIminWeight}
          maxWieght={BMImaxWeight}
          result={BMIResult ? BMIResult : ``}
        />
      </form>
    );
}

export default memo(CalculationContainer);