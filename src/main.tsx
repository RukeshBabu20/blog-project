import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import React from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "./theme.ts";
import { BlogProvider } from "./context/BlogContext.tsx";

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BlogProvider>
        <App />
      </BlogProvider>
    </ThemeProvider>
  </React.StrictMode>
);
