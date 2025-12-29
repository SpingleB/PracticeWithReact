const Button = (props) => {
    const { className, content } = props
    return (
      <>
        <button className={`${className} inter-preset-7-bold`}>
          {content}
        </button>
      </>
    );
}

export default Button;