import React, { useState } from "react";
import useForm from "../../hooks/useForm"

import { Button, TextField } from '@mui/material';
import { MainBox, Box } from "./styledCompetitions";
import Header from "../../components/headers/Header";
import { postApi } from "../../services/postApi";


const Competitions =() =>{ 
 
    const {form, onChange , clear} = useForm({
        competitionName:"",
        status:"",
     })
    const onSubmit = (e)=> {
        e.preventDefault();
       
        const teste =  postApi("competition" , form )
        console.log(form)
        console.log("Clicado")
        
    } 
    console.log(form)

  

  
    return(
      <div>
        <Header 
        namePage1={"Competitors"}
        namePage2={"Competitions"}
        namePage3={"Ranking"}
        buttonName={"goback"}
        />
        <Box>
        <h1>Start a Competition</h1>
        <span>100m and darts have to be part of the name.</span>
      <MainBox>

  
        <form onSubmit={onSubmit}>
        <TextField
          name={"competitionName"}
          value={form.competitionName}
          onChange={onChange}
          placeholder="darts... or 100m... ex: 100m  semi-finals"
          label={"Competition name"} 
          required
          fullWidth
          margin={"normal"}
        />

        <TextField
          name={"status"}
          value={"open"}
          // onChange={onChange}
          label="Status"
          required
          fullWidth
          margin={"normal"}
        />
      
        <Button
        variant="contained"
        type="submit"
        >Submit</Button>
      </form>
      </MainBox>
      </Box>
      </div>

    );

};
export default Competitions;