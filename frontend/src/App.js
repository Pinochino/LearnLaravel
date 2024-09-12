import {  CssBaseline,  ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import classNames from "classnames/bind";
import styles from "./index.css"; // Ensure the use of CSS modules
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { publicRoutes } from "./Routes/index";
import { Fragment } from "react";
import { DefaultLayout } from "./Layouts";
import LoginPage from "./pages/Login/Login";
import RegisterPage from "./pages/Register/Register";



const cx = classNames.bind(styles);

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Router>
          <div className={cx("App")}>
            <main className={cx("content")}>
              <Routes>
                <Route path='/login' element={<LoginPage />}></Route>
                <Route path='/register' element={<RegisterPage />}></Route>
                {publicRoutes.map((route, index) => {

                  let Layout = DefaultLayout;
                  if (route.layout) {
                    Layout = route.layout;
                  } else if (route.layout === null){
                    Layout = Fragment;
                  }

                  const Page = route.component;

                  return (
                    <Route
                      key={index}
                      path={route.path}
                      element={
                        <Layout>
                          <Page />
                        </Layout>
                      }
                    />
                  );
                })}
              </Routes>
            </main>
          </div>
        </Router>
       </ThemeProvider>
     </ColorModeContext.Provider>
  );
}

export default App;
