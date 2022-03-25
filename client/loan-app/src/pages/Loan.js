import React, { useState } from "react";
import "../Loan.css";
import FormInput from "../components/Form";
import Layout from "../components/Layout";

function Loan() {
  const [values, setValues] = useState({
    username: "",
    password: "",
    amount: "",
  });

  const inputs = [
    {
      id: 1,
      name: "Type of Loan",
      type: "text",
      placeholder: "Reason for loan",
      label: "Loan",
      required: true,
    },
    {
      id: 2,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: "Amount",
      type: "amount",
      placeholder: "Amount",
      errorMessage: "Amount should be in values!",
      label: "Amount",
      pattern: `^[0-9]+$`,
      required: true,
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <Layout>
      <div className="loan">
        <form onSubmit={handleSubmit}>
          <h1>Request for loan</h1>
          {inputs.map((input) => (
            <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
            />
          ))}
          <button>Submit</button>
        </form>
      </div>
    </Layout>
  );
}

export default Loan;
