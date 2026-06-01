import { Box, Typography } from "@mui/material";
import React from "react";

export const ListFeaturesItem = ({ icon, value }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "8px",
        alignItems: "center",
      }}
    >
      {icon}
      <Typography
        sx={{
          fontSize: {
            xs: "0.75rem",
            md: "0.875rem",
          },
          color: "#000",
          lineHeight: "20px",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};
