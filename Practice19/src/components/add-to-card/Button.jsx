const Button = ( props ) => {
    const { className, content, children, onClick } = props
    return (
      <>
        <button
          onClick={onClick}
          className={`${className} kumbh-sans-preset-3-bold`}
        >
          {children}
          {content}
        </button>
      </>
    );
}

export default Button;