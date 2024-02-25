import React from "react";
import { Box, Typography, Button } from "@mui/material";
import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      padding="20px"
    >
      <Typography
        color="#FF2625"
        fontWeight="600"
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
      >
        Fitness Club
      </Typography>
      <Typography fontWeight="700" fontSize="30px" mb="23px" mt="30px">
        Sweat <br /> Smile <br /> Repeat
      </Typography>
      <Typography fontWeight="500" fontSize="22px" lineHeight="35px" mb={4}>
        Checkout the most effective excercise
      </Typography>
      <Button
        variant="contained"
        color="error"
        size="large"
        href="#exercises"
        mb={4}
        sx={{ backgroundColor: "#FF2625", padding: "10px" }}
      >
        Explore Excericses
      </Button>
      <Typography
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
        fontWeight="600"
        color="#FF2625"
      >
        EXERCISE
      </Typography>
      <img
        src={HeroBannerImage}
        alt="Hero-banner"
        className="hero-banner-img"
        display="block"
      />
    </Box>
  );
};

export default HeroBanner;
