import styles from "./RadioInput.module.scss"

const RadioInput = (props) => {
    const { id, name, labelContent, onChange, value} = props
  
    return (
      <fieldset className={styles.fieldset}>
        <input
          value={value}
          onChange={onChange}
          type="radio"
          name={name}
          id={id}
          className={styles.radio}
        />
        <label
          className={`inter-preset-6-semiBold ${styles.label}`}
          htmlFor={id}
        >
          {labelContent}
        </label>
      </fieldset>
    );
}

export default RadioInput;