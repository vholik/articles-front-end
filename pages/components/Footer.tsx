import { FooterStyling } from "../style/style";
import Link from "next/link";
function Footer() {
  return (
    <FooterStyling>
      <div className="container-header">
        <div className="footer-inner">
          <div className="row">
            <h1 className="row-title">Navigation</h1>
            <Link href={"/login"}>
              <p>Login</p>
            </Link>
            <Link href={"/register"}>
              <p>Register</p>
            </Link>
            <Link href={"/createarticle"}>
              <p>Create an article</p>
            </Link>
          </div>
        </div>
      </div>
      <p className="rights">2022 ALL RIGHTS RESERVED</p>
    </FooterStyling>
  );
}

export default Footer;
