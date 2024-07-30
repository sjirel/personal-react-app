function Header() {
  return (
    <header id="header">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a href="/" className="logo">
          <span>SB</span>
        </a>
        <nav className="primary-nav">
          <ul className="menu">
            <li>
              <a
                target="_blank"
                href="https://www.upwork.com/freelancers/surendrabudhathoki"
              >
                Upwork
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/surendra-budhathoki-9163444b/"
              >
                Linkedin
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
