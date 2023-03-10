function Footer() {
  let portraitPaths = document.querySelectorAll(".svg-animate .st0");
  function portraitDraw() {
    portraitPaths.forEach((path) => {
      let pathlength = path.getTotalLength();
      path.style.strokeDasharray = pathlength;
      path.style.strokeDashoffset = pathlength;
      path.style.strokeDashoffset = pathlength;
    });
  }

  portraitDraw();
  return (
    <footer id="footer">
      <div className="container-fluid">
        <div className="col-12 d-flex justify-content-end">
          <p className="copyright">
            © 2023. Surendra Budhathoki. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
