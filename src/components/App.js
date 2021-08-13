// create your App component here
import React, {useState, useEffect} from "react";

function App(){
    const [dogImg, setDogImg] = useState("");

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response) => response.json())
        .then((data) => {
            setDogImg(data.message)
        });
    }, []);

    if (!dogImg) return <p>Loading...</p>
    return(
        <img alt="A Random Dog" src={dogImg}></img>
    )
    };

export default App;