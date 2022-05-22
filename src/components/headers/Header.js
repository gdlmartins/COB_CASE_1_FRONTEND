import { Button } from "@mui/material";
import React from "react"
import {BoxStyled} from "./styledHeader"


const Header = ({namePage1,namePage2, namePage3 , buttonName})=> {


    return ( 
        <BoxStyled>
       
       
            <Button
            sx={{color:"white" , background:"red"}}
            > 
                    <h2>{namePage1}</h2>
            </Button>
            <Button
            sx={{color:"white" , background:"red"}}
            > 
                    <h2>{namePage2}</h2>
            </Button>
            <Button
            sx={{color:"white" , background:"red"}}
            > 
                    <h2>{namePage3}</h2>
            </Button>
            <Button
            sx={{color:"white" , background:"red"}}
            > 
                {buttonName}
            </Button>
            
        </BoxStyled>
    )


} 
export default Header;