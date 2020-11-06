import React, {useState} from 'react';
import Search from '../components/Search';
import Scroll from '../components/Scroll';
import CardList from '../components/CardList';
import {friends} from '../robots';
import '../assets/styles/containers/App.css';

const App = () => {

    const [field, setField] = useState({
        robots: friends,
        searchField: ''
    });

    const filteredrobots = field.robots.filter(robot => {
        return robot.username.toLowerCase().includes(field.searchField.toLowerCase());
    })

    const onSearchChange = event => setField(prevState => ({ ...prevState, searchField: event.target.value}));

    return (  
        <div className='container'>
            <div className="row">
                <div className="col-12">
                    <h1 className='text-center mt-3'>RobotFriends</h1>
                    <Search searchChange={onSearchChange} />
                    <Scroll>
                        <CardList robots={filteredrobots}/>
                    </Scroll>
                </div>
            </div>
        </div>
    );
}
 
export default App;