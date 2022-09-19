import { BrowserRouter, Routes, Route } from "react-router-dom";
import { PATHS } from "src/constants";

import HomePage from "src/pages/Home";
import Thread from "src/pages/Thread";
import Forum from "src/pages/Forum/page";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={PATHS.HOME} element={<HomePage />} />
        <Route path={PATHS.THREAD(":id")} element={<Thread />} />
        <Route path={PATHS.FORUM(":id")} element={<Forum />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
