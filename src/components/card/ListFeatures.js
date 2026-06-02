import { Box, Typography } from "@mui/material";
import ParkIcon from "@mui/icons-material/Park";
import { ListFeaturesItem } from "./ListFeaturesItem";
export const ListFeatures = ({ isRow, header, featuresList }) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: "12px",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontSize: {
            xs: "0.75rem",
            md: "0.625rem",
          },
          textTransform: "uppercase",
          color: "#000",
          fontWeight: 600,
          lineHeight: "14px",
          letterSpacing: "0.5px",
        }}
      >
        {header ?? "Featured Features"}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: {
            xs: "column",
            md: isRow ? "row" : "column",
          },
          gap: "12px",
          marginBottom: isRow ? "16px" : "0px",
        }}
      >
        {featuresList?.map((feature) => (
          <ListFeaturesItem
            key={feature?.id}
            icon={
              feature?.Icon ?? (
                <ParkIcon
                  sx={{
                    width: "20px",
                    height: "20px",
                  }}
                />
              )
            }
            value={feature?.value ?? "Close to International schools"}
          />
        ))}
      </Box>
    </Box>
  );
};
