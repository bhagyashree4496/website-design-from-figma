import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Apple from "./Images/Apple.png";
import Playstore from "./Images/Playstore.png";

export default function Appsection() {
  return (
    <div>
      <Box sx={{ textAlign: "center", padding: "20px " }}>
        <Typography
          sx={{
            fontFamily: "Raleway",
            fontWeight: 900,
            fontSize: "60px",
            color: "#023047",
          }}
        >
          Get our App
        </Typography>
        <Typography
          sx={{
            fontFamily: "Poppins",
            fontWeight: 400,
            fontSize: "16px",
            color: "#023047",
          }}
        >
          You can use our App for better experience on smartphones
        </Typography>
        <Stack
          direction="row"
          spacing={5}
          sx={{ justifyContent: "center", padding: "20px" }}
        >
          <Typography
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "5px 25px 5px 25px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src={Playstore}
              alt="Appstore"
              style={{ padding: "5px" }}
            ></img>
            Google Play
          </Typography>
          <Typography
            sx={{
              backgroundColor: "#000",
              color: "#fff",
              padding: "5px 25px 5px 25px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img src={Apple} alt="Appstore" style={{ padding: "5px" }}></img>
            App Store
          </Typography>
        </Stack>
      </Box>
    </div>
  );
}
