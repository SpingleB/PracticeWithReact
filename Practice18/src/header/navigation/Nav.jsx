const Nav = (props) => {
    const {  } = props
    return (
      <nav className="navigation">
        <ul className="nav-list">
          <li className="list-item inter-preset-6-regular">Home</li>
          <li className="list-item inter-preset-6-regular">New</li>
          <li className="list-item inter-preset-6-regular">Popular</li>
          <li className="list-item inter-preset-6-regular">Trending</li>
          <li className="list-item inter-preset-6-regular">Categories</li>
        </ul>
      </nav>
    );
}

export default Nav;