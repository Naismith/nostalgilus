import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATHS } from "src/constants";
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";

import HomePage from "src/pages/Home";
import Thread from "src/pages/Thread";
import Forum from "src/pages/Forum/page";

const theme = createTheme({ palette: { mode: "dark" } });
const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Routes>
          <Route path={PATHS.HOME} element={<HomePage />} />
          <Route path={PATHS.THREAD(":id")} element={<Thread />} />
          <Route path={PATHS.FORUM(":id")} element={<Forum />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
