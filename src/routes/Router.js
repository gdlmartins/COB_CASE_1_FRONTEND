import { Route, Routes  } from "react-router";
import Competition from "../screens/Competitions/Competitions";
import Competitors from "../screens/Competitor/Competitors";
import  Error from "../screens/Error";


const Router =()=> { 

    return(
        <Routes>
            <Route path="/competitor" element ={<Competitors/>} />
            <Route path="/competition" element ={<Competition/>} />
            <Route path="/*" element ={<Error/> }/>
    </Routes>
    );
};
export default Router; 

