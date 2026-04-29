import React, { useState, useEffect } from 'react'
import CardList from '../CardList/CardList'
import SearchBox from '../SearchBox/SearchBox'
import Footer from '../Footer/Footer'
import { robots } from '../../robots'
import './App.css'


const App = () => {
  const [robots, setRobots] = useState([])
  const [searchfield, setSearchfield] = useState('')

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => setRobots(users))
  }, [])

  const onSearchChange = (event) => {
    setSearchfield(event.target.value)
  }

  const filteredRobot = robots.filter(robot => {
    return robot.name.toLowerCase().includes(searchfield.toLowerCase())
  })

  return (
    <div className="app-container">
      <div className="app-title">
        <h1>Robot Filters</h1>
      </div>
      <SearchBox searchChange={onSearchChange} />
      <CardList robots={filteredRobot} />
      <Footer />
    </div>
  )
}

// class App extends Component {
//   constructor() {
//     super()
//     this.state = {
//       robots: [],
//       searchfield: ''
//     }

//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then(response => response.json())
//     .then(users => this.setState({ robots: users }))
//   }

//   onSearchChange = (event) => {
//     this.setState({ searchfield: event.target.value })
//   }

//   render() {
//     const { robots, searchfield } = this.state
//     const filteredRobot = robots.filter(robot => {
//       return robot.name.toLowerCase().includes(searchfield.toLowerCase())
//     })

//     return (
//       <div className="app-container">
//         <div className="app-title">
//           <h1>Robot Filters</h1>
//         </div>
//         <SearchBox searchChange={this.onSearchChange} />
//         <CardList robots={filteredRobot} />
//         <Footer />
//       </div>
//     );
//   }

// }


export default App