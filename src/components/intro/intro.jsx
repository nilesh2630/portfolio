import React from "react";
import "./intro.css";
import Github from "../../img/github.png";
import Linkedin from "../../img/linkedin.png";
import Instagram from "../../img/instagram.png";
import Vector1 from "../../img/Vector1.png";
import Vector2 from "../../img/Vector2.png";
import boy from "../../img/boy.png";
import thumbup from "../../img/thumbup.png";
import Crown from "../../img/crown.png";
import glassimoji from "../../img/glassesimoji.png";
import FloatingDiv from "../floatingdiv/floatingdiv";
const intro = () => {
  return (
    <div className="intro">
      <div className="i-left">
        <div className="i-name">
          <span>hy! i am
          <br/>
          Nilesh Gupta
          
          </span>
       
          <span>
            Mern stack developer
          </span>
        </div>
<a href="mailto:ng,niesh123@gmail.com">
        <button className="i-button button">hire me</button>
</a>
        <div className="i-icons">
          <a href="https://github.com/nilesh2630" target="_blank" rel="noopener noreferrer">
            <img src={Github} alt="GitHub" />
          </a>
          <a href="www.linkedin.com/in/nil26" target="_blank" rel="noopener noreferrer">
            <img src={Linkedin} alt="LinkedIn" />
          </a>
          
        </div>
      </div>
      <div className="i-right">
        <img src={Vector1} />
        <img src={Vector2} />
        <img style={{width:350}} src={boy} alt="" />
        <img src={glassimoji} alt="" />
        <div style={{ top: "-4%", left: "68%" }}>
          <FloatingDiv image={Crown} txt1="Web" txt2="Developer" />
        </div>
       
        <div className="blur" style={{ background: "rgb(238 210 255)" }}></div>

        <div
          className="blur"
          style={{
            background: "#C1F5FF",
            top: "17rem",
            width: "21rem",
            height: "11rem",
            left: "-9rem",
          }}
        ></div>
      </div>
    </div>
  );
};

export default intro;
