import React, { useState, useEffect } from 'react'
import { FaAngleDoubleRight } from 'react-icons/fa'
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [loading,setLoading] = useState(false);
  const [isiList,setIsiList] = useState([]);

  const ambilData = async() => {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    setIsiList(data);
  }

  return (
  <h2>tabs project setup</h2>
  );
}

export default App
