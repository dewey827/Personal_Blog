import {BrowserRouter} from "react-router-dom";

//css
import "./css/main.css";

import Header from "./main/header";
import Footer from "./main/footer";
import Home from "./main/home";


function App() {
  return (
    <div>
      <BrowserRouter>
            <Header />
            <Home />
            <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
