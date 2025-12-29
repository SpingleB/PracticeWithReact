const Featured = (props) => {
    const { titleContent, pContent, className } = props
    return (
      <div className={className}>
        <h2 className="inter-preset-4-extrabold">{titleContent}</h2>
        <p className="inter-preset-6-regular">{pContent}</p>
      </div>
    );
}

export default Featured;