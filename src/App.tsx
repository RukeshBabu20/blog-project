import React from "react";
import { CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import AppRoutes from "./routes";

const theme = createTheme({
  typography: {
    fontFamily: "Arial, sans-serif",
  },
  palette: {
    // background: {
    //   default: "#f4f6f8",
    // },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundImage: "url('/back.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
        },
      },
    },
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AppRoutes />
    </ThemeProvider>
  );
};

export default App;
