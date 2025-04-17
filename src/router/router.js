import {Routes, Route} from "react-router-dom";

import Home from "../main/home";

function Router(){
    return(
        <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
    );
}
export default Router;