import React from 'react'
import { Navbar } from 'react-bootstrap'

const Nav = () => {
  return (
    <div style={{position:"sticky",top:"0vh",zIndex:"10000000000000"}}>
        <nav class="navbar navbar-light bg-light justify-content-between">
             <a class="navbar-brand">Navbar</a>
                <form class="form-inline">
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </nav>
    </div>
  )
}

export default Nav