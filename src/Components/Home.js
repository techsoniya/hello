import React from 'react'
import { Link } from 'react-router-dom'
import { Carousel } from 'react-bootstrap';
import pic from "./1.jpg";
import pic1 from "./3.jpg";
import pic2 from "./second2.jpg";
import "./Home.css"
export const Home = () => {
  return (
    <>
        
         <div>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block "
          src={pic}
          alt="First slide" 
        />
        <Carousel.Caption>
          <h3 id='text'>"A recipe has no soul. You, as the cook, must bring the soul to the recipe." - Thomas Keller</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={pic1}
          alt="Second slide" 
        />
        <Carousel.Caption>
          <h3 id='text'>"Laughter is brightest in the place where food is." -  Irish Proverb</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block "
          src={pic2}
          alt="Third slide" 
        />
        <Carousel.Caption>
          <h3 id='text'>“The way you make an omelet reveals your character.”– Anthony Bourdain</h3>
          
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
    </>
  )
}
export default Home