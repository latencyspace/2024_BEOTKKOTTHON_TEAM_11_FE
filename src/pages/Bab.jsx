import React from 'react'
import { Link } from 'react-router-dom';

function WaitBab() {
  return (
    <Container>
            <p>{getLoginText()}</p>
            <Link to="/confirmbab">Confirmbab</Link>
        </Container>
  )
}

export default WaitBab
