import { Box, Typography } from "@mui/material";
import React from "react";
import { HeartIcon } from "./HeartIcon";

export const ListCardHeader = ({ title }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "16px",
      }}
    >
      <Typography
        sx={{
          textWrap: "wrap",
          fontSize: "1.25rem",
          fontWeight: 600,
          lineHeight: "28px",
          color: "#000000",
        }}
      >
        {title ?? "The Royal Gardens Residential Compound"}
      </Typography>
      <HeartIcon />
    </Box>
  );
};
