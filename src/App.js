import logo from './logo.svg';
import './App.css';
import { Component } from 'react';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: ''
    };
    console.log('constructor');
  }

  componentDidMount() {
    console.log('componentDidMount');
     fetch('https://jsonplaceholder.typicode.com/users')
     .then((response) => response.json())
     .then((user) => this.setState(() => {
      return {monsters: user}
     },
     () => {
      console.log(this.state);
     }
     ));
  }

  render() {
    console.log('render');

    const filteredMonsters = this.state.monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });

    return (
      <div className="App">
        <input 
          className='search-box' 
          type='search' 
          placeholder='search monsters' 
          onChange={(event) => {
            const searchField = event.target.value.toLowerCase();
            this.setState(
              () => {
              return { searchField };
            });
          }}
        />
        {filteredMonsters.map((monster) => {
            return (
              <div key={monster.id}>
                <h1>{monster.name}</h1>
              </div>
            );
        })}
      </div>
    );
  }
}

export default App;
