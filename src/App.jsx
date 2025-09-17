import { BrowserRouter } from "react-router-dom";
// import ThemeProvider from "./context/ThemeProvider";
import Main from "./page";
// import GlobalLayout from "./layouts/GlobalLayout";
// import ErrorBoundary from "./components/ErrorBoundary";

function App() {
  return (
    <>
      <BrowserRouter>
        <Main />
      </BrowserRouter>
    </>
  );
}

export default App;
