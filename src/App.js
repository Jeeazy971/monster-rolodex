import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';

export class App extends Component {
    constructor() {
        super();

        this.state = {
            monsters: [],
            searchFields: '',
        };

        // this.HandleChange = this.HandleChange.bind(this);
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users#')
            .then((response) => response.json())
            .then((users) =>
                this.setState({
                    monsters: users,
                }),
            );
    }

    HandleChange = (e) => {
        this.setState({ searchFields: e.target.value });
    };

    render() {
        const { monsters, searchFields } = this.state;
        const filteredMonsters = monsters.filter((monster) =>
            monster.name.toLowerCase().includes(searchFields.toLowerCase()),
        );

        return (
            <div className="App">
                <h1>Monsters Rolodex</h1>
                <SearchBox
                    placeholder="Recherche de monstre"
                    handleChange={this.HandleChange}
                />
                <CardList monsters={filteredMonsters} />
            </div>
        );
    }
}

export default App;
