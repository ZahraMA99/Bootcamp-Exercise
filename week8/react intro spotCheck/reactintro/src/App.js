import React, { Component } from "react";
import "./App.css";

class App extends Component {
  showCompany(name, revenue) {
    return (
      <div id={name}>
        {name} makes {revenue} every year
      </div>
    );
  }

  render() {
    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 },
    ];

    return (
      <div>{companies.map((company) => this.showCompany(company.name, company.revenue))}</div>
    );
  }
}

export default App;
