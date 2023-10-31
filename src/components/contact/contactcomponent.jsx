import './contactcomponent.css'
import {Linkedin, Instagram, Envelope , Phone ,Github, Twitter} from 'react-bootstrap-icons'
export default function Contact(){
  return(
    <>
      <h1 className='contact-section-top-heading'>Let's have a Chat</h1>
      <p className='contact-section-top-pehra'></p>
    <section className='contact-section-main'>
    <div className='contact-section-left'> 
      <p><Envelope className='contact-section-icon' style={{height:'1.5rem',width:'auto'}} /> <a href='mailto:sagar302001@gmail.com'>sagar302001@gmail.com</a></p>
      <p><Phone className='contact-section-icon' style={{height:'1.5rem',width:'auto'}} /> <a href='tel:+919350572047'>+91 9350572047</a></p>
      <span><a href='https://www.linkedin.com/in/sagar-kaushik-093081205'><Linkedin className='contact-section-icon' style={{height:'1.5rem',width:'auto',margin:' 0 1.5rem'}} /></a>
            <a href='https://github.com/Sagar-30'><Github className='contact-section-icon' style={{height:'1.5rem',width:'auto',margin:' 0 1.5rem'}} /> </a>
      <a href='https://twitter.com/i/flow/login?redirect_after_login=%2FSagarKaushik1'><Twitter className='contact-section-icon' style={{height:'1.5rem',width:'auto',margin:' 0 1.5rem'}} /></a></span>
    </div>
      <div className='contact-section-right'>
      <form>
        <input type='text' placeholder='Name Here*'/>
        <input type='email' placeholder='Email Here*'/>
        <textarea placeholder='Message Here*'/>
        <button>Submit</button>
      </form>
      </div>
    </section>
      </>
  )
}