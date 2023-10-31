import './experiencecomponent.css'
import {useState} from 'react'
export default function Experience(){ 
  const [company, setCompany] = useState([{'id':1,'company':'Tata Technologies','location':'Pune','designation':'Solution Developer','duration':'10 Oct 2022 - Present','responsiblity':['Maintain Product lifecycle Management Software and built solutions as per clients requirements and deliverables.','Used C for PLM and SQL to interact and query the database.','Developed UI for PLM to improve the customer experience using HTML, CSS and JS.']},
                                         {'id':2,'company':'Spark Foundation','location':'Virtual','designation':'Frontend Intern','duration':'2 June 2021 - 24 July 2021','responsiblity':['Used HTML, CSS, Javascript and API to build a project assigned to me.','Developed a fundraising website named Covid Relief Fund using HTML, CSS, Javascript and also integrated payment gateway using razorpay API.','Developed UI for PLM Learned about the challenges faced while working in a corporate environment and learned how to represent myself and my ideas in meetings.']},
                                         {'id':3,'company':'Zensar Technologies','location':'Virtual','designation':'Frontend Intern','duration':'1 Oct 2020 - 30 Dec 2020','responsiblity':['Used HTML, CSS, Javascript and API to build a project assigned to me.','Worked on my development skills and learnt many things.']}
                                         ]);
  return(
    <section className='experience-section-main'>
      <div className='experience-section-top-text'>
      <h3>Experience</h3>
        <p></p>
      </div>
      <div className='experience-section-top-card'>
        {
      company && company.map(data=>(
        <div className='experience-section-card' key={data.id}>
          <div className='experience-card-company-div'>
          <h3>{data.company}</h3>
            <p>{data.duration}</p>
          </div>
            <div className='experience-card-location-div'>
              <p>{data.designation}</p>
              <p>{data.location}</p>
            </div>
          
          <div className='experience-card-responsiblity-div'>
            <ul>
              {
                data.responsiblity && data.responsiblity.map((newData)=>(
                  <li>{newData}</li>
                  ))
                }
            </ul>
                  </div>
                  
          </div>   
      ))
        }
      </div>
    </section>
  )
}