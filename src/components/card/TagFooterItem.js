import { Box } from "@mui/material";
import React from "react";

export const TagFooterItem = ({ text }) => {
  return (
    <Box
      sx={{
        border: "1px solid #000",
        backgroundColor: "#F8F8F8",
        color: "#000",
        padding: "4px 8px",
        fontSize: "0.75rem",
        letterSpacing: "0.5px",
        fontWeight: 700,
        borderRadius: "4px",
        textTransform: "uppercase",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: "6px",
        marginBottom: "4px",
        lineHeight: "14px",
        height: "22px",
        fontFamily: "'IBM Plex Sans', sans-serif",
      }}
    >
      {text}
    </Box>
  );
};
