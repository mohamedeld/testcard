import { Box, Typography } from "@mui/material";
export const HeaderTag = ({ bgColor, value, Icon }) => {
  return (
    <Box
      sx={{
        position: "absolute",
        top: 0,
        left: 0,
        paddingY: "8px",
        paddingLeft: "24px",
        paddingRight: "32px",
        backgroundColor: bgColor,
        display: "flex",
        alignItems: "center",
        gap: "8px",
        zIndex: 99,
        borderRadius: "16px 0 32px 0",
      }}
    >
      <Icon
        sx={{
          width: "20px",
          height: "20px",
          color: "#fff",
        }}
      />
      <Typography
        sx={{
          fontSize: "0.875rem",
          fontWeight: "bold",
          color: "#fff",
          textTransform: "uppercase",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
};
