import * as React from 'react';

import { TextField } from '@mui/material';

export default function ValidationTextFields({labelInput , onSubmitForm , form}) {

  return (
       <>
      <form onSubmit={onSubmitForm}>
        <TextField
          name={labelInput}
          value={form.name}
          label={labelInput} 
          required
          />
      </form>
      </>

  );
}