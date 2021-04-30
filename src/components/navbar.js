import React from 'react'
import Link from 'react-router-dom/Link'

// MUI Imports
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'

function Navbar() {
  return (
    <div>
      <AppBar >
        <Toolbar className="nav-container">
          <Button color="inherit" component={Link} to="/">Facts</Button>
          <Button color="inherit" component={Link} to="/gallery">Images</Button>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar