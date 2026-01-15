const LimitationTip = (props) => {
  const { className, title, content, img, id } = props;
  return (
    <div className={className} id={id} >
        <div>
            <img src={img} alt="Image" />
            <h2 className="inter-preset-4-semiBold">{title}</h2>
        </div>
      <p className="inter-preset-6-regular">{content}</p>
    </div>
  );
};

export default LimitationTip;
