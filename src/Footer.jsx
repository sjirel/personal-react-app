function Footer() {
  return (
    <footer id="footer">
      <div className="container-fluid">
        <div className="col-12 d-flex justify-content-end">
          <p className="copyright">
            © {(new Date().getFullYear())}. Surendra Budhathoki. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
