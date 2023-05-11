import React from 'react';
import me from '../images/me.jpg'
import FancyButton from '../components/fancyButton';

const Home = () => {
return (
	<div
    style={{
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
          <p style={{textAlign: 'center', fontSize: '18px', maxWidth: '400px'}} >
            My name is Jonathan Lane-Smith. I am a haptics firmware engineer at Apple, a graduate of the University of Waterloo 
            and McGill University, and a lover of all things music. 
            <br/>
            <br/>
            Click the images below  to learn more about me!
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
    <div style={{
      display: 'flex', 
      alignItems: 'center',
      justifyContent: 'center'
      }}>
      <div 
        style={{
          display: 'flex',
          width: '100%',
          maxWidth: '1000px',
          marginTop: '50px'
        }}
      >
        <FancyButton title={"Education"}/>
        <FancyButton title={"Work"}/>
        <FancyButton title={"Side Projects"}/>
        <FancyButton title={"Music"}/>
      </div>
    </div>
    <div style={{marginTop: '60px'}}>
      <FancyButton title={"Resume/CV"}/>
    </div>
	</div>
);
};

export default Home;
