import { Monogram } from "../cinematic/art/Monogram";
import "./footer.css";

export function SiteFooter() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <a href="#top" className="site-footer__brand" aria-label="D-Lay Prestige, back to top">
          <Monogram className="site-footer__mark" framed={false} />
          <span>D-Lay Prestige</span>
        </a>

        <nav className="site-footer__links" aria-label="Footer">
          <a href="#solutions">Solutions</a>
          <a href="#process">Process</a>
          <a href="#results">Results</a>
          <a href="#stories">About</a>
          <a href="mailto:daironlay12@gmail.com">Contact</a>
        </nav>

        <p className="site-footer__legal">
          © {year} D-Lay Prestige Solutions. Results vary by client and are
          not guaranteed.
        </p>
      </div>
    </footer>
  );
}
