import React, { useState } from "react";
import useForm from "../../hooks/useForm";
import { Button, TextField } from "@mui/material";
import { MainBox, Box, BoxName , BoxNameMain } from "./styledRanking";
import Header from "../../components/headers/Header";
import {postApi } from "../../services/getApi";


const Competitions = () => {
  const [data , setData] = useState([]);
  const { form, onChange, clear } = useForm({
    competition: "",
  });

  const dataUp = (response) => {
    setData(response.data)

  };

 const resultToscreen =  data.map(item => { return  <BoxNameMain key={item.id}>
  <BoxName>Name: {item.name} </BoxName><BoxName>Score :{item.value}</BoxName>
  </BoxNameMain>
 })

  const onSubmit = (e) => {
    e.preventDefault();
    postApi("competitor/racking", form, dataUp);
  };

  return (
 
    <div>
      <Header
        namePage1={"Competitors"}
        namePage2={"Competitions"}
        namePage3={"Ranking"}
        buttonName={"goback"}
      />
      <Box>
        <h1>Ranking</h1>
        <MainBox>
          <form onSubmit={onSubmit}>
            <TextField
              name={"competition"}
              value={form.competition}
              placeholder='100m finals'
              onChange={onChange}
              label={"Competition name"}
              required
              fullWidth
              margin={"normal"}
            />

            <Button variant='contained' type='submit'>
              Submit
            </Button>
          </form>
        </MainBox>

       {!resultToscreen?   ""    : 
        resultToscreen
       }
      </Box>
    </div>
  );
};
export default Competitions;
