
import { useState } from 'react';
import './App.css';
import Mainpage from './component/Mainpage';
import NavBar from './component/NavBar';

function App() {


  const [search,setSearch]=useState('')
  return (
    <div className="App">
      <NavBar setSearch={setSearch} search={search}/>
      <Mainpage search={search}/>
      
    </div>
  );
}

export default App;
