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
      <NavLink to='/music' activeStyle>
        <NavText>Music</NavText>
      </NavLink>
      {/* <NavLink to='/faith' activeStyle>
        Faith
      </NavLink> */}
      <NavLink to='/resume' activeStyle>
        <NavText>Resume/CV</NavText>
      </NavLink>
      {/* Second Nav
      <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
		</NavMenu>
		{/* <NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn> */}
	</Nav>
	</>
);
};

export default Navbar;
