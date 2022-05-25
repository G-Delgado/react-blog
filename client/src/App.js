import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([]);

  async function getUsers() {
      return await fetch("/api")
      .then(res => res.json())
      .then(data => {
        console.log(data.users)
        setBackendData(data)
      })
  }

  useEffect(() => {
    console.log("Sape")
    getUsers()
  },[])

  return (
    <div>
      {
      (typeof backendData.users === 'undefined') ? (
        <p>Loading...</p>
      ) : (
        backendData.users.map((element, index) => {
          console.log(element)
          return <p key={index}>{element}</p>;
        }
      ))}

    </div>
  );
}

export default App;
