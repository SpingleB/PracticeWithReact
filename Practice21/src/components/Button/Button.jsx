import styles from "./Button.module.scss";

const Button = (props) => {
    const { children, text, className, isdisabled, onClick } = props
    return (
      <>
        <button className={className} disabled={isdisabled} onClick={onClick}>
          {children}
          <span className="libre-baskerville-preset-7-bold-desktop">
            {text}
          </span>
        </button>
      </>
    );
}

export default Button;