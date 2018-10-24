import React, { Component } from 'react';
import './App.css';
import { chappelles } from './assets/images.json';


import Navbar from './components/Navbar';

console.log('chappelles', chappelles);

class App extends Component {

  state = {
    //chappelles: chappelles, // the exact same things as below (just shorthand)
    chappelles,
    clicked: [],
    topScore: 0,
  }

  handleImageClick = (imageId) => {
    console.log('imageId', imageId);

    let { clicked } = this.state;
    if (clicked.includes(imageId)) {
      alert('You lost, play again?');
      if (this.state.topScore < clicked.length) {
        this.setState({ topScore: clicked.length });
      }
      clicked = [];
    } else {
      clicked.push(imageId);
    }

    this.setState({ clicked });

    this.shuffleImages();
  }

  /*
    any time you deal with React state you typically do these 3 things (in order)
    1. Take property out of the state
    2. Manipulate/modify that property
    3. Put property back into state
  */

  shuffleImages = () => {
    let { chappelles } = this.state;

    for (let i = chappelles.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [chappelles[i], chappelles[j]] = [chappelles[j], chappelles[i]];
    }
    
    this.setState({ chappelles});

  }

  render() {
    return (
      <div className="container">
        <Navbar
          score={this.state.clicked.length}
          topScore={this.state.topScore}
        />
        <div
          className="row"
          style={{
            paddingTop: '64px',
          }}
        >
        {
          this.state.chappelles.map((chappelle) => {
            return (
              <div
                key={chappelle.id}
                onClick={() => this.handleImageClick(chappelle.id)}
                style={{
                  border: '2px solid gray',
                  cursor: 'pointer',
                  margin: '5px',
                  padding: '10px',
                }}
              >
                <img
                  alt="chappelle"
                  src={chappelle.url}
                  style={{
                    height: '200px',
                    width: '200px',
                  }}
                />
              </div>
            )
          })
        }
        </div>
      </div>
    );
  }
}

export default App;
