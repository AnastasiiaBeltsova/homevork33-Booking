//Core
import { Route, Routes } from "react-router-dom";
import { HistoryRouter } from "redux-first-history/rr6";
//Engine
import { history } from "../../engine/config/store";
import { pages } from "../../engine/config/routers";
//Parts
import { Layout } from "./Layout";

function App() {
  return (
    <HistoryRouter history={history}>
      <Routes>
        <Route path="/" element={<Layout/>}>
          {pages.map(route => <Route key={route.link} path={route.link} element={route.element} />)}
        </Route>
      </Routes>
    </HistoryRouter>
  );
}

export default App;
