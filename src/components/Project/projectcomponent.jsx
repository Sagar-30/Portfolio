import {useState} from 'react';
import './projectcomponent.css'
export default function Project(){
  const[project,setproject] = useState(  
                                       [{'id':1,'img':'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/scooter-rental-flyer-design-template-59a4859e69ffa9420d27eec611f1a779_screen.jpg?ts=1636994744','title':'Bike Rental Website','description':'Experience the convenience of our React-powered Bike Rental Website , connecting you to a world of cycling adventures with ease. Discover a world of bike rentals at your fingertips.Your next adventure is just a click away! . Seamlessly discover and select bike rentals, putting your next adventure just a click away','url':'https://agar-30.github.io/index.html'},
                                       {'id':2,'img':'https://media.istockphoto.com/id/1268417452/photo/coronavirus-tax-relief-words-on-the-medical-mask.jpg?s=1024x1024&w=is&k=20&c=B9vxz6iPXnEjEA_Ne-b6lZNWJQUHhph9zppveqsQKWg=','title':'COVID Relief Fund Website','description':'I created a COVID Relief Fund website that incorporated API integration for secure online donations. Using HTML, CSS, and JavaScript, I developed a user-friendly platform that connected donors with the cause, contributing to COVID-19 relief efforts while enhancing my frontend skills','url':'https://agar-30.github.io/index.htm:'},
                                       {'id':3,'img':'/clone-website.png','title':'UsabilityHub Website clone','description':'I developed a clone website modeled after a professional service provider platform catering to prominent corporations. This project involved replicating the core features and functionalities, offering a practical learning experience in web development and design','url':'https://sagar-30.github.io/Clone/'},
                                       // {'id':4,'img':'https://dummyimage.com/600x400/000/fff','title':'Bike Rental','description':'Responsive bike rental website','url':'https://sagar-30.github.io/index.html'},
                                       // {'id':5,'img':'https://dummyimage.com/600x400/000/fff','title':'Bike Rental','description':'Responsive bike rental website','url':'https://sagar-30.github.io/index.html'}
                                       
                                       ]);

  return(
    <section className='project-section-main'>
      <div className='project-section-top-text'>
        <h3>Projects</h3>
        <p></p>
      </div>
      <div className='project-section-bottom-section'>
        {     
          project && project.map((data)=>(
          <a href={data.url} key={data.id}>
           <div className='project-section-top-card' >
             <div className='project-section-img-section'>
            <img src={data.img} alt='project-img' />
             </div>
             <div className='project-section-text-section'>
            <h2>{data.title}</h2>
            <p>{data.description}</p> 
             </div>
             </div>
            </a>
        ))
        }
      </div>
    </section>
  )
} 