import React from "react";
import ValidationTextFields from "../components/input/ValidationTextFields";

const Competitors =()=>{ 

    const form = { 
      name :  "gabriel"
    }
    const form2 = { 
      name :  "gabriel2"
    }
    const onSubmitForm  =()=>{ 

    }


    return(
        <>
        <h1>Competitors Page</h1>
        <ValidationTextFields 
        labelInput={"Competitor name"}
        form={form}
        onSubmitForm={onSubmitForm}
        />

        <ValidationTextFields 
        labelInput={"Competitor name"}
        form={form2}
        onSubmitForm={onSubmitForm}
        />
        </>

    );

};
export default Competitors;