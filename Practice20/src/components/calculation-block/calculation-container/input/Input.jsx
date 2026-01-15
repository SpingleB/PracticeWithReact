import styles from './Input.module.scss'

const Input = (props) => {
    const { type, labelContent, id, characteristics, additionalCharacteristics, onChange, typeOfCalc, onInput } =
      props;
    return (
      <fieldset className={typeOfCalc === 'imperial' ? styles.gridVersion : styles.fieldset}>
        <label
          htmlFor={id}
          className={`${styles.label} inter-preset-7-regular`}
        >
          {labelContent}
        </label>
        <div className={styles.inputDiv}>
          <input
            onChange={onChange}
            type={type}
            id={id}
            className={`inter-preset-4-semiBold ${styles.input}`}
          />
          <span className={`${styles.calcType} inter-preset-4-semiBold`}>
            {characteristics}
          </span>
        </div>
        {typeOfCalc === "imperial" && (
          <div className={styles.inputDiv}>
            <input
              onInput={onInput}
              type={type}
              className={`inter-preset-4-semiBold ${styles.input}`}
              name={additionalCharacteristics}
            />
            <span className={`${styles.calcType} inter-preset-4-semiBold`}>
              {additionalCharacteristics}
            </span>
          </div>
        )}
      </fieldset>
    );
}

export default Input;