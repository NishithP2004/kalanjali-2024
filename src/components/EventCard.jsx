import "./EventCard.css";
import React, { useState } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import EventDialog from "./EventDialog";

function EventCard(props) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const openPopup = () => {
    setDialogOpen(true);
  };

  const closePopup = () => {
    setDialogOpen(false);
  };

  return (
    <div className="event-card glass">
      <img
        src={props.event.club.logo}
        alt={props.event.club.name}
        className="club-logo"
      />
      <div className="column">
        <marquee scrollamount="3" direction="left" loop="1">
          <h3 className="event-name">
            <a href={props.event.registration_link} target="_blank">
              {props.event.name}
            </a>
          </h3>
        </marquee>
        <div className="event-details">
          <p>📍{props.event.venue}</p>
          <p>⌚{props.event.timings}</p>
          <p className="event-type">{props.event.type}</p>
        </div>
      </div>
      <button
        className="event-btn"
        onClick={() => {
          openPopup();
        }}
      >
        <VisibilityIcon />
      </button>
      {dialogOpen && <EventDialog event={props.event} onClose={closePopup} />}
    </div>
  );
}

export default EventCard;
