import React from 'react';
import me from '../images/me.jpg'

const Home = () => {
return (
	<div
    style={{
      width: '100%',
      textAlign: 'center',
    }}
	>
    <div style={{display: 'inline-block'}}>
      <div style={{display: 'flex'}}>
        <div 
          style={{
            maxWidth: '400px',
            margin: '100px 80px 40px 40px',
          }}
        >
          <h1 style={{textAlign: 'center', marginBottom: '50px'}} >
            Welcome to my website!
          </h1>
          <p style={{textAlign: 'center', fontSize: '18px', maxWidth: '360px'}} >
            My name is Jonathan Lane-Smith. I am a haptics firmware engineer at Apple, a graduate of the University of Waterloo 
            and McGill University, and a lover of all things music. Click the images below  to learn more about me!
          </p>
        </div>
        <div
          style={{
            width: '300px',
            textAlign: 'center',
            margin: '60px 40px 40px 80px'
          }}
        >
          <img 
            style={{
              height: '300px', 
              marginTop: '20px',
              borderRadius: '10px'
            }} 
            src={me} alt="Me" 
          />
        </div>
      </div>
    </div>
	</div>
);
};

export default Home;
