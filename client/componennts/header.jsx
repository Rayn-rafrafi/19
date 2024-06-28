const Header = () => {
    return (<>
    <header className="header" id="home" data-header>
    <div className="container">

      <a href="#" className="logo">
        <img src="../images/logo.png" width="132" height="27" alt="shoppie home"/>
      </a>

      <nav className="navbar" data-navbar>
        <ul className="navbar-list">

          <li>
            <a href="#homet" className="navbar-link">Home</a>
          </li>

          <li>
            <a href="#arrt" className="navbar-link">NEW ARRIVALS</a>
          </li>

          <li>
            <a href="#pro" className="navbar-link">PRODUCTS</a>
          </li>

          <li>
            <a href="#promo" className="navbar-link">PROMO</a>
          </li>
          <li>
            <a href="#ou-product" className="navbar-link">Our Product</a>
          </li>
          <li>
            <a href="#blog" className="navbar-link">BLOG</a>
          </li>

        </ul>

        <button className="cart-btn">
          <ion-icon name="bag" aria-hidden="true"></ion-icon>

          <span className="span">Cart (02)</span>
        </button>

        <a href="#" className="btn">Contact Us</a>
      </nav>

      <button className="nav-open-btn" aria-label="toggle menu" data-nav-toggler>
        <ion-icon name="menu-outline" aria-hidden="true"></ion-icon>
      </button>

    </div>
  </header>

    
    </>);
}
 
export default Header;