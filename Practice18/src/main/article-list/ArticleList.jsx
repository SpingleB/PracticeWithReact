import Article from './some-article/Article'

const ArticleList = (props) => {
    const {  } = props
    return (
      <section className="article-list" aria-label="Articles">
        <Article
          img="/src/assets/images/image-retro-pcs.jpg"
          num="01"
          title="Reviving Retro PCs"
          pContent="What happens when old PCs are given modern upgrades?"
        />
        <Article
          img="/src/assets/images/image-top-laptops.jpg"
          num="02"
          title="Top 10 Laptops of 2022"
          pContent="Our best picks for various needs and budgets."
        />
        <Article
          img="/src/assets/images/image-gaming-growth.jpg"
          num="03"
          title="The Growth of Gaming"
          pContent="How the pandemic has sparked fresh opportunities."
        />
      </section>
    );
}

export default ArticleList; 