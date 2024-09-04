import { createTheme } from "@mui/material";
import "@fontsource/barlow/400.css";
import "@fontsource/barlow/500.css";

export const Colors = {
  primary: "#000000",
  title: "#066541",
  bold: "#56957A",
  bgdivU: "#E0F0E5",
  bgdivD: "#DEDCDD",
  bgdivT: "#FECF1F",
  bgdivQ: "#E6EDBA",
  bgfooter: "#000000",
  txtfooter: "#FFF",
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
    components: {
      MuiSvgIcon: {
        styleOverrides: {
          root: {
            color: Colors.txtfooter,
          },
        },
      },
      MuiButton: {
        defaultProps: {
          disableRipple: true,
          disableElevation: true,
        },
        styleOverrides: {
          root: {
            fontSize: 18,
            backgroundColor: "#00000000",
            color: "#fff",
            "&:hover": {
              backgroundColor: "#FFF",
              color: Colors.title,
            },
          },
        },
      },
      color: "#FFF",
      MuiFilledInput: {
        styleOverrides: {
          input: {
            color: "#FFF",
          },
        },
      },
      MuiInputLabel: {
        styleOverrides: {
          root: {
            fontSize: 18,
            color: "#FFF",
          },
          input: {
            color: "#FFF",
          },
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: {
            fontSize: 18,
            borderBottom: 0,
            backgroundColor: Colors.title,
            borderRadius: 0,
            "&:hover": {
              backgroundColor: Colors.title,
              borderRadius: 0,
            },
          },
          input: {
            color: "#fff",
            backgroundColor: Colors.title,
            borderRadius: 0,

            "&:hover": {
              backgroundColor: Colors.title,
              borderRadius: 0,
            },
          },
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          asterisk: {
            color: Colors.title,
          },
        },
      },
    },
  });

export default theme;
