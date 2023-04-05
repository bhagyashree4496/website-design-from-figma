import {
  Avatar,
  Box,
  Button,
  Grid,
  Link,
  Paper,
  Typography,
} from "@mui/material";
import React from "react";
import testimonialImg1 from "./Images/TestimonialImage1.png";
import testimonialImg2 from "./Images/TestimonialImage2.png";

export default function Testimonial() {
  return (
    <div>
      <Grid
        container
        sx={{
          padding: "50px",
          backgroundColor: "#fff",

          display: "flex",
        }}
      >
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontFamily: "Raleway",
              fontWeight: 900,
              fontSize: "60px",
              color: "#023047",
            }}
          >
            What our students <br />
            say
          </Typography>
          <Typography
            sx={{
              fontFamily: "Poppins",
              fontWeight: 400,
              fontSize: "16px",
              color: "#023047",
              marginBottom: "50px",
            }}
          >
            All students get access to all the videos and also the source code
            of
            <br /> the projects.
            <br /> You will also have access to a private Discord channel where
            you can <br /> discuss your doubts.
          </Typography>
          <Link
            href="#"
            sx={{
              background: "#DA722C",
              borderRadius: "24px",
              fontFamily: "Poppins",
              fontWeight: 500,
              fontSize: "18px",
              color: "#FFFFFF",
              padding: "10px 20px 10px 20px",

              textDecoration: "none",
            }}
          >
            Learn More
          </Link>
        </Grid>
        <Grid item xs={12} md={6} sx={{ position: "relative" }}>
          <Box
            sx={{
              height: "400px",
              width: "30px",
              backgroundColor: "#032e44",
              borderRadius: "25px",

              position: "relative",
              left: "100px",
            }}
          ></Box>
          <Paper
            elevation={4}
            sx={{
              zIndex: "2",
              position: "absolute",
              top: "90px",
              left: "120px",
              borderRadius: "24px",
            }}
          >
            <Paper sx={{ backgroundColor: "#6F7DFB", borderRadius: "24px" }}>
              <Typography
                sx={{
                  padding: "10px",
                  fontFamily: "Raleway",
                  fontWeight: 900,
                  fontSize: "18px",
                  color: "#fff",
                  zIndex: -1,
                }}
              >
                This is a great course. It helped me a lot.<br></br> Thank you
                :)
              </Typography>
            </Paper>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ padding: "10px 30px 10px 30px" }}>
                <Typography
                  sx={{
                    fontFamily: "Raleway",
                    fontWeight: 900,
                    fontSize: "24px",
                    color: "#023047",
                  }}
                >
                  Jane Cooper
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Raleway",
                    fontWeight: 400,
                    fontSize: " 18px",
                    color: "#023047",
                  }}
                >
                  Developer, Sony
                </Typography>
              </Box>
              <Avatar
                src={testimonialImg1}
                alt="testimonialImg1"
                sx={{
                  height: "100px",
                  width: "100px",

                  margin: "-20px 30px 10px 30px",
                  zIndex: " 100",
                }}
              ></Avatar>
            </Box>
          </Paper>
          <Paper
            elevation={4}
            sx={{
              zIndex: "2",
              position: "absolute",
              top: "300px",
              left: "150px",
              borderRadius: "24px",
            }}
          >
            <Paper sx={{ backgroundColor: "#DA722C", borderRadius: "24px" }}>
              <Typography
                sx={{
                  padding: "10px",
                  fontFamily: "Raleway",
                  fontWeight: 900,
                  fontSize: "18px",
                  color: "#fff",
                  zIndex: -1,
                }}
              >
                Amazing Work! Well done!
              </Typography>
            </Paper>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Box sx={{ padding: "10px 30px 10px 30px" }}>
                <Typography
                  sx={{
                    fontFamily: "Raleway",
                    fontWeight: 900,
                    fontSize: "24px",
                    color: "#023047",
                  }}
                >
                  Jacob Jones
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Raleway",
                    fontWeight: 400,
                    fontSize: " 18px",
                    color: "#023047",
                  }}
                >
                  Designer, Facebook
                </Typography>
              </Box>
              <Avatar
                src={testimonialImg2}
                alt="testimonialImg1"
                sx={{
                  height: "100px",
                  width: "100px",

                  margin: "-20px 30px 10px 30px",
                  zIndex: " 100",
                }}
              ></Avatar>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
}
