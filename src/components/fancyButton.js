import { useNavigate } from "react-router-dom"
import { useState } from 'react';

import waterloo from '../images/waterloo.png'
import mcgill from '../images/mcgill.png'

import apple from '../images/apple.png'
import autodesk from '../images/autodesk.png'
import gts from '../images/gts.png'

import music from '../images/music.png'
import messenger from '../images/messenger.png'
import minesweeper from '../images/minesweeper.png'

import guitar from '../images/guitar.png'
import piano from '../images/piano.png'

let linkDict = {
  "Education": "education",
  "Work": "work",
  "Side Projects": "sideprojects",
  "Music": "music",
  "Resume/CV": "resume"
}


const FancyButton = (props) => {
  const navigate = useNavigate()
  const onClickHandler = () => navigate("/" + linkDict[props.title])

  const [hover, setHover] = useState(false);
  const handleMouseEnter = () => {setHover(true);};
  const handleMouseLeave = () => {setHover(false);};

  return (
    <div 
    onClick={onClickHandler}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    style={{
      margin: 'auto',
      width: '150px',
      height: props.title === 'Resume/CV' ? '58px': '120px',
      borderStyle: 'solid',
      borderWidth: '2px',
      borderRadius: '20px',
      cursor: 'pointer',
      backgroundColor: hover? '#dddddd' : ''
    }}>
      <h3 style={{margin: '15px 0px 15px 0px'}}>{props.title}</h3>

      {props.title === "Education" && 
      <>
        <img 
          style={{
            height: '50px',
            marginRight: '10px',
            opacity: hover ? 0.8 : 1
          }} 
          src={waterloo} alt="University of Waterloo" 
        />
        <img 
          style={{
            height: '50px', 
            marginLeft: '10px',
            opacity: hover ? 0.8 : 1
          }} 
          src={mcgill} alt="McGill University" 
        />
      </>
      }

    {props.title === "Work" && 
      <>
        <img 
          style={{
            height: '40px',
            marginLeft: '7px',
            marginRight: '13px',
            opacity: hover ? 0.8 : 1
          }} 
          src={apple} alt="Apple" 
        />
        <img 
          style={{
            height: '35px', 
            opacity: hover ? 0.8 : 1
          }} 
          src={autodesk} alt="Autodesk" 
        />
        <img 
          style={{
            height: '30px', 
            marginLeft: '2px',
            opacity: hover ? 0.8 : 1
          }} 
          src={gts} alt="GTS" 
        />
      </>
      }   

      {props.title === "Side Projects" && 
      <div style={{marginTop: '20px'}}>
        <img 
          style={{
            height: '35px',
            marginRight: '10px',
            opacity: hover ? 0.8 : 1
          }} 
          src={music} alt="Music Note" 
        />
        <img 
          style={{
            height: '35px', 
            opacity: hover ? 0.8 : 1
          }} 
          src={messenger} alt="Facebook Messenger" 
        />
        <img 
          style={{
            height: '35px', 
            marginLeft: '10px',
            opacity: hover ? 0.8 : 1
          }} 
          src={minesweeper} alt="Minesweeper" 
        />
      </div>
      }   

    {props.title === "Music" && 
      <div style={{marginTop: '-10px'}}>
        <img 
          style={{
            height: '60px',
            marginLeft: '10px',
            transform: 'rotate(55deg)',
            opacity: hover ? 0.8 : 1
          }} 
          src={guitar} alt="Guitar" 
        />
        <img 
          style={{
            height: '45px', 
            marginLeft: '20px',
            opacity: hover ? 0.8 : 1
          }} 
          src={piano} alt="Piano" 
        />
      </div>
      }


    </div>
  );
  };
  
  export default FancyButton;
  