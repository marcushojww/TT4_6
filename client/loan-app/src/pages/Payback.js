import React, { useState } from "react";
import "../Loan.css";
import FormInput from "../components/Form";
import Layout from "../components/Layout";

function Payback() {
  const [values, setValues] = useState({
    loanid: "",
    password: "",
    amount: "",
  });

  const inputs = [

    {
      id: 1,
      name: "Customer Loan ID",
      type: "loanid",
      placeholder: "Loan ID",
      errorMessage: "Amount should be in values!",
      label: "Please input loan ID",
      pattern: `^[0-9]+$`,
      required: true,
    },

    {
      id: 2,
      name: "Payback Amount",
      type: "amount",
      placeholder: "Payback Amount",
      errorMessage: "Amount should be in values!",
      label: "Please input payback amount (SGD)",
      pattern: `^[0-9]+$`,
      required: true,
    },
    {
      id: 3,
      name: "password",
      type: "password",
      placeholder: "Password",
      errorMessage:
        "Password should be 8-20 characters and include at least 1 letter, 1 number and 1 special character!",
      label: "Password",
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
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
          <h1>Payback loan</h1>
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

export default Payback;
