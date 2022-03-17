import React, { useEffect, useState } from "react";
import "./Characters.css";
import SearchBar from "./SearchBar";
// import Modal from "./Modal";
import Card from "./Card";

function Characters() {
  const [characters, setCharacters] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setloading] = useState(true);
  // const [openModal, setOpenModal] = useState(false);



  const fetchData = () => {
    fetch("https://rickandmortyapi.com/api/character/")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log("data", data.results);
        setCharacters(data.results);
        setloading(false);


      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  useEffect(() => {
    fetchData();

    }, []);

const getInput = (event) => {
console.log("onchange works", event.target.value);
setInput(event.target.value)
}
// function clickMe(event){
//   alert('you clicked me')

// };

const result = characters.filter(val =>
  val.name.toLowerCase().includes(input.toLowerCase())
)
console.log(result)

  return (
    <div className="myCharacters">
      {/* <div className ="search-bar"> */}
      {/* <input onChange={getInput}  type="text" placeholder="Search" /> */}
      <SearchBar getInput={getInput}/>
    {/* </div> */}
      {

        !loading && (result.map((character) => {

          return (
            // <div key={character.name} className="card">
            //   {/* <SearchBar charactersNames={character.name}/> */}
            // <img className="character-img"src={character.image} alt="" />
            // <div>

            // <button className="myButton" onClick={() => {setOpenModal(true)}} >Learn More</button>
            // {openModal && <Modal onClose={() => setOpenModal(false)} openModal={openModal}
            // status={character.status}
            // species={character.species}
            // name={character.name}
            // />}
            // </div>

            // </div>
             <div key={character.name}>
               <Card  character={character}/>
             </div>
          )
        }))
      }
    </div>
  );
}

export default Characters;
