import React from 'react'
import "../styles/reset.css"
import SB from '../components/sidebar/SB'
import Nav from '../components/nav/Nav'
import './MainPage.scss'
import Cards from '../components/cards/Cards'



const MainPage = () => {
  return (
    <div className="container">
      <Nav />
      <SB />
      <Cards/>
    </div>
  )
}

export default MainPage