import { Avatar, Box, Grid, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import courseimg1 from "./Images/coursesimg1.png";
import courseimg2 from "./Images/coursesimg2.png";
import { AccessTimeFilled } from "@mui/icons-material";
export default function Courses() {
  return (
    <div>
      <Box
        sx={{
          marginTop: "150px",
          background: "linear-gradient(180deg, #6F7DFB 0%, #26308C 100%)",
          padding: "30px",
        }}
      >
        <Typography
          sx={{
            fontFamily: "Raleway",
            fontWeight: 900,
            fontSize: "60px",
            textAlign: "center",
            color: "#FFFFFF",
          }}
        >
          Our Courses
        </Typography>
        <Grid
          container
          spacing={5}
          justifyContent="center"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Grid item xs={12} lg={6}>
            <Paper
              sx={{
                borderRadius: "25px",
                padding: "0 15px 3px 15px",
                display: "inline-block",
              }}
            >
              <img src={courseimg2} alt="img"></img>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Raleway",
                    fontWeight: 900,
                    fontSize: "30px",
                    color: "#023047",
                  }}
                >
                  Game Design Essentials
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Raleway",
                    fontWeight: 900,
                    fontSize: "16px",
                    color: "#023047",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AccessTimeFilled></AccessTimeFilled> 8 HRS
                </Typography>
              </Box>
            </Paper>
          </Grid>
          <Grid item xs={12} lg={6}>
            <Paper
              sx={{
                borderRadius: "25px",
                padding: "0 15px 3px 15px",
                display: "inline-block",
              }}
            >
              <img src={courseimg1} alt="img"></img>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "Raleway",
                    fontWeight: 900,
                    fontSize: "30px",
                    color: "#023047",
                  }}
                >
                  Unity Game Engine <br></br>Fundamentals
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Raleway",
                    fontWeight: 900,
                    fontSize: "16px",
                    color: "#023047",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AccessTimeFilled></AccessTimeFilled> 8 HRS
                </Typography>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
