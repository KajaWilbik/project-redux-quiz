/* eslint-disable linebreak-style */
import React from 'react'
import { Link } from 'react-router-dom'
import { Container, StartButton } from 'Globalstyles'
import FriendsLogo from '../assets/FriendsLogo.svg'

export const StartPage = () => {
  return (
    <Container>
      <img src={FriendsLogo} className="logo" alt="logo" />
      <h1>- How much do you know? -</h1>
      <Link to="/question"><StartButton type="button">START</StartButton></Link>
    </Container>

  )
}

