import React from 'react';
import './experience.css';
import talkzone from "../../img/talkzone.png";
import keeper from "../../img/keeper.png";

const Experience = () => {
  return (
    <div style={{position:'relative', marginTop:"40%"}}>
    <div style={{position:"relative",top:"10%", display: 'flex', flexDirection: 'row', gap: '1rem', flexWrap: 'wrap' }}>
      <div className="experience-card" style={{width:"50%", flex: 1 }}>
        <img src={talkzone} alt="Talkzone" style={{ width: '100%' }} />
        <div className="container" style={{ wordBreak: 'break-word' }}>
          <h4><b>TalkZone</b></h4>
          <p>Built with MERN stack and Socket.IO, featuring group creation and deletion.</p>
          <a href='https://talkzone-smoky.vercel.app/' target="_blank" rel="noopener noreferrer">
            <button className="i-button button">Visit Site</button>
          </a>
        </div>
      </div>
      <div className="experience-card" style={{width:"50%", flex: 1 }}>
        <img src={keeper} alt="keeper" style={{ width: '100%' }} />
        <div className="container" style={{ wordBreak: 'break-word' }}>
        <h4><b>Keeper</b></h4>
          <p>
            A to-do list application built with the MERN stack and Socket.IO, featuring CRUD operations for task management.
          </p>
          <a href='https://keepers-theta.vercel.app/' target="_blank" rel="noopener noreferrer">
            <button className="i-button button">Visit Site</button>
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Experience;
