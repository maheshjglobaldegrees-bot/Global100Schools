import React from 'react'
import { Link } from 'react-router-dom'
import '../css/home.css'
import Event from './Event'
import Schools from './Schools'

const topIcons = [
  { src: "/flag/USA.webp", alt: "USA", link: "/destinations/usa" },
  { src: "/flag/ukflag.webp", alt: "UK", link: "/destinations/uk" },
  { src: "/flag/australia.webp", alt: "Australia", link: "/destinations/australia" },
]

const bottomIcons = [
  { src: "/flag/Canada.webp", alt: "Canada", link: "/destinations/canada" },
  { src: "/flag/Ireland.webp", alt: "Ireland", link: "/destinations/ireland" },
  { src: "/flag/Newzeland.webp", alt: "New Zealand", link: "/destinations/newzealand" },
]

const generatePositions = (count, minY, maxY) => {
  const positions = []
  const stepX = 100 / (count + 1)
  for (let i = 0; i < count; i++) {
    const x = -50 + stepX * (i + 1)
    const y = minY + Math.random() * (maxY - minY)
    positions.push({ x, y })
  }
  return positions
}

const Home = () => {
  const width = window.innerWidth
  let topPositions, bottomPositions, iconScale

  if(width < 480){ 
    topPositions = generatePositions(3, -35, -25)
    bottomPositions = generatePositions(3, 25, 35)
    iconScale = 0.45
  } else if(width < 768){ 
    topPositions = generatePositions(3, -30, -20)
    bottomPositions = generatePositions(3, 20, 30)
    iconScale = 0.55
  } else { 
    topPositions = generatePositions(3, -35, -20)
    bottomPositions = generatePositions(3, 20, 35)
    iconScale = 0.7
  }

  const renderIcons = (icons, positions) =>
    icons.map((icon, idx) => {
      const { x, y } = positions[idx]
      const rotate = Math.floor(Math.random() * 360) + "deg"
      const delay = Math.random() * 0.5
      return (
        <Link key={icon.alt} to={icon.link}>
          <img
            src={icon.src}
            alt={icon.alt}
            className="floating-icon"
            style={{
              "--dx": x,
              "--dy": y,
              "--rotate": rotate,
              "--fx": `${x}vw`,
              "--fy": `${y}vh`,
              "--delay": `${delay}s`,
              "--scale": iconScale
            }}
          />
        </Link>
      )
    })

  return (
    <>
      {/* Hero Section */}
      <div className="hero-section text-center py-5">

        {/* Top floating icons */}
        <div className="floating-icons">
          {renderIcons(topIcons, topPositions)}
        </div>

        {/* Hero text */}
        <div className="hero-text container d-flex justify-content-center align-items-center flex-column">
          <h1 className="display-4 fw-bold text capital mb-4">
            You Can Get Admitted Into <span className="text-danger">70 University</span> Across The World
          </h1>
          <Link to="/contactus">
            <button className="btn btn-lg px-5 text border-danger">
              Book 30 Minutes Session
            </button>
          </Link>
        </div>

        {/* Bottom floating icons */}
        <div className="floating-icons">
          {renderIcons(bottomIcons, bottomPositions)}
        </div>
      </div>

      {/* Event Section */}
      <Event />
      <Schools/>
    </>
  )
}

export default Home