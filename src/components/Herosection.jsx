import React, {useState} from 'react'
import './herosection.css'
import Visited from './Visited'
import { CiLocationOn } from "react-icons/ci";
import { FaFontAwesomeFlag } from "react-icons/fa";
import Popular from './Popular';
import Mainsection from './Mainsection';
import Star from './Star';
import { NavLink } from 'react-router-dom';

function Herosection() {


    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === Popular.length - 1 ? 0 : prevIndex + 1
      );
    };
  
    const prevSlide = () => {
      setCurrentIndex((prevIndex) =>
        prevIndex === 0 ? Popular.length - 1 : prevIndex - 1
      );
    };   


  return (

    <>

    <div className="video">
    <video src="videos/beach.mp4" muted autoPlay loop type="video/mp4">
    Your browser does not support the video tag.
    </video>
    </div>

    <div className="hero-text">
        <h2>Welcome to Travella!</h2>
        <p>Travella helps you making your travel plan.</p>
    </div>

        <Mainsection/>

    
     <div className="visited">        
        <div className="visited-heading"> <h2>Most Visited Destination</h2></div>
            <p className='explore'>Explore top destinations voted by travellers</p>
        <div className="visited-container">            
            {
            Visited.map((curElem) => {
                    const {id, country, text, image, budget, place}  = curElem;
                return(
                        <>
                        <div className="visited-card-container"   key={id}  >                   
                            <div className="visited-image-container">
                                <img src={image} ></img>
                            </div>
                            <div className="cntry">          
                            <div className="cntry-name">
                                {/* <div className="icon"><FaFontAwesomeFlag /></div> */}
                                <h3>{country}</h3>  
                            </div>
                            <div className="bud-plc">
                            <div className="place">
                                <div className="icon"><CiLocationOn /></div>
                                <h3> {place}</h3>
                            </div>
                            <NavLink className="toplans" to='/plans'>
                            <div className="budget">
                                    <p> $ {budget} </p>
                            </div> 
                            </NavLink>                                                       
                            </div>  
                            <br></br>
                            <hr></hr>  
                            <div className="place-details">
                                    {text}
                            </div>
                            </div>                                                                   
                        </div>                 
                        </>
                    )
                })
            }

        </div>
        </div>  



        <div className="popular">        
        <div className="popular-heading"> <h2>Popular Tours</h2></div>
            <p className='explore'>Popular tours rated by travellers</p>
        <div className="popular-container"> 

        <button className="prev" onClick={prevSlide}>
        &#10094;
        </button>

        {

            Popular.map((curElem , index) => {
                    const {id, tour, stay, image, place, stars}  = curElem;
                return(
                        <>
                        <div className={`popular-card-container ${index === currentIndex ? 'slide active' : 'slide'}`}  key={id}>                   
                            <div className="popular-image-container">
                                <img src={image} ></img>
                            </div>
                            <div className="cntry">          
                            <div className="cntry-name">
                                <h3>{place}</h3>  
                            </div>
                            <div className="bud-plc">
                            <div className="place">
                                <h3> {stay}</h3>
                            </div>

                            <NavLink className="toblog" to="/blogs">
                            <div className="budget">
                                    <p> {tour} </p>
                            </div>
                            </NavLink>  

                            </div>  
                            <br></br>
                            <hr></hr> 
                            <div className='stars'> <Star stars ={stars}/></div> 
                            </div>                                                                   
                        </div>                 
                        </>
                    )
                })
            } 

      
      <button className="next" onClick={nextSlide}>
        &#10095;
      </button>
        
        </div>
        </div>    



    </>
  )
}

export default Herosection