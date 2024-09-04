import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

//CONTAINER

export const HeaderContainer = styled(Box)(() => ({
  display: "flex",
  gap: "10px",
  padding: "10px 40px",
  justifyContent: "space-between",
  alignItems: "center",
}));

//TYPOGRAPHY

export const HeaderTypography = styled(Typography)(() => ({
  fontSize: "14px",
  fontWeight: "500",
}));

//IMG

export const HeaderImg = styled("img")(() => ({
  position: "relative",
}));
