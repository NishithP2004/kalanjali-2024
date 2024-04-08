import "./Header.css";

function Header() {
  return (
    <header className="glass">
      <nav>
        <img
          src="misc-logo.png"
          className="logo"
          alt="Microsoft Ignite Students Club"
          onClick={() => {
            window.open("https://linktr.ee/ignites_students_club", "_blank");
          }}
        />
        {/* <h3
          style={{
            fontFamily: '"Samarkan", "Berkshire Swash", serif',
          }}
        >
          Kalanjali
        </h3> */}
        <img
          src="Kalanjali24_logo.png"
          className="logo"
          alt="Kalanjali 24"
          onClick={() => {
            window.open("#", "_self");
          }}
        />
      </nav>
    </header>
  );
}

export default Header;
