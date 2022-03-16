import React from 'react'

function Modal(props, closeModal) {
  const name = props.name
  const status = props.status
  const species = props.species

  if(!props.closeModal) {
    return null
  }

  return (
    <div className="myModal">
      <div className="modalInner">
<p>{name}</p>
<p>{status}</p>
<p>{species}</p>
</div>
<button className="closeButton" onClick={() => props.onClose}>Close</button>
    </div>

  )
}

export default Modal
