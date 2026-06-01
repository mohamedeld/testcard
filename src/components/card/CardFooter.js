import { Box, Typography } from "@mui/material";

export const CardFooter = ({ title, price, duration, bgColor, action }) => {
  return (
    <Box
      sx={{
        padding: "16px",
        backgroundColor: bgColor || "#F7F7F7",
        borderBottomRightRadius: "16px",
        borderBottomLeftRadius: {
          xs: "16px",
          md: "0px",
        },
        mt: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "4px",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: "0.625rem",
              mb: "4px",
              color: "#5F5F5F",
              textTransform: "uppercase",
              lineHeight: "14px",
              fontWeight: 600,
            }}
          >
            {title}
          </Typography>
          <Typography
            className="price-text"
            sx={{
              fontSize: {
                xs: "1.25rem",
                md: "1.5rem ",
              },
              fontWeight: 600,
              lineHeight: {
                xs: "28px",
                md: "32px",
              },
              color: "#000",
            }}
          >
            {price}/{duration}
          </Typography>
        </Box>
        {action}
      </Box>
    </Box>
  );
};
