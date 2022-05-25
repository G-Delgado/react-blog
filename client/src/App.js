import React, { useEffect, useState } from "react";

function App() {
  const [backendData, setBackendData] = useState([]);

  async function getUsers() {
      // fetch("/api")
      // .then(res => res.json())
      // .then(data => setBackendData(data))
      // We can do it that way or
      return await fetch("/api")
      .then(res => res.json())
      .then(data => {
        console.log(data.users)
        setBackendData(data)
      })
  }

  // useEffect(() => {
  //   // If proxy works we don't need to put the whole route
  //   let data = fetch("/api").then(res => res.json())
  //   setBackendData(data)
  // }, [])
  // let data =  fetch("/api").then(res => res.json())
  // setBackendData(data)

  useEffect(() => {
    console.log("Sape")
    getUsers()
    // console.log(backendData.users)
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
