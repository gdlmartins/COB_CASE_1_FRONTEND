import React from "react";

const Competitions =()=>{ 
    return(
      <React.Fragment>
        <div>
        <h1>Competition Page</h1>
        </div>
        <div>
            <form>
            <input
            value={"oi1"}
            required
            name={"oi1"}
            onChange={"change"}
            />
            <input
            value={"oi2"}
            required
            name={"oi"}
            onChange={"change"}
            />
           
            </form>
        </div>

      </React.Fragment>
    );

};
export default Competitions;