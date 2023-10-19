import React from 'react'
import "./Works.css"
import DevOps from "../../img/devops.png";
import Net from "../../img/microsoft-net.png";
import Symfony from "../../img/symfony.png";
import Tensor from "../../img/tensor.png";
import Scikit from "../../img/scikit.png";
import { themeContext } from '../../Context';
import { useContext} from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-scroll";

const Works = () => {
   const handleEmailClick = () => {
      window.location.href = "mailto:Dakoukyelmestapha@proton.me"; // Replace with your email address
    };

   const theme = useContext(themeContext);
   const darkMode = theme.state.darkMode;

     // React Spring animations
  const transition = { duration: 3500, type: "spring" };
  const mainCircleAnimation = useSpring({
    rotate: 0,
    from: { rotate: 45 },
    config: transition,
  });

  return (
    <div className="works">
          <div className="awesome">
            <span style={{color: darkMode? 'white': ''}}>All I Used</span>
            <span>Frameworks & Libraries</span>
            <spane> I have utilized frameworks such as Symfony, .NET,
                <br/>
                and Django, alongside Bootstrap for frontend development.
                <br/>
                Furthermore, in the realm of machine learning, 
                <br/>
                I have worked with libraries including NumPy, Pandas,
               <br/>
               Scikit-learn, Metapolit, NLTK, and TensorFlow.
            </spane>
            
              <button className="button s-button" onClick={handleEmailClick}>Talk Me</button>
           
            <div className="blur s-blur1" style={{background:"#ABF1FF94"}}></div>
        </div>

        <div className="w-right">
               <animated.div
                  style={mainCircleAnimation}
                  className="w-mainCircle">
                <div className="w-secCircle">
                   <img src={DevOps} alt="" />
                </div>
                <div className="w-secCircle">
                   <img src={Net} alt="" />
                </div>
                <div className="w-secCircle">
                   <img src={Symfony} alt="" />
                </div>
                <div className="w-secCircle">
                   <img src={Tensor} alt="" />
                </div>
                <div className="w-secCircle">
                   <img src={Scikit} alt="" />
                </div>
                </animated.div>
               


                <div className="w-backCircle blueCircle">

                </div>
                <div className="w-backCircle brubleCircle">

                </div>


            </div>
        </div>
  )
}

export default Works