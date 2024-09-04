import { createTheme } from "@mui/material";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";

export const Colors = {
  primary: "#000000",
  title: "#098D5B",
  bold: "#56957A",
  bgdivU: "#E0F0E5",
  bgdivD: "#DEDCDD",
  bgdivT: "#FECF1F",
  bgdivQ: "#E6EDBA",
  bgfooter: "#000000",
};

const theme = () =>
  createTheme({
    palette: {
      primary: {
        main: "#fff",
      },
      secondary: {
        main: Colors.primary,
      },
    },
    typography: {
      allVariants: {
        color: Colors.primary,
        fontFamily: "'Barlow', 'arial'",
        fontSize: 14,
      },
    },
  });

export default theme;
