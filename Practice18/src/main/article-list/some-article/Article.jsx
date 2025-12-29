const Article = (props) => {
    const { img, num, title, pContent } = props
    return (
      <div className="article">
        <img src={img} alt="Image" />
        <div className="article-info">
          <h1 className={`inter-preset-3-bold`}>{num}</h1>
          <h2 className={`inter-preset-5-extrabold`}>{title}</h2>
          <p className={`inter-preset-6-regular`}>{pContent}</p>
        </div>
      </div>
    );
}

export default Article;