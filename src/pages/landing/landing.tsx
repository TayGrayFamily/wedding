import React from "react";
import Countdown from "../countdown";
import { Box, Typography } from "@mui/material";
import Header from "./header"; // we need this to make JSX compile

type Props = {};
const Landing = ({}: Props) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        backgroundColor: "green",
        flex: 1,
      }}
    >
      <Header />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          position: "absolute",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          backgroundImage: "url(/img/gracetaylor.jpg)",
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <Typography
          variant={"h1"}
          // fontWeight={"bold"}
        >
          We're getting married!
        </Typography>
        <Countdown />
      </Box>
    </Box>
  );
};

export default Landing;
