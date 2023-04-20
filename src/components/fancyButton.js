import { useNavigate } from "react-router-dom"
import { useState } from 'react';

import waterloo from '../images/waterloo.png'
import mcgill from '../images/mcgill.png'

const FancyButton = (props) => {
  const navigate = useNavigate()
  const onClickHandler = () => navigate(`/work`)

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
      height: '120px',
      borderStyle: 'solid',
      borderRadius: '20px',
      cursor: 'pointer',
      backgroundColor: hover? '#dddddd' : ''
    }}>
      <h3 style={{margin: '15px 0px 15px 0px'}}>{props.title}</h3>
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
    </div>
  );
  };
  
  export default FancyButton;
  