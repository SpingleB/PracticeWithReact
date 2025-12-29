import ArticleContainer from './article/ArticleContainer';
import FeaturedArticles from "./featured-articles/FeaturedArticles";
import ArticleList from './article-list/ArticleList'
const MainBlock = () => {
    return (
      <>
        <ArticleContainer
          title="The Bright Future of Web 3.0?"
          info="We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?"
        />
        <FeaturedArticles />
        <ArticleList />
      </>
    );
}

export default MainBlock;