import axios from 'axios';
import React, { useEffect, useState } from 'react'
import './App.css';
import Header from './components/Header';
import Home from './pages/Home'


function App() {
  const [contacts, setContacts] = useState([]);
  const [id, setId] = useState(-1);
  useEffect(() => {

    async function fetchContacts(){

      if (id === -1 || id === ""){
        const request = await axios.get("https://jsonplaceholder.typicode.com/users");
        setContacts(request.data);
      }
      else {
        const request = await axios.get(`https://jsonplaceholder.typicode.com/users?id=${id}`);
        setContacts(request.data);
      }
    }

    fetchContacts();

  }, [id]);

  function search(input){
    setId(input);
  }

  return (
    <div className="App">
      <Header onPress={search}></Header>
      <Home data={contacts}></Home>
    </div>
  );
}

export default App;
