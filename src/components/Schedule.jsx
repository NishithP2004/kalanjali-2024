import "./Schedule.css";
import EventCard from "./EventCard";
import Events from "../events.json";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function Schedule() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box
      sx={{ width: "100%", margin: "auto", maxWidth: "1000px" }}
      className="glass"
    >
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs value={value} onChange={handleChange}>
          <Tab label="19th April" index={0} style={{ color: "azure" }} />
          <Tab label="20th April" index={1} style={{ color: "azure" }} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <div className="schedule">
          {Events && Events.hasOwnProperty("19_4_24")
            ? Events["19_4_24"]
                .sort(
                  (ev1, ev2) => ev1.time.start * 1000 - ev2.time.start * 1000,
                )
                .map((event, index) => {
                  return <EventCard key={index} event={event} />;
                })
            : "No Events Found"}
        </div>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <div className="schedule">
          {Events && Events.hasOwnProperty("20_4_24")
            ? Events["20_4_24"]
                .sort(
                  (ev1, ev2) => ev1.time.start * 1000 - ev2.time.start * 1000,
                )
                .map((event, index) => {
                  return <EventCard key={index} event={event} />;
                })
            : "No Events Found"}
        </div>
      </CustomTabPanel>
    </Box>
  );
}

export default Schedule;
