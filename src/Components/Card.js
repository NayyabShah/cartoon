import React, { useState } from 'react'
import Modal from './Modal'

function Card(props) {

  const [openModal, setOpenModal] = useState(false);


  return (
    <div key={props.character.name} className="card">
              {/* <SearchBar charactersNames={character.name}/> */}
            <img className="character-img"src={props.character.image} alt="" />
            <div>

            <button className="myButton" onClick={() => {setOpenModal(true)}} >Learn More</button>
            {openModal && <Modal onClose={() => setOpenModal(false)} openModal={openModal}
            status={props.character.status}
            species={props.character.species}
            name={props.character.name}
            />}
            </div>

            </div>
  )
}

export default Card
