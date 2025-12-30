import { useState } from 'react';
import Header from '../header/Header.jsx'
import MainBlock from '../main/MainBlock'
import Menu from '../menu/Menu'
const Container = () => {

  const [ isShown, setIsShown ] = useState(false)
  
    return (
      <div className="container">
        <Header onClick={setIsShown} />
        {isShown && <Menu onClick={() => setIsShown(false)} />}
        <MainBlock />
      </div>
    );
}

export default Container;