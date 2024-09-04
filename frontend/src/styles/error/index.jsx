import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

//CONTAINER

export const ErrorContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  height: "100vh",
  marginTop: "5%",
}));

//TYPOGRAPHY

export const ErrorTypography = styled(Typography)(() => ({
  fontSize: "16px",
  fontWeight: "500",
}));

//IMG

export const ErrorImg = styled("img")(() => ({}));
