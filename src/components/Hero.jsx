import React from 'react'
import hero from '../assets/hero_bg.png'
import Button from './Button'

function Hero() {
  return (
    <div className='hero'>
        <div className="hero__container container">
            <div className="hero__bg">
              {/* <img src={hero} alt="bg" /> */}
            </div>

            <div className='hero__text'>
                <h1>Test assignment for front-end developer</h1>
                <p>What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.</p>
                <Button>Sign up</Button>
            </div>
        </div>
    </div>
  )
}

export default Hero