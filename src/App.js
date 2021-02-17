
import React, { useState, useEffect } from 'react';
import './App.css';
import Chat from "./Chat";
import Sidebar from "./Sidebar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Pusher from "pusher-js";
import axios from "./axios";
import { useStateValue } from "./StateProvider";
import Login from "./Login";

function App() {
  const [{user}, dispatch] = useStateValue();


  const [messages, setMessages] = useState([]);

  useEffect(() => {
    axios.get('/messages/sync').then((response) => {
      setMessages(response.data);
    });
  }, []);

  useEffect(() => {
    const pusher = new Pusher('e37285a2836ee135bbae', {
      cluster: 'ap2',
    });

    const channel = pusher.subscribe('messages');
    channel.bind('inserted', (newMessage) => {
      setMessages([...messages, newMessage]);
    });

    return () => {
      channel.unbind_all();
      channel.unsubscribe();
    };
  }, [messages]);

  console.log(messages);


  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
      <div className="app_body">
        <Router>
          <Sidebar />
          <Switch>
            <Route>
              <Chat messages={messages}/>
            </Route>
            <Route>
              <Chat />
            </Route>
          </Switch>
        </Router>

      </div>
      )}
    </div>
  );
}

export default App;
