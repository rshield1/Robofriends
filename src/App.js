import React from 'react';
import CardList from './CardList';
// import { robots } from './robots'
import SearchBox from './SearchBox'


class App extends React.Component {
    constructor() {
        super()
            this.state = {
                robots: [],
                searchfield: ''
            }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(resp => {
            return resp.json();
        })
        .then(users =>{
         this.setState({ robots: users })   
        })
        
    }
    onSearchChange = (event) =>{
        // changing the state
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const filteredRobots = this.state.robots.filter(robot =>{
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
        })
        return(
        <div className='tc'>
            <h1 className= 'f1' >RoboFriends</h1>
            <SearchBox searchChange={this.onSearchChange}/>
            <CardList robots= { filteredRobots }/>

        </div>
      
    );
    }

}

export default App;