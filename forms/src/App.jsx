import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [Details, setDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [verified, setverified] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      Details.firstName &&
      Details.lastName &&
      Details.email &&
      Details.number
    ) {
      setSubmitted(true);
      setverified(true);
    }
  };

  return (
    <>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        {submitted && verified ? <div>Registration Succefull</div> : null}

        <input
          type="text"
          name="firstName"
          value={Details.firstName}
          placeholder="Enter First name"
          onChange={(e)=>{setDetails({...Details,firstName:e.target.value})}}
          
        />
        <br />
        {submitted && !Details.firstName ? <span id="text">Please enter your first name</span>:null}

        <br />

        <input
          type="text"
          name="lastName"
          value={Details.lastName}
          placeholder="Enter Last name"
          onChange={(e)=>{setDetails({...Details,lastName:e.target.value})}}
          
        />
        <br />
        {submitted && !Details.lastName ? <span id="text">Please enter your last name</span>:null}
<br />

        <input
          type="email"
          name="email"
          value={Details.email}

          placeholder="Enter email"
          onChange={(e)=>{setDetails({...Details,email:e.target.value})}}
          
        />
        <br />
        {submitted && !Details.email ? <span id="text">Please enter your email</span>:null}
        <br />

        <input
          type="text"
          name="number"
          value={Details.number}
          placeholder="Enter number"
          onChange={(e)=>{setDetails({...Details,number:e.target.value})}}
          
        />
        <br />
        {submitted && !Details.number ? <span id="text">Please enter your Number</span>:null}

        <button type="submit">Register</button>
      </form>
    </>
  );
}

export default App;
