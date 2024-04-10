import "./Header.css";
import { useState, useRef } from "react";
import { Menu, MenuItem, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function Header({ scheduleRef, highlightsRef, postersRef }) {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event) => {
    setAnchorEl(null);
  };

  return (
    <header className="glass">
      <nav>
        <img
          src="Kalanjali24_logo.png"
          className="logo"
          alt="Kalanjali 24"
          onClick={() => {
            window.open("#", "_self");
          }}
        />
        <IconButton
          aria-controls="menu"
          aria-haspopup="true"
          onClick={handleClick}
        >
          <MenuIcon style={{ color: "azure" }} />
        </IconButton>
        <Menu
          id="menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          <MenuItem
            onClick={() => {
              handleClose();
              highlightsRef.current.scrollIntoView({ behavior: "smooth" });
            }}
            href="#highlights"
          >
            Highlights
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              scheduleRef.current.scrollIntoView({ behavior: "smooth" });
            }}
            href="#schedule"
          >
            Schedule
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose();
              postersRef.current.scrollIntoView({ behavior: "smooth" });
            }}
            href="#posters"
          >
            Posters
          </MenuItem>
          {/* <MenuItem onClick={() => {
              handleClose();
              contactRef.current.scrollIntoView({ behavior: "smooth" });
            }} href="#contact">
            Contact
          </MenuItem> */}
        </Menu>
      </nav>
    </header>
  );
}

export default Header;
