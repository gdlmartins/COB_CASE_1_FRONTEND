import { Route, Routes  } from "react-router";
import Competition from "../screens/Competitions/Competitions";
import Competitors from "../screens/Competitor/Competitors";
import Ranking from "../screens/Ranking/Ranking";
import  Error from "../screens/Error";


const Router =()=> { 

    return(
        <Routes>
            <Route path="/competitor" element ={<Competitors/>} />
            <Route path="/competition" element ={<Competition/>} />
            <Route path="/competitor/ranking" element ={<Ranking/>} />
            <Route path="/*" element ={<Error/> }/>
    </Routes>
    );
};
export default Router; 

