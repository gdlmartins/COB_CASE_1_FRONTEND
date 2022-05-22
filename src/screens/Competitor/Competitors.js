import React, { useState } from "react";
import useForm from "../../hooks/useForm"

import { Button, TextField } from '@mui/material';
import { MainBox, Box } from "./styledCompetitor";
import Header from "../../components/headers/Header";
import { postApi } from "../../services/postApi";


const Competitions =()=>{ 
 
    const {form, onChange , clear} = useForm({
        name:"",
        competition:"",
        value:"",
     })
    const onSubmit = (e)=> {
        e.preventDefault();
        console.log(form)
        console.log("Clicado")
        postApi("competitor", form)

    } 
    console.log(form)
  
    return(
      <div>
        <Header 
          Competitions={"Competitions"}
          Status={"Status"}
          Ranking={"Ranking"}
        />
        <Box>
        <h1>Competitors Scores</h1>
      <MainBox>

  
        <form onSubmit={onSubmit}>
        <TextField
          name={"competition"}
          value={form.competition}
          onChange={onChange}

          label={"Competition"} 
          required
          fullWidth
          margin={"normal"}
        />

        <TextField
          name={"name"}
          value={form.name}
          onChange={onChange}
          label="Name"
          required
          fullWidth
          margin={"normal"}
        />
      

      <TextField
          name={"value"}
          value={form.value}
          label="Value"
          onChange={onChange}
          fullWidth
          required
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