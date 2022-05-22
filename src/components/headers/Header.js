import { Button } from "@mui/material";
import React from "react";
import { BoxStyled } from "./styledHeader";
import { useNavigate } from "react-router";
import { gotoCompetition, gotoCompetitionStatus, gotoCompetitor, gotoRanking } from "../../routes/coordinator";

const Header = ({ Competitors, Competitions, Ranking, Status }) => {
    const navigate = useNavigate()
  return (
    <BoxStyled>
       {Competitors ? <Button
        sx={{ color: "white", background: " rgba(0, 0, 0, 0)" }}
        onClick={() => gotoCompetitor(navigate)}
      >
        <h2>{Competitors}</h2>
      </Button> : ""} 
      {Competitions ? <Button
        sx={{ color: "white", background: " rgba(0, 0, 0, 0)" }}
        onClick={() => gotoCompetition(navigate)}
      >
        <h2>{Competitions}</h2>
      </Button> : "" }
      {Ranking ? <Button
        sx={{ color: "white", background: " rgba(0, 0, 0, 0)" }}
        onClick={() => gotoRanking(navigate)}
      >
        <h2>{Ranking}</h2>
      </Button> : ""}
      {Status ? <Button
        sx={{ color: "white", background: " rgba(0, 0, 0, 0)" }}
        onClick={() => gotoCompetitionStatus(navigate)}
      >
        <h2>{Status}</h2>
      </Button>: "" }
    </BoxStyled>
  );
};
export default Header;
