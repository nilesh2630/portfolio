import React from 'react'
import './services.css'
import HeartEmoji from "../../img/heartemoji.png"
import Glasses from "../../img/glasses.png"
import Humble from "../../img/humble.png"
import Card from '../card/card'
import resume from './finalcv.pdf'
const Services = () => {
    return (<>
        <div  className='services' style={{position:"relative", display:'flex', flexDirection:'row', width:"100%"}}>
            <div className='awesome' style={{flex:1}}>
                <span>
                    About Me
                </span>
                <span>

                </span>
                <span style={{
                    width: "80%", wordWrap: 'break-word',
                    overflowWrap: 'break-word',
                }}>
                    Hello! I'm Nilesh Gupta, a passionate web developer currently pursuing a BTech degree from Lovely Professional University (LPU), with an expected graduation in 2025. I thrive on exploring new technologies and staying up-to-date with the latest trends in web design.

                    My journey in web development has been both exciting and fulfilling, and I’m always eager to embrace new challenges and expand my skill set. Beyond the realm of coding.


                </span>
                <a href={resume} download>
                    <button className='button s-button'>Download cv

                    </button></a>
                <div className='blur s-blurl' style={{ background: "#ABF1FF94" }}></div>
            </div>


       <div style={{flex:1,position:"relative", left:"30%"}}>
            <div className='cards' >

                <div style={{ top: "12rem", left: '-4rem' }}>
                    <Card emoji={Glasses} heading={'Developer'} detail={"Html, Css, JavaScript, React"} />
                </div>
            </div>

            <div className='blur s-blur2' style={{ background: "var(--purple)" }}></div>
            </div>

        </div>
        </>
    )
}

export default Services