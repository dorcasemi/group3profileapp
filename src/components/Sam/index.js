import React from 'react';
import './index.css';
import profilepic from '../images/sam.jpeg';

const Sam = () => {
  return (
<>
<div className='mainContainer'>
    
    <div className='sub'>
    <div> 
        <img src={profilepic} className='ProPics'/>
    </div>
    <div className='NameContainer'>
    <h3 style={{fontSize:"34px", fontWeight:"bolder", marginTop:"16px"}}>Facilitator</h3>
    <p style={{marginLeft:"50px",fontSize:"17px"}}>Software Developer</p>
    <p style={{marginLeft:"55px"}}> SAMUEL KELECHI</p>
     </div>
     </div>
<div>
    <img/>
    <img/>
    <img/>
    <img/>
</div>
</div>
</>

  );
}

export default Sam;