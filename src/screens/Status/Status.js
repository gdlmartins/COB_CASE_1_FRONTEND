import React, { useState } from "react";
import useForm from "../../hooks/useForm";

import { Button, TextField } from "@mui/material";
import { MainBox, Box } from "./styledStatus";
import Header from "../../components/headers/Header";
import { postApi } from "../../services/postApi";

const Status = () => {
  const { form, onChange, clear } = useForm({
    competitionName: "",
    status: "",
  });
  const onSubmit = (e) => {
    e.preventDefault();
    const teste = postApi("competition", form);
  };

  return (
    <div>
      <Header
        Competitors={"Competitors"}
        Competitions={"Competitions"}
        Ranking={"Ranking"}
      />
      <Box>
        <h1>Close or Open a Competition</h1>
        <span>to start competitions go to competitions page</span>
        <MainBox>
          <form onSubmit={onSubmit}>
            <TextField
              name={"competitionName"}
              value={form.competitionName}
              onChange={onChange}
              placeholder='darts... or 100m... ex: 100m  semi-finals'
              label={"Competition name"}
              required
              fullWidth
              margin={"normal"}
            />

            <TextField
              name={"status"}
              value={form.status}
              onChange={onChange}
              placeholder={"open or close"}
              label='Status'
              required
              fullWidth
              margin={"normal"}
            />

            <Button variant='contained' type='submit'>
              Submit
            </Button>
          </form>
        </MainBox>
      </Box>
    </div>
  );
};
export default Status;
