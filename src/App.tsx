import {
  Stack,
  Box,
  createTheme,
  ThemeProvider,
  PaletteMode,
} from "@mui/material";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Rightbar from "./components/Rightbar";
import Navbar from "./components/Navbar";
import Add from "./components/Add";
import { useState } from "react";

function App() {
  const [mode, setMode] = useState<PaletteMode>("light");
  const darkMode = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <>
      <ThemeProvider theme={darkMode}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack spacing={2} direction={"row"} justifyContent={"space-between"}>
            <Sidebar mode={mode} setMode={setMode} />
            <Feed />
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </>
  );
}

export default App;
