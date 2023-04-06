import React, { useState } from "react";
import { Typography } from "@mui/material"; // we need this to make JSX compile

type Props = {};

const Countdown = ({}: Props) => {
  const weddingDate = new Date("2024-05-18T00:00:00.000-05:00");
  let [dtRemaining, setRemaining] = useState(
    weddingDate.getTime() - Date.now()
  );

  setInterval(() => {
    setRemaining(weddingDate.getTime() - Date.now());
  }, 1000);

  const days = Math.floor(dtRemaining / (1000 * 3600 * 24));
  dtRemaining -= days * (1000 * 3600 * 24);

  const hours = Math.floor(dtRemaining / (1000 * 3600));
  dtRemaining -= hours * 1000 * 3600;

  const minutes = Math.floor(dtRemaining / (1000 * 60));
  dtRemaining -= minutes * 1000 * 60;

  const seconds = Math.floor(dtRemaining / 1000);

  return (
    <div>
      <Typography variant={"h6"} fontFamily={"fantasy"}>
        {days} Days, {hours} Hours, {minutes} Minutes, {seconds} Seconds
      </Typography>
    </div>
  );
};

export default Countdown;
