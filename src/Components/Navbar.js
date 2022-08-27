import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {
  const titleChange = ()=>{
    document.title = 'Textutils- About'
  }
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode}`}>
  <div className="container-fluid ">
    <Link className={`navbar-brand text-${props.mode === 'light'?'dark':'light'}`} to="/">{props.tittle}</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode === 'light'?'dark':'light'}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link active text-${props.mode === 'light'?'dark':'light'}`} onClick={titleChange} to="/about">{props.about}</Link>
        </li>
        
      </ul>
      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
        <input className="form-check-input bg-success" id='flexSwitchCheckDefault' type="checkbox" placeholder="Search" aria-label="Search" onClick={props.modeGreenToggle} />
      </div>
      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
        <input className="form-check-input bg-primary" id='flexSwitchCheckDefault' type="checkbox" placeholder="Search" aria-label="Search" onClick={props.modeBlueToggle} />
      </div>
      <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
        <input className="form-check-input bg-dark" id='flexSwitchCheckDefault' type="checkbox" placeholder="Search" aria-label="Search" onClick={props.toggleDarkMode} />
      </div>
    </div>
  </div>
</nav>
  )
}

Navbar.propTypes = {
  tittle : PropTypes.string.isRequired, 
  about : PropTypes.string.isRequired
}
Navbar.defaultProps = {
  tittle : 'Set title here',
  about : "About text goes here"
}