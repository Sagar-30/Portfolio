import './skillcomponent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3, faJs, faReact, faBootstrap } from '@fortawesome/free-brands-svg-icons';

export default function Skill() { 
  return (

    <section className='top-both-skills'>

      <section className='skills-section-main'>
        <div className='skills-section-top-text'>
          <h3>Skills</h3>
          <p></p>
        </div>
        <div className='skills-section-bottom-div'>
          <div className='skills-section-bottom-language'>
            <div className='skills-section-bottom-language-left'>
              <p></p>
              <h5></h5>
            </div>
            <div className='skills-section-bottom-language-right'>
              <p>Html 5</p>
              <FontAwesomeIcon className='skill-section-svg' icon={faHtml5} beatFade />
            </div>
          </div>

          <div className='skills-section-bottom-language'>
            <div className='skills-section-bottom-language-left'>
              <p></p>
              <h5></h5>
            </div>
            <div className='skills-section-bottom-language-right'>
              <p>Css 3</p>
              <FontAwesomeIcon className='skill-section-svg' icon={faCss3} beatFade />
            </div>
          </div>

          <div className='skills-section-bottom-language'>
            <div className='skills-section-bottom-language-left'>
              <p></p>
              <h5></h5>
            </div>
            <div className='skills-section-bottom-language-right'>
              <p>Java Script</p>
              <FontAwesomeIcon className='skill-section-svg' icon={faJs} beatFade />
            </div>
          </div>

          <div className='skills-section-bottom-language'>
            <div className='skills-section-bottom-language-left'>
              <p></p>
              <h5></h5>
            </div>
            <div className='skills-section-bottom-language-right'>
              <p>React</p>
              <FontAwesomeIcon className='skill-section-svg' icon={faReact} beatFade />
            </div>
          </div>

          <div className='skills-section-bottom-language'>
            <div className='skills-section-bottom-language-left'>
              <p></p>
              <h5></h5>
            </div>
            <div className='skills-section-bottom-language-right'>
              <p>Bootstrap</p>
              <FontAwesomeIcon className='skill-section-svg' icon={faBootstrap} beatFade />
            </div>
          </div>

        </div>
      </section>

      {/* certificate start */}

      <section className='certificate-section-main'>
        <div className='certificate-section-top-text'>
          <h3>Certificate</h3>
          <p></p>
        </div>
        <div className='certificate-section-bottom-'>


          <div className='skills-section-bottom-language'>
            <div className='skills-section-bottom-language-left'>
              <p></p>
              <h5></h5>
            </div>
            <div className='skills-section-bottom-language-right'>
              <p>INTRODUCTION TO HTML</p>
              <h5 className='certificate-section-bottom-link-container'><a className='certificate-section-bottom-links' href='http://ude.my/UC-f6ff8134-b43e-4a38-b754-ec41c0d20136'>http://ude.my/UC-f6ff8134-b43e-4a38-b754-ec41c0d20136</a></h5>
            </div>
          </div>

          <div className='skills-section-bottom-language'>
            <div className='skills-section-bottom-language-left'>
              <p></p>
              <h5></h5>
            </div>
            <div className='skills-section-bottom-language-right'>
              <p>CSS & JAVA SCRIPT</p>
              <h5 className='certificate-section-bottom-link-container'><a className='certificate-section-bottom-links' href='http://ude.my/UC-64e0dce9-85e5-424e-8a71-7c519f3820c6'>http://ude.my/UC-64e0dce9-85e5-424e-8a71-7c519f3820c6</a></h5>
            </div>
          </div>

          <div className='skills-section-bottom-language'>
            <div className='skills-section-bottom-language-left'>
              <p></p>
              <h5></h5>
            </div>
            <div className='skills-section-bottom-language-right'>
              <p>FUNDAMENTALS OF JAVA SCRIPT</p>
              <h5 className='certificate-section-bottom-link-container'><a className='certificate-section-bottom-links' href='http://ude.my/UC-d70d4066-c8e0-4038-b815-3d224f8c1ee9'>http://ude.my/UC-d70d4066-c8e0-4038-b815-3d224f8c1ee9</a></h5>
            </div>
          </div>


          <div className='skills-section-bottom-language'>
            <div className='skills-section-bottom-language-left'>
              <p></p>
              <h5></h5>
            </div>
            <div className='skills-section-bottom-language-right'>
              <p>WEB DEVELOPMENT & DESIGN</p>
              <h5 className='certificate-section-bottom-link-container'><a className='certificate-section-bottom-links' href='http://ude.my/UC-7d20f2ce-eb70-496a-8d15-3f7e8cf532ea'>http://ude.my/UC-7d20f2ce-eb70-496a-8d15-3f7e8cf532ea</a></h5>
            </div>
          </div>


        </div>
      </section>


    </section>
  )
}