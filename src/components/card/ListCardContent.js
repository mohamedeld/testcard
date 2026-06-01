import React from "react";
import Link from "next/link";
import { Box } from "@mui/material";
import { ListCardHeader } from "./ListCardHeader";
import { ListCardSubHeader } from "./ListCardSubHeader";
import { ListFeatures } from "./ListFeatures";
import { CardFooter } from "./CardFooter";

export const ListCardContent = ({
  bgColor,
  item,
  isRow,
  isContentRow,
  navigateTo,
  image,
}) => {
  return (
    <Box
      component={navigateTo ? Link : "div"}
      href={navigateTo || undefined}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        position: "relative",
        width: "100%",
        textDecoration: "none",
      }}
    >
      <Box
        sx={{
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "24px",
          paddingBottom: "0px",
        }}
      >
        <ListCardHeader title={item?.title} />
        <Box
          sx={{
            display: "grid",
            gap: {
              xs: "12px",
              sm: "24px",
            },
            gridTemplateColumns: {
              xs: "repeat(auto-fit, minmax(0, 1fr))",
              sm: isContentRow ? "repeat(auto-fit, minmax(0, 1fr))" : "1fr",
            },
            ...(isContentRow && {
              justifyContent: "space-between",
            }),
          }}
        >
          <ListCardSubHeader
            title={item?.address}
            m2Num={item?.range}
            villa={item?.villa}
            distance={item?.distance}
            isContentRow={isContentRow}
            image={image}
          />
          <ListFeatures
            isRow={isRow}
            featuresList={item?.featuresList}
            header={item?.header}
          />
        </Box>
      </Box>
      <CardFooter
        title={item?.footerTitle}
        price={item?.price}
        duration={item?.duration}
        bgColor={bgColor}
        action={item?.action}
      />
    </Box>
  );
};
