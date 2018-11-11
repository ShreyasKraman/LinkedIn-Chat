import React, { Component } from 'react';
import './App.css';
import { Sidebar } from "./containers/Sidebar"
import { MessagesList } from "./containers/MessageList"
import { AddMessage } from "./containers/AddMessage"

class App extends Component {
  render() {
    return (
      <div id="container">
        <Sidebar />
        <section id="main">
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    );
    // const authurl = "https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id=78gwuqg37yeke1&redirect_uri=http%3A%2F%2Flocalhost%3A3001%2Fchat%2Fauth&state=2522abcde12345&scope=r_basicprofile";
    //     return (
    //         <div className="App">
    //             <a href={authurl}><img src="signin.png" alt="Sign in with Linkedin"/></a>
    //         </div>
    //     );
  }
}

export default App;