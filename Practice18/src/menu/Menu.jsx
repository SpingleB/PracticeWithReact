const Menu = (props ) => {
  const { onClick } = props 
    return (
      <nav className="menu-nav">
        <div className="btn-div">
          <svg
            onClick={onClick}
            width="32"
            height="31"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="#00001A" fillRule="evenodd">
              <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
              <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
            </g>
          </svg>
        </div>
        <ul className="manu-nav-list">
          <li className="manu-list-item mobile-menu-font">Home</li>
          <li className="manu-list-item mobile-menu-font">New</li>
          <li className="manu-list-item mobile-menu-font">Popular</li>
          <li className="manu-list-item mobile-menu-font">Trending</li>
          <li className="manu-list-item mobile-menu-font">Categories</li>
        </ul>
      </nav>
    );
}
export default Menu;