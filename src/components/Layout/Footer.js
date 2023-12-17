import React from "react";
import { SVGS } from "../../assets/svgs";

const Footer = () => {
  return (
    <footer className="footer p-10 bg-neutral text-neutral-content">
      <aside>
        {SVGS.HashLogo}
        <p>
          ACME Industries Ltd.
          <br />
          Providing reliable tech since 1992
        </p>
      </aside>
      <nav>
        <header className="footer-title">Social</header>
        <div className="grid grid-flow-col gap-4">
          <a href="Twitter">{SVGS.Twitter}</a>
          <a href="Youtube">{SVGS.Youtube}</a>
          <a href="Facebook">{SVGS.Facebook}</a>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
