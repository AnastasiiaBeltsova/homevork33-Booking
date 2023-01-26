//Engine
import { Outlet } from "react-router-dom";
import store from "../../engine/config/store";
//Core
import { Provider } from "react-redux";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { orange } from "@mui/material/colors";
import { Container } from "@mui/material";
//Components
import { Header } from "../components/Header";

const theme = createTheme({
  palette: {
    primary: {
      main: orange[500]
    }
  }
})

export function Layout() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}> 
        <Header />
        <Container>
          <Outlet />
        </Container>
      </ThemeProvider>
    </Provider>
  )
}