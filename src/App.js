import React from 'react';
import Header from './Header';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import TinderCards from './TinderCards'
import SwipeButtons from './SwipeButtons'
import Chats from './Chats'
import ChatScreen from './ChatScreen'
function App() {
  return (
    <div className="App">
      <Router>
        {/* Header */}
        
        <Switch>
        <Route path="/chat/:person">
        <Header backButton="/chats"/>
            <ChatScreen/>

          </Route>
        <Route path="/chats">
        <Header backButton="/"/>
            <Chats/>
          </Route>
          <Route path="/">
            <Header/>
            {/* card photo*/}
            <TinderCards />
            <SwipeButtons />
            {/* footer button */}
          </Route>
         
         
        </Switch>



        {/* char list screen */}
        {/* individual chat screen */}
      </Router>

    </div>
  );
}

export default App;
