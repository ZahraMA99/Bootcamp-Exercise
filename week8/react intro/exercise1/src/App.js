import React, {Component} from 'react'
import "./App.css";

class App extends Component {

  showCompany (name, revenue){
    return(
      <div>{name} make profit {revenue}</div>
    )
  }

  render() {
    let companies = [
      { name: "Tesla", revenue: 140 },
      { name: "Microsoft", revenue: 300 },
      { name: "Google", revenue: 600 }
    ]
    return(
      companies.map((c) => this.showCompany(c.name, c.revenue)
      )
    )
  }
}

export default App;

 //  companies.map((c) => <p className='info'>{c.name} make profit {c.revenue}</p>

