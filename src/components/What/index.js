import { Card, CardContent, Rating, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Whattheysaid = () => {
  return (
    <Box sx={{ paddingTop: "80px" }}>
      <Card
        sx={{
          backgroundColor: " #041562",
          height: "400px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            padding: "45px 40px",
          }}
        >
          <Typography
            sx={{
              width: "274px",
              height: "44px",
              fontFamily: "Inter",
              fontStyle: "normal",
              fontWeight: "600",
              fontSize: "36px",
              lineHeight: "44px",
              color: "white",
            }}
          >
            What they Said
          </Typography>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignContent: "center",
            padding: "0px 40px",
          }}
        >
          <Card
            sx={{
              width: "290px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "24px 32px",
              gap: "35px",
              backgroundColor: "rgba(48, 69, 165, 0.6)",
            }}
          >
            <CardContent>
              <Box>
                <Rating name="read-only" value={5} readOnly />
              </Box>
              <Typography
                sx={{ fontSize: 14, color: "white" }}
                color="text.secondary"
                gutterBottom
              >
                Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.
                So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.
                <br /> 
                
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: "290px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "24px 32px",
              gap: "35px",
              backgroundColor: "rgba(48, 69, 165, 0.6)",
            }}
          >
            <CardContent>
              <Box>
                <Rating name="read-only" value={5} readOnly />
              </Box>
              <Typography
                sx={{ fontSize: 14, color: "white" }}
                color="text.secondary"
                gutterBottom
              >
                Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.
                So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.
              </Typography>
            </CardContent>
          </Card>
          <Card
            sx={{
              width: "290px",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              padding: "24px 32px",
              gap: "35px",
              backgroundColor: "rgba(48, 69, 165, 0.6)",
            }}
          >
            <CardContent>
              <Box>
                <Rating name="read-only" value={5} readOnly />
              </Box>
              <Typography
                sx={{ fontSize: 14, color: "white" }}
                color="text.secondary"
                gutterBottom
              >
              Twenty years from now you will be more disappointed by the things that you didn’t do than by the ones you did do.
                So throw off the bowlines. Sail away from the safe harbor. Catch the trade winds in your sails. Explore. Dream. Discover.
              </Typography>
            </CardContent>
          </Card>
        </Box>
      </Card>
    </Box>
  );
};
export default Whattheysaid;
