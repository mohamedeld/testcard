import { Box } from "@mui/material";
import React from "react";
import Image from "next/image";
import { TagFooterItem } from "./TagFooterItem";

export const ListCardImages = ({
  mainImage,
  images,
  tags,
  isRow,
  isContentRow,
  isBasis,
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "2px",
        width: "100%",
        overflow: "hidden",
        position: "relative",
        height: {
          xs: "335px",
          sm: "100%",
        },
      }}
    >
      <Box
        sx={{
          position: "relative",
          width: "100%",
          overflow: "hidden",
          borderTopLeftRadius: {
            xs: "16px",
            md: "16px",
          },
          borderTopRightRadius: {
            xs: "16px",
            sm: "0px",
          },
          ...(!images && {
            borderBottomLeftRadius: "16px",
          }),
          flex: 6.9,
        }}
      >
        <Image
          src={
            mainImage?.src ??
            "/ar/resources/media/images/designSystem/alama1.png"
          }
          alt={mainImage?.alt ?? "main image"}
          fill={true}
        />
      </Box>
      {isBasis
        ? null
        : images?.length > 0 && (
            <Box
              sx={{
                display: "flex",
                gap: "2px",
                flex: 3.1,
              }}
            >
              {images?.map((item, index) => (
                <Box
                  key={`${item}-${index}`}
                  sx={{
                    position: "relative",
                    flex: 1,
                    overflow: "hidden",

                    borderBottomLeftRadius: {
                      xs: "0px",
                      sm: index === 0 ? "16px" : "0px",
                      md: index === 0 ? "16px" : "0px",
                    },
                  }}
                >
                  <Image
                    src={item?.src}
                    alt={item?.alt ?? "sub image"}
                    key={`${item}-${index}`}
                    fill={true}
                    style={{
                      objectFit: "cover",
                    }}
                  />
                </Box>
              ))}
            </Box>
          )}
      <Box
        sx={{
          position: "absolute",
          left: "16px",
          bottom: "16px",
          display: "flex",
          flexWrap: "wrap",
          gap: "4px",
        }}
      >
        {tags?.map((tag) => (
          <TagFooterItem text={tag} key={tag} />
        ))}
      </Box>
    </Box>
  );
};
