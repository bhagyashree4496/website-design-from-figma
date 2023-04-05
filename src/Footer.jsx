import {
  Box,
  Button,
  Grid,
  Input,
  InputBase,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import fb from "./Images/Vector.svg";
import insta from "./Images/Vector (1).png";

export default function Footer() {
  return (
    <div>
      <Grid
        container
        spacing={6}
        sx={{
          padding: "30px",
          justifyContent: "space-evenly",
          background: " #070917",
          marginTop: "30px",
        }}
      >
        <Grid item>
          <Stack spacing={2}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "18px",
                textAlign: "left",
                color: "#DA722C",
                marginLeft: "-25px",
              }}
            >
              Quick Links
            </Typography>
            <Link
              sx={{
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                color: "#FFFFFF",
                textDecoration: "none",
                textAlign: "left",
              }}
            >
              About Us
            </Link>
            <Link
              sx={{
                textAlign: "left",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                color: "#FFFFFF",
                textDecoration: "none",
              }}
            >
              Contact Us
            </Link>
            <Link
              sx={{
                textAlign: "left",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                color: "#FFFFFF",
                textDecoration: "none",
              }}
            >
              Privacy Policy
            </Link>
            <Link
              sx={{
                textAlign: "left",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                color: "#FFFFFF",
                textDecoration: "none",
              }}
            >
              Terms & Conditions
            </Link>
          </Stack>
        </Grid>
        <Grid item>
          <Stack spacing={2}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "18px",
                textAlign: "left",
                color: "#DA722C",
                marginLeft: "-25px",
              }}
            >
              Course
            </Typography>
            <Link
              sx={{
                textAlign: "left",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                color: "#FFFFFF",
                textDecoration: "none",
              }}
            >
              Log In
            </Link>
            <Link
              sx={{
                textAlign: "left",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                color: "#FFFFFF",
                textDecoration: "none",
              }}
            >
              Download
            </Link>
            <Link
              sx={{
                textAlign: "left",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                color: "#FFFFFF",
                textDecoration: "none",
              }}
            >
              All Courses
            </Link>
          </Stack>
        </Grid>
        <Grid item>
          <Stack spacing={3}>
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontWeight: 700,
                fontSize: "18px",
                textAlign: "left",
                color: "#DA722C",
                marginLeft: "-25px",
              }}
            >
              Contact Us
            </Typography>
            <Typography
              sx={{
                textAlign: "left",
                fontFamily: "Poppins",
                fontWeight: 400,
                fontSize: "16px",
                color: "#FFFFFF",
              }}
            >
              contact@email.com
            </Typography>
            <Stack direction="row" spacing={2}>
              <img src={insta} alt="1"></img>
              <img src={fb} alt="1"></img>
            </Stack>
            <Box
              sx={{
                backgroundColor: "#fff",
                padding: "3px 10px 3px 10px",
                borderRadius: "25px",
              }}
            >
              <InputBase
                placeholder="Email Addresss"
                sx={{ fontWeight: 400, fontSize: "16px" }}
              ></InputBase>
              <Button
                sx={{
                  backgroundColor: "#077DB8",
                  fontFamily: "Poppins",
                  fontWeight: 400,
                  fontSize: "10px",
                  color: "#FFFFFF",
                  borderRadius: "20px",
                  "&:hover": { backgroundColor: "#023047" },
                }}
              >
                Subscribe
              </Button>
            </Box>
          </Stack>
        </Grid>
      </Grid>
    </div>
  );
}
