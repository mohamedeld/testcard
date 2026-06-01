import { Box, Typography } from "@mui/material";
import Image from "next/image";

export const ListCardSubHeader = ({
  title,
  image,
  isRow,
  villa,
  distance,
  isContentRow,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: {
          xs: "column",
          md: isRow ? "row" : "column",
        },
        gap: "12px",
      }}
    >
      <Typography
        sx={{
          fontSize: "0.875rem",
          color: "#5F5F5F",
        }}
      >
        {title}
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: {
            xs: "start",
            md: isContentRow ? "start" : "center",
          },
          flexDirection: {
            xs: "column",
            md: isContentRow ? "column" : "row",
          },

          flexWrap: "wrap",

          gap: {
            xs: "12px",
            md: "12px",
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          {image?.Icon ?? (
            <Image
              src={
                image?.src ??
                "/ar/resources/media/images/designSystem/house.svg"
              }
              alt={image?.alt ?? "house icon"}
              width={image?.width ?? 20}
              height={image?.height ?? 20}
            />
          )}
          <Typography
            sx={{
              fontSize: "0.875rem",
              color: "#5F5F5F",
            }}
          >
            {villa}
          </Typography>
        </Box>
        {distance && (
          <Typography
            sx={{
              fontSize: "0.875rem",
              color: "#5F5F5F",
            }}
          >
            {distance}
          </Typography>
        )}
      </Box>
    </Box>
  );
};
