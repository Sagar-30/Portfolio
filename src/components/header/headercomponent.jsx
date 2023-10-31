import './headercomponent.css'
import {Linkedin} from 'react-bootstrap-icons' 
export default function Header(){
  return(
    <section className='header-section-main'>
      <div className='header-comp-img-section'>
        <img src='/profile-pic.png' alt=''/>
        <div>
        <h2>Sagar Kaushik</h2>
          <p>Web Developer...</p>
        </div>     
      </div>
      <div className='header-comp-right-section'>
        <span> <a href='https://www.linkedin.com/in/sagar-kaushik-093081205'><Linkedin className='header-linkedin-logo' style={{height:'1.5rem',width:'auto'}} /> </a> </span>
        <a href='https://www.linkedin.com/in/sagar-kaushik-093081205'><p>Follow me on Linkedin</p> </a>
      </div>
    </section>
  )
}