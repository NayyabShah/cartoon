import React from 'react'

function Modal(props) {
  const name = props.name
  const status = props.status
  const species = props.species

  console.log(props);
  // if(!props.closeModal) {
  //   return null
  // }

  return (
    <div className="myModal">
      <div className="modalInner">
<p>{name}</p>
<p>{status}</p>
<p>{species}</p>
</div>
<button className="closeButton" onClick={props.onClose}>Close</button>
    </div>

  )
}

export default Modal
