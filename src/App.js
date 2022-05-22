import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import { GlobalStyle } from "./styled-app";

function App() {
  return (
    <>
     <GlobalStyle/>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
      </>
  )
    
}

export default App;
