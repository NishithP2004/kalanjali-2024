import "./Footer.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";

function Footer() {
  return (
    <footer>
      <div className="footer-top">
        <img
          src="amrita_purplepx.png"
          alt="Amrita Vishwa Vidyapeetham"
          className="amrita-logo"
          onClick={() => window.open("https://amrita.edu", "_blank")}
        />
      </div>
      <div className="footer-bottom">
        <p className="footer-text">
          &copy; Made with 💖 by Microsoft Ignite Students Club & Team Kalanjali
        </p>
        <ul className="social-links">
          <li>
            <a href="https://www.instagram.com/kalanjali" target="_blank">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="mailto:contact@amrita.edu" target="_blank">
              <AlternateEmailIcon />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
