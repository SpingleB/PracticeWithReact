const MenuButton = (props) => {
    const {} = props

    return (
      <>
        <svg className="menuButton" width="40" height="17" xmlns="http://www.w3.org/2000/svg">
          <g fill="#00001A" fillRule="evenodd">
            <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
            <path d="M0 0h40v3H0z" />
          </g>
        </svg>
      </>
    );
}

export default MenuButton;