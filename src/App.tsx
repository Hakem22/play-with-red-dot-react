import React from 'react';
import './App.css';
import { KeyboardKey } from "./keyboardKey";
import { RedDot } from "./redDot";

const Dot = () => {
    return <span className="dot"></span>
}

class App extends React.Component {
    dot = { x: false, y: false } as RedDot
    
    handleKeyDown = (event: React.KeyboardEvent<HTMLElement>) => {
        if (event.key === KeyboardKey.UP) this.dot.y = false;
        else if (event.key === KeyboardKey.DOWN) this.dot.y = true;
        else if (event.key === KeyboardKey.LEFT) this.dot.x = false;
        else if (event.key === KeyboardKey.RIGHT) this.dot.x = true;

        this.setState(this.dot);
    };
  render() {
       
      return (
          <div tabIndex={0} onKeyDown={this.handleKeyDown} className="App">
              <div  className="content">
                  <h1>Use arrow keys to move the dot</h1>
                  <table>
                      <tr>
                          <td>{ !this.dot.x && !this.dot.y && <Dot/> }</td>
                          <td>{ this.dot.x && !this.dot.y && <Dot/> }</td>
                      </tr>
                      <tr>
                          <td>{ !this.dot.x && this.dot.y && <Dot/> }</td>
                          <td>{ this.dot.x && this.dot.y && <Dot/> }</td>
                      </tr>
                  </table>
              </div>
      </div>)
  };
}

export default App