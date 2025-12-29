import Featured from './featured/Featured'
const FeaturedArticles = () => {
    return (
      <section
        className="featured-articles"
        aria-labelledby="featured-articles-title"
      >
        <h1 id="featured-articles-title" className="inter-preset-3-bold">
          New
        </h1>
        <Featured
          className="featured"
          titleContent="Hydrogen VS Electric Cars"
          pContent="Will hydrogen-fueled cars ever catch up to EVs?"
        />
        <hr />
        <Featured
          className="featured"
          titleContent="The Downsides of AI Artistry"
          pContent="What are the possible adverse effects of on-demand AI image generation?"
        />
        <hr />
        <Featured
          className="featured"
          titleContent="Is VC Funding Drying Up?"
          pContent="Private funding by VC firms is down 50% YOY. We take a look at what that means."
        />
      </section>
    );
}

export default FeaturedArticles;