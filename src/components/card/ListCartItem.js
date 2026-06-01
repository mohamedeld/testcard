import { Box } from "@mui/material";
import { ListCardImages } from "./ListCardImages";
import { ListCardContent } from "./ListCardContent";
import { HeaderTag } from "./HeaderTag";
import StarIcon from "@mui/icons-material/Star";
import "./style.css";
const variantColor = {
  purple: {
    bgColor: "#FF857B",
    border: "#FF857B",
    priceBgColor: "#FFE0DE",
  },
  green: {
    bgColor: "#4FB5AB",
    border: "#4FB5AB",
    priceBgColor: "#DEFFFC",
  },
  gray: {
    bgColor: "transparent",
    border: "#949494",
    priceBgColor: "#F8F8F8",
  },
};

const ListCartItem = ({
  color,
  images,
  value,
  headerIcon,
  tags,
  item,
  isRow,
  mainImage,
  isContentRow,
  navigateTo,
  addressImage,
  sx = {},
}) => {
  const variantStyle = variantColor[color ?? "gray"] || variantColor.gray;

  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          sm: `2.41fr ${isRow ? "5fr" : "3fr"}`,
        },
        width: "100%",
        height: "100%",
        border: `1px solid ${"#bbb"}`,
        position: "relative",
        borderRadius: "16px",
        backgroundColor: "#fff",
        borderBottom: `5px solid ${variantStyle?.border || "#494949"}`,
        ...sx,
      }}
    >
      {value && headerIcon && (
        <HeaderTag
          bgColor={variantStyle?.bgColor || "#FF857B"}
          value={value}
          Icon={headerIcon ?? StarIcon}
        />
      )}
      <ListCardImages
        isContentRow={isContentRow}
        tags={tags}
        mainImage={mainImage}
        isRow={isRow}
        images={images}
      />
      {/* map item here */}
      <ListCardContent
        bgColor={variantStyle?.priceBgColor || "#494949"}
        item={item}
        isRow={isRow}
        isContentRow={isContentRow}
        navigateTo={navigateTo}
        image={addressImage}
      />
    </Box>
  );
};

export default ListCartItem;
