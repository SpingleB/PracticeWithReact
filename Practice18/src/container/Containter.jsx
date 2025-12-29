import Header from '../header/Header'
import MainBlock from '../main/MainBlock'
const Container = (props) => {
    
    return (
      <div className="container">
        <Header />
        <MainBlock/>
      </div>
    );
}

export default Container;