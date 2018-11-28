import React, {Component} from 'react';
import './App.css';

import Search from './components/search'
import UserInfo from './components/user-info'
import Actions from './components/actions'
import Repos from './components/repos'

class App extends Component {
    render() {
        return (
            <div className="App">

                <UserInfo/>

                <Search/>

                <Actions/>

                <Repos
                    className="repos"
                    title="My Public Repos"
                    repos={[{name: 'repo name', link: '#'}]}/>

                <Repos
                    className="starred"
                    title="My Starred Repos"
                    repos={[{name: 'repo name', link: '#'}]}/>

            </div>
        );
    }
}

export default App;
