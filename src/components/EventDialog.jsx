import "./EventDialog.css";

import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

function EventDialog(props) {
  const [open, setOpen] = useState(true);

  const handleClose = () => {
    setOpen(false);
    props.onClose();
  };

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm" style={{ backgroundImage: "url('paper-texture.jpg')", backgroundSize: "cover", backgroundPosition: "center" }}>
      <DialogTitle>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          {props.event.club.name}
          <IconButton
            edge="end"
            color="inherit"
            onClick={handleClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </div>
      </DialogTitle>
      <DialogContent style={{ display: "flex", flexDirection: "column" }}>
        <div className="event-details-complete">
          <h2 className="event-name">{props.event.name}</h2>
          <p className="event-description">
            {props.event.description.split("\n").map((line) => {
              return (
                <>
                  {line}
                  <br />
                </>
              );
            })}
          </p>
          <div
            className="event-details"
            style={{
              color: "black",
            }}
          >
            <p>📍 Venue: {props.event.venue}</p>
            <p>⌚ Timings: {props.event.timings}</p>
            <p className="event-type">{props.event.type}</p>
          </div>
          <ol className="event-club-obs">
            {props.event.club.obs.map((ob, index) => {
              return (
                <li key={index}>
                  <a href={"tel:" + ob.phone} target="_blank">
                    {ob.name}
                  </a>{" "}
                  [{ob.registration_no}] - {ob.designation}
                </li>
              );
            })}
          </ol>
          {props.event.registration_link ? (
            <button
              className="register-btn"
              onClick={() => {
                window.open(props.event.registration_link, "_blank");
              }}
            >
              Register Now
            </button>
          ) : null}
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default EventDialog;
