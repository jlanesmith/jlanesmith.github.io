import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NameTitle,
NavText,
// NavBtn,
// NavBtnLink,
} from './NavbarElements';
import me from '../../images/me.jpg'

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
    <NameTitle>
      <img 
        style={{
          height: '40px', 
          borderRadius: '10px',
          marginRight: '20px'
        }} 
        src={me} alt="Me" 
      />
      <div style={{fontSize: 20}}> Jonathan Lane-Smith </div>
    </NameTitle>

		<NavMenu>
      <NavLink to='/' activeStyle>
        <NavText>Home</NavText> 
      </NavLink>
      <NavLink to='/education' activeStyle>
        <NavText>Education</NavText>
      </NavLink>
      <NavLink to='/work' activeStyle>
        <NavText>Work</NavText>
      </NavLink>
      <NavLink to='/sideprojects' activeStyle>
        <NavText>Side Projects</NavText>
      </NavLink>
      <NavLink to='/music' activeStyle>
        <NavText>Music</NavText>
      </NavLink>
      <NavLink to='/resume' activeStyle>
        <NavText>Resume/CV</NavText>
      </NavLink>
		</NavMenu>
	</Nav>
	</>
);
};

export default Navbar;
