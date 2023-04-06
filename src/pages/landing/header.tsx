import React from "react";
import { Box, Typography } from "@mui/material";

type Props = {};

const Header = ({}: Props) => {
  return (
    <Box
      sx={{
        height: "100px",
        // backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyItems: "center",
        alignItems: "center",
        zIndex: 1,
      }}
    >
      <Box sx={headerStyles.headerBox}>
        <Typography variant={"h4"}>RSVP</Typography>
      </Box>
      <Box sx={headerStyles.headerBox}>
        <Typography variant={"h3"}>Grace & Taylor</Typography>
      </Box>
      <Box sx={headerStyles.headerBox}>
        <Typography variant={"h4"}>Photos</Typography>
      </Box>
    </Box>
  );
};

const headerStyles = {
  headerBox: { flex: 1, display: "flex", justifyContent: "center" },
};

export default Header;
