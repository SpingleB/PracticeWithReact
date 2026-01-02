const MobileMenu = (props) => {
    const { onClick, activeClass } = props; 
    return (
      <div className={`${activeClass} mobile-menu-div`}>
        <svg
          onClick={onClick}
          width="14"
          height="15"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
            fill="#69707D"
            fillRule="evenodd"
          />
        </svg>
        <ul className="mobile-menu">
          <li className="mobile-menu-item">Collections</li>
          <li className="mobile-menu-item">Men</li>
          <li className="mobile-menu-item">Women</li>
          <li className="mobile-menu-item">About</li>
          <li className="mobile-menu-item">Contact</li>
        </ul>
      </div>
    );
}

export default MobileMenu;