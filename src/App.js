import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Images from "./components/Images";
import styled from 'styled-components'


const AppContainer = styled.div`
    max-width: 1200px;
    width: 100%;
    background: white;
    // border: 1px solid red;
  `
  const Header1 = styled.h1`
  font-size: 1.6rem;
  justify-content: center;
  color: pink;
  `




function App() {
  const [nasaState, setNasaState] = useState();
  useEffect(() => {
    const fetchData = () => {
      axios.get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
      .then(response => {
        const test = response.data
        console.log(response.data)
        setNasaState(test);
      })
      .catch(error => {
        console.log(error)
      })
    };
    fetchData();
  },[])
      
    console.log(nasaState)        
    if (!nasaState) {return <h1>loading</h1>}
    else {

  return (
    <AppContainer>
     <Header1>{nasaState.title}</Header1>
      <p>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
      <Images myImage = {nasaState.url} myTitle = {nasaState.title} />

    </AppContainer>
  )};
}

export default App;
