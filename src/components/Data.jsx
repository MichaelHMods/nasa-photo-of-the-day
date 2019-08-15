import React, { useState, useEffect } from React;

import axios from "axios";

function Data(){
    useEffect(() => {
        const fetchData = () =>
          axios
            .get('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
            .then(res => console.log(res))
    }) .catch(error => console.log(error))
,[]}

fetchData();


