import React from "react";
import { SVGS } from "../../assets/svgs";

const Footer = () => {
  return (
    <footer className="bg-primary text-secondary border-t-2 border-gray-300 footer p-10 text-primary text-neutral-content">
      <aside>
        {SVGS.HashLogo}
        <p>
          Muslim Toolkit Ltd.
          <br />
          Providing reliable tech solutions since 2019
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
