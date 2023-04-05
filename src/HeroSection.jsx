import { Box, Button, Grid, Link, Paper, Typography } from "@mui/material";
import React from "react";
import hero from "./Images/hero.png";
import { Create, Star } from "@mui/icons-material";

export default function HeroSection() {
  return (
    <div>
      <Box
        sx={{
          background: "linear-gradient(180deg, #6F7DFB 0%, #26308C 100%)",
          padding: "40px 60px 0 60px ",
        }}
      >
        <Box
          sx={{
            display: "flex",
            position: "sticky",
            top: 0,
            zIndex: 20,
          }}
        >
          <Typography
            variant="h6"
            sx={{
              fontWeight: 900,
              fontSize: "40px",
              flex: 1,
              fontFamily: "Raleway",
              color: "#fff",
            }}
          >
            GD.
          </Typography>
          <Box
            sx={{
              flex: 3,
              justifyContent: "space-between",
              alignItems: "center",
              display: { xs: "none", sm: "flex" },
            }}
          >
            <Link
              href="#"
              color="#fff"
              underline="none"
              sx={{
                fontWeight: "700",
                fontSize: "16px",
                fontFamily: "Poppins",
              }}
            >
              About
            </Link>
            <Link
              href="#"
              color="#fff"
              underline="none"
              sx={{ fontWeight: "700", fontSize: "16px" }}
            >
              Services
            </Link>
            <Link
              href="#"
              color="#fff"
              underline="none"
              sx={{ fontWeight: "700", fontSize: "16px" }}
            >
              Our Work
            </Link>
            <Link
              href="#"
              sx={{
                color: "#fff",
                textDecoration: "none",
                fontSize: "16px",
                padding: " 16px 32px",
                background: "#023047",
                borderRadius: " 24px",
                fontStyle: "none",
                "&:hover": { backgroundColor: "#012132" },
              }}
            >
              Enroll Now
            </Link>
          </Box>
        </Box>
        <Grid container sx={{ marginTop: "40px" }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              marginTop: "25px",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Raleway",
                fontWeight: 900,
                fontSize: "50px",
                color: "#fff",
              }}
            >
              Learn the art of <br></br> Game Dev
            </Typography>
            <Typography
              sx={{
                marginTop: "5px",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                color: "#FFFFFF",
              }}
            >
              This is a comprehensive course on Game Development.
              <br /> You will learn everything from generating an idea to <br />
              publishing your games to different platforms.
            </Typography>
            <Button
              variant="outlined"
              sx={{
                color: "#fff",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: " 16px",
                background: "#DA722C",
                borderRadius: " 24px",
                marginTop: "70px",
              }}
              startIcon={<Create sx={{ color: "#fff" }}></Create>}
            >
              Enrol now
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{
              display: "flex",
              position: "relative",
              justifyContent: "flex-end",
            }}
          >
            <img
              src={hero}
              alt="hero"
              style={
                {
                  // width: "400px",
                  // height: "500px",
                }
              }
            ></img>
            <Paper
              elevation={4}
              sx={{
                padding: "5px 10px",
                backgroundColor: "#fff",
                borderRadius: "25px",
                position: "absolute",
                top: "150px",
                left: "15px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{ fontWeight: 700, fontSize: "36px", color: "#023047" }}
              >
                32k
              </Typography>
              <Typography
                sx={{
                  fontWeight: 500,
                  fontSize: " 16px",
                  color: "#023047",
                  fontFamily: "Poppins",
                }}
              >
                Students Enrolled
              </Typography>
            </Paper>
            <Paper
              elevation={4}
              sx={{
                padding: "5px 30px",
                backgroundColor: "#fff",
                borderRadius: "25px",
                position: "absolute",
                top: "300px",
                left: "0",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography
                sx={{
                  fontWeight: 700,
                  fontSize: "36px",
                  color: "#023047",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                4.7 <Star sx={{ color: "#ffce31", fontSize: "36px" }}></Star>
              </Typography>
              <Typography
                sx={{ fontWeight: 500, fontSize: " 16px", color: "#023047" }}
              >
                Overall Rating
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}
