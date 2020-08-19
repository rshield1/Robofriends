import React from 'react';
import CardList from '../components/CardList';
import Scroll from '../components/Scroll'
import SearchBox from '../components/SearchBox'



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
        .then(resp => resp.json())
        .then(users => this.setState({ robots: users }))
        
    }
    onSearchChange = (event) =>{
        // changing the state
        this.setState({ searchfield: event.target.value })
    }

    render(){
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot =>{
        return robot.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        
        if (!robots.length){
            return <h1>Loading</h1>
        } else {
            return(
                <div className='tc'>
                <h1 className= 'f1' >RoboFriends</h1>
               
                    <SearchBox searchChange={this.onSearchChange}/>    
               
                 <Scroll>
                <CardList robots= { filteredRobots }/>
                 </Scroll>
                </div>
            );
        }
         
    }

}

export default App;