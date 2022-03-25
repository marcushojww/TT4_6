import React from "react";
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Layout from "../components/Layout";

function Home() {
  return (
    <Layout>
      <div class="container-fluid">
        <div class="row content">
          <div class="col-sm-2">
            <h2>Home</h2>
          </div>
          <div class="col-sm-10">
            <div class="well">
              <h4>Welcome!</h4>
              <p>name</p>
            </div>
            <div class="row">
              <div class="col-sm-4">
                <div class="well">
                  <h4>Current Account Balance</h4>
                  <p>$ amount</p>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="well">
                  <h4>Current Loans</h4>
                  <p>$ amount</p>
                </div>
              </div>
              <div class="col-sm-3">
                <div class="well">
                  <h4>Loan History</h4>
                  <p>$ amount</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Home;
