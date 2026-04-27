import React, { Component } from 'react'
import CardList from '../CardList/CardList'
import SearchBox from '../SearchBox/SearchBox'
import Footer from '../Footer/Footer'
import { robots } from '../../robots'
import './App.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }

  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => this.setState({ robots: users }))
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value })
  }

  render() {
    const { robots, searchfield } = this.state
    const filteredRobot = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return (
      <div className="app-container">
        <div className="app-title">
          <h1>Robot Filters</h1>
        </div>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobot} />
        <Footer />
      </div>
    );
  }

}


export default App