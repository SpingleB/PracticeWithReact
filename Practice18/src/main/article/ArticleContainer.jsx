import Button from "/src/button/Button.jsx";

const ArticleContainer = (props) => {
    const { title, info } = props
    return (
      <section aria-labelledby="title-in-article" className="article-container">
        <picture>
          <source
            srcSet="/src/assets/images/image-web-3-mobile.jpg"
            media="(max-width: 600px)"
          />
          <source
            srcSet="/src/assets/images/image-web-3-desktop.jpg"
            media="(min-width: 601px)"
          />
          <img src="/src/assets/images/image-web-3-desktop.jpg" alt="Image" />
        </picture>
        <h1 id="title-in-article" className="inter-preset-2-extrabold">
          {title}
        </h1>
        <p className="inter-preset-6-regular">{info}</p>
        <Button content="READ MORE" className="button-read-more" />
      </section>
    );
}

export default ArticleContainer;