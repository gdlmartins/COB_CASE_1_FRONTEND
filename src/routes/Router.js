import { Route, Routes  } from "react-router";
import Competition from "../screens/Competitions/Competitions";
import Competitors from "../screens/Competitor/Competitors";
import Ranking from "../screens/Ranking/Ranking";
import  Error from "../screens/Error";
import Status from "../screens/Status/Status";


const Router =()=> { 

    return(
        <Routes>
            <Route path="/competitor" element ={<Competitors/>} />
            <Route path="/competition" element ={<Competition/>} />
            <Route path="/competition/status" element ={<Status/>} />
            <Route path="/competitor/ranking" element ={<Ranking/>} />
            <Route path="/*" element ={<Error/> }/>
    </Routes>
    );
};
export default Router; 

