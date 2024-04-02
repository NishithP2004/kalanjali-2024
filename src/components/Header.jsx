import "./Header.css";

function Header() {
  return (
    <header className="glass">
      <nav>
        <img
          src="misc-logo.png"
          className="logo"
          alt="Microsoft Ignite Students Club"
        />
        <h3
          style={{
            fontFamily: '"Samarkan", "Berkshire Swash", serif',
          }}
        >
          Kalanjali
        </h3>
      </nav>
    </header>
  );
}

export default Header;
