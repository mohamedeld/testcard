import { Box } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

export const HeartIcon = ({ sx = {}, Icon }) => {
  return (
    <Box sx={sx}>
      {Icon ? (
        Icon
      ) : (
        <FavoriteIcon
          sx={{
            width: "32px",
            height: "32px",
            objectFit: "cover",
            color: "#00000080",
          }}
        />
      )}
    </Box>
  );
};
