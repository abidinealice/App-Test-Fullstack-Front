import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

//CONTAINER

export const FooterContainer = styled(Box)(() => ({
  display: "flex",
  flexDirection: "row",
  gap: "10px",
  backgroundColor: Colors.bgfooter,
  margin: "40px 0 0 0",
  padding: "20px 40px",
}));

//TYPOGRAPHY

export const FooterTypography = styled(Typography)(() => ({
  fontSize: "14px",
  color: Colors.txtfooter,
  fontWeight: "500",
}));
