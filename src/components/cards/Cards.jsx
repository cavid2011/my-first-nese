import React from 'react'
import './Cards.scss'
import imgPlus from '../img/Group 17.png'
import img1 from '../img/Ellipse 1 (8).png'
import img2 from '../img/Ellipse 1 (9).png'
import img3 from '../img/Ellipse 1 (10).png'
import img4 from '../img/Ellipse 1 (11).png'
import img5 from '../img/Ellipse 1 (12).png'
import img6 from '../img/Ellipse 1 (13).png'

const Cards = () => {
  return (
    <section>
        <div className="card-plus">
        <img src={imgPlus}/>
        <h4>Create Group</h4>
        </div>
        <div className="card">
            <img src={img1} alt="" />
            <h2>Cuisine</h2>
            <h4>36 members</h4>
        </div>
        <div className="card">
            <img src={img2} alt="" />
            <h2>Art</h2>
            <h4>9 members</h4>
        </div>
        <div className="card">
            <img src={img3} alt="" />
            <h2>Workout</h2>
            <h4>27 members</h4>
        </div>
        <div className="card">
            <img src={img4} alt="" />
            <h2>Gaming</h2>
            <h4>105 members</h4>
        </div>
        <div className="card">
            <img src={img5} alt="" />
            <h2>Hiking</h2>
            <h4>97 members</h4>
        </div>
        <div className="card">
            <img src={img6} alt="" />
            <h2>Yoga</h2>
            <h4>65 members</h4>
        </div>
    </section>
  )
}

export default Cards