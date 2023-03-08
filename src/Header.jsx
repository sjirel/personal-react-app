function Header() {
  return (
    <header id="header">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <a href="/" className="logo">
          {" "}
          surendra<span>b</span>{" "}
        </a>
        <nav className="primary-nav">
          <ul className="menu">
            <li>
              <a
                target="_blank"
                href="https://www.upwork.com/freelancers/~0167e631f8f7a9ef23"
              >
                upwork
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/surendra-budhathoki-9163444b/"
              >
                linkedin
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
