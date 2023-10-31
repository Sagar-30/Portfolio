import React, { useEffect, useState } from 'react';
import './aboutcomponent.css'
import Typewriter from "typewriter-effect";

export default function About(){

  return(
    <> 
      <div className='about-section-top-text'>
      <h3>About Me</h3>
        <p></p>
      </div>
          <section className='about-section-main'>
            <div className='about-section-left-section'>
              <img src='/About.jpg' alt='My Img' />
            </div>
            <div className='about-section-right-section'>
                <div className="typing">
                  <Typewriter

                      onInit={(typewriter) => {
                          typewriter
                              .typeString("Hi, My Name is Sagar Kaushik")
                              .pauseFor(1000)
                              .deleteAll()
                              .typeString("I am a Web Developer")
                              .start();
                      }}
                  />
            
                  </div>
              <div className='about-section-right-section-text'><p>Sagar began his journey as a student at Bharati Vidyapeeth Pune. With a focus on web development, he excelled in HTML, CSS, and JavaScript projects and showcased his skills in various Hackathons.<br />

                Graduating with a stellar 9.4 CGPA, Sagar joined Tata Technologies as a Solution Developer. His commitment to growth is evident through certifications, and he's currently expanding his expertise in backend development.
</p></div>
              </div>
                 </section>
    </>
    
  )
}
  