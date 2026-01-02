const Button = ( props ) => {
    const { className, content, children } = props
    return (
      <>
        <button className={`${className} kumbh-sans-preset-3-bold`}>
          {children}
          {content}
        </button>
      </>
    );
}

export default Button;