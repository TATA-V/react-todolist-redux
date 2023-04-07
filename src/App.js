import { createGlobalStyle } from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import Notice from "./components/Notice";
import Setting from "./components/Setting";

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #e9ecef;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path={process.env.PUBLIC_URL + "/"} element={<Main />} />
          <Route path={process.env.PUBLIC_URL + "/notice"} element={<Notice />} />
          <Route path={process.env.PUBLIC_URL + "/setting"} element={<Setting />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
