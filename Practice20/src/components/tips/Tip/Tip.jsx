const Tip = ( props ) => {
    const { className, title, content, img } = props
    return (
      <div className={className}>
          <img src={img} alt="Image" />
          <h2 className="inter-preset-4-semiBold">{title}</h2>
          <p className="inter-preset-6-regular">{content}</p>
      </div>
    );
}

export default Tip;