import React, { useState, useEffect } from 'react';
import './Portfolio.css';
import { 
  FiGithub, FiLinkedin, FiMail, FiPhone, FiMapPin, 
  FiCalendar, FiAward, FiCheckCircle, FiCode, FiGlobe, 
  FiServer, FiDatabase, FiCpu, FiLayers, FiArrowRight, 
  FiStar, FiDownload, FiUser, FiMenu, FiX
} from 'react-icons/fi';
import { MdOpenInNew } from 'react-icons/md';
import { FaGraduationCap, FaReact, FaNodeJs, FaDatabase, FaGitAlt, FaCss3Alt, FaHtml5, FaJs } from 'react-icons/fa';
import { SiRedux, SiMongodb, SiFirebase, SiExpress, SiMysql, SiTailwindcss, SiVercel } from 'react-icons/si';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isVisible, setIsVisible] = useState({});
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible((prev) => ({ ...prev, [entry.target.id]: true }));
          }
        });
      },
      { threshold: 0.2 }
    );
    
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => observer.observe(section));
    
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.offsetHeight;
        if (scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
          setActiveSection(section.id);
        }
      });
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };
  
  const techStack = [
    { icon: FaReact, name: "React.js", color: "#61dafb" },
    { icon: SiRedux, name: "Redux", color: "#764abc" },
    { icon: FaNodeJs, name: "Node.js", color: "#68a063" },
    { icon: SiExpress, name: "Express.js", color: "#ffffff" },
    { icon: SiMongodb, name: "MongoDB", color: "#4db33d" },
    { icon: SiFirebase, name: "Firebase", color: "#ffca28" },
    { icon: SiMysql, name: "MySQL", color: "#00758f" },
    { icon: FaJs, name: "JavaScript", color: "#f7df1e" },
    { icon: FaHtml5, name: "HTML5", color: "#e34c26" },
    { icon: FaCss3Alt, name: "CSS3", color: "#264de4" },
    { icon: SiTailwindcss, name: "Tailwind", color: "#06b6d4" },
    { icon: FaGitAlt, name: "Git", color: "#f34f29" }
  ];
  
  const stats = [
    { icon: FiCode, label: "Projects Completed", value: "15+", color: "#3b82f6" },
    { icon: FiAward, label: "Experience", value: "3+ Years", color: "#a855f7" },
    { icon: FiStar, label: "Client Satisfaction", value: "86%", color: "#f97316" },
    { icon: FiLayers, label: "Modules Delivered", value: "40+", color: "#10b981" }
  ];
  
  const skills = {
    frontend: ["React.js", "Redux", "Redux Toolkit", "HTML5/CSS3", "JavaScript (ES6+)"],
    backend: ["Node.js", "Express.js"],
    databases: ["MongoDB", "Firebase", "MySQL"],
    tools: ["Git/GitHub", "VS Code", "REST API", "Performance Optimization"]
  };
  
  return (
    <div className="portfolio">
      {/* Navigation */}
      <nav className={`navbar ${isMenuOpen ? 'mobile-open' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo" onClick={() => scrollToSection('home')}>
            <div className="logo-icon">
              <FiCode />
            </div>
            <span className="logo-text">Sagar Kaushik</span>
          </div>
          
          <div className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
            {['home', 'experience', 'projects', 'skills', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item)}
                className={`nav-link ${activeSection === item ? 'active' : ''}`}
              >
                {item}
              </button>
            ))}
          </div>
          
          <button className="mobile-menu-btn" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </nav>
      
      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="container">
          <div className="hero-grid">
            <div className={`hero-content ${isVisible['home'] ? 'fade-in-left' : ''}`}>
              <div className="status-badge">
                <div className="status-dot"></div>
                <span>Open to opportunities</span>
              </div>
              <h1 className="hero-title">
                <span className="gradient-text">Sagar Kaushik</span>
              </h1>
              <p className="hero-subtitle">Full Stack Developer</p>
              <p className="hero-description">
                Building scalable web applications with React.js and Node.js. 3+ years of experience in creating responsive UIs and robust backend services.
              </p>
              <div className="hero-buttons">
                <button onClick={() => scrollToSection('contact')} className="btn-primary">
                  <span>Get in touch</span>
                  <FiArrowRight />
                </button>
                <a href="#" className="btn-outline">
                  <FiDownload />
                  <span>Download Resume</span>
                </a>
              </div>
              <div className="social-links">
                <a href="#" className="social-icon"><FiGithub /></a>
                <a href="#" className="social-icon"><FiLinkedin /></a>
                <a href="#" className="social-icon"><FiMail /></a>
              </div>
            </div>
            
            <div className={`profile-card ${isVisible['home'] ? 'fade-in-right' : ''}`}>
              <div className="profile-card-inner">
                <div className="profile-header">
                  <FiUser className="profile-icon" />
                  <h3>Profile Summary</h3>
                </div>
                <p className="profile-text">
                  Software Engineer with 3+ years of experience building scalable web applications using React.js and JavaScript. 
                  Skilled in developing responsive user interfaces, integrating REST APIs, and improving application performance.
                </p>
                <div className="profile-info">
                  <div className="info-item"><FiMapPin /> Gurugram, Haryana</div>
                  <div className="info-item"><FiMail /> sagar302001@gmail.com</div>
                  <div className="info-item"><FiPhone /> +91 9350572047</div>
                  <div className="info-item"><FiCalendar /> 3+ Years Experience</div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Tech Stack Section */}
          <div className="tech-stack-section">
            <h3 className="tech-stack-title">My Tech Stack</h3>
            <div className="tech-stack-grid">
              {techStack.map((tech, index) => (
                <div key={index} className="tech-card">
                  <tech.icon className="tech-icon" style={{ color: tech.color }} />
                  <span className="tech-name">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Stats */}
          {/* <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className={`stat-card ${isVisible['home'] ? 'fade-in-up' : ''}`} style={{ animationDelay: `${index * 100}ms` }}>
                <stat.icon className="stat-icon" style={{ color: stat.color }} />
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </section>
      
      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Work Experience</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="experience-list">
            {/* Tata Technologies */}
            <div className={`experience-card ${isVisible['experience'] ? 'slide-in-left' : ''}`}>
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">Solution Developer</h3>
                  <p className="exp-company">Tata Technologies</p>
                </div>
                <div className="exp-date"><FiCalendar /> Oct 2022 – Present</div>
              </div>
              <div className="exp-details">
                <div className="exp-project">
                  <h4 className="project-title">Tata Technologies Project</h4>
                  <ul className="exp-list">
                    <li><FiCheckCircle /> Migrated class-based components to React functional components</li>
                    <li><FiCheckCircle /> Refactored UI using reusable components and hooks</li>
                    <li><FiCheckCircle /> Integrated REST APIs for seamless rendering</li>
                    <li><FiCheckCircle /> Developed responsive UI improving satisfaction from 72% to 86%</li>
                  </ul>
                </div>
                <div className="exp-project">
                  <h4 className="project-title">Tata Motors (Client)</h4>
                  <ul className="exp-list">
                    <li><FiCheckCircle /> Built and tested backend APIs using Node.js and Express</li>
                    <li><FiCheckCircle /> Delivered 30+ React features and bug fixes</li>
                    <li><FiCheckCircle /> Contributed to development of 10+ modules</li>
                    <li><FiCheckCircle /> Integrated REST APIs with error handling</li>
                  </ul>
                </div>
              </div>
            </div>
            
            {/* The Sparks Foundation */}
            <div className={`experience-card ${isVisible['experience'] ? 'slide-in-left' : ''}`} style={{ animationDelay: '200ms' }}>
              <div className="exp-header">
                <div>
                  <h3 className="exp-role">Frontend Intern</h3>
                  <p className="exp-company">The Sparks Foundation</p>
                </div>
                <div className="exp-date"><FiCalendar /> Jun 2021 – Jul 2021</div>
              </div>
              <ul className="exp-list">
                <li><FiCheckCircle /> Developed responsive fundraising platform supporting 1000+ users</li>
                <li><FiCheckCircle /> Integrated Razorpay payment gateway</li>
                <li><FiCheckCircle /> Implemented responsive design for cross-device compatibility</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Featured Projects</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="projects-grid">
            {/* TIS Gifting Website */}
            <div className={`project-card ${isVisible['projects'] ? 'fade-in-up' : ''}`}>
              <div className="project-image">
                <div className="project-overlay">
                  <MdOpenInNew className="project-link-icon" />
                </div>
                <div className="project-badge">Production Project 2025</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">TIS - Gifting Website</h3>
                <div className="project-tech">
                  {["React.js", "Redux Toolkit", "Firebase", "Node.js", "Express.js", "Razorpay", "Shiprocket"].map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <ul className="project-features">
                  <li><FiCheckCircle /> Production-ready e-commerce platform</li>
                  <li><FiCheckCircle /> Integrated Razorpay and Shiprocket APIs</li>
                  <li><FiCheckCircle /> Coupon and discount engine</li>
                  <li><FiCheckCircle /> Performance optimization & SEO</li>
                </ul>
              </div>
            </div>
            
            {/* Bike Rental Website */}
            <div className={`project-card ${isVisible['projects'] ? 'fade-in-up' : ''}`} style={{ animationDelay: '200ms' }}>
              <div className="project-image alt">
                <div className="project-overlay">
                  <MdOpenInNew className="project-link-icon" />
                </div>
                <div className="project-badge alt">2025</div>
              </div>
              <div className="project-content">
                <h3 className="project-title">Bike Rental Website</h3>
                <div className="project-tech">
                  {["React.js", "Redux Toolkit", "Firebase", "Stripe API"].map((tech, i) => (
                    <span key={i} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <ul className="project-features">
                  <li><FiCheckCircle /> Responsive bike exploration platform</li>
                  <li><FiCheckCircle /> Optimized booking flows</li>
                  <li><FiCheckCircle /> REST API integration</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Technical Skills</h2>
            <div className="section-divider"></div>
          </div>
          
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={category} className={`skill-category ${isVisible['skills'] ? 'fade-in-up' : ''}`} style={{ animationDelay: `${idx * 100}ms` }}>
                <h3 className="category-title">
                  {category === 'frontend' && <FiGlobe />}
                  {category === 'backend' && <FiServer />}
                  {category === 'databases' && <FiDatabase />}
                  {category === 'tools' && <FiCpu />}
                  <span>{category}</span>
                </h3>
                <div className="skill-list">
                  {items.map((skill, i) => (
                    <div key={i} className="skill-item">
                      <div className="skill-info">
                        <span>{skill}</span>
                        <span className="skill-percent">{(i + 1) * 20}%</span>
                      </div>
                      <div className="skill-bar">
                        <div className="skill-progress" style={{ width: `${(i + 1) * 20}%` }}></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* Education */}
          <div className={`education-card ${isVisible['skills'] ? 'fade-in-up' : ''}`} style={{ animationDelay: '400ms' }}>
            <div className="education-header">
              <FaGraduationCap />
              <h3>Education</h3>
            </div>
            <div className="education-content">
              <div>
                <p className="education-degree">Bachelor of Engineering in Computer Engineering</p>
                <p className="education-college">Bharati Vidyapeeth Deemed University College Of Engineering</p>
              </div>
              <div className="education-details">
                <p className="education-cgpa">9.32 CGPA</p>
                <p className="education-duration">2018 – 2022 | Pune, Maharashtra</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Get In Touch</h2>
            <div className="section-divider"></div>
            <p className="section-description">Let's collaborate on exciting projects. I'm always open to discussing new opportunities and innovative ideas.</p>
          </div>
          
          <div className="contact-grid">
            <div className={`contact-info ${isVisible['contact'] ? 'slide-in-left' : ''}`}>
              <div className="contact-card">
                <div className="contact-icon purple"><FiPhone /></div>
                <div><p className="contact-label">Phone</p><p className="contact-value">+91 9350572047</p></div>
              </div>
              <div className="contact-card">
                <div className="contact-icon cyan"><FiMail /></div>
                <div><p className="contact-label">Email</p><p className="contact-value">sagar302001@gmail.com</p></div>
              </div>
              <div className="contact-card">
                <div className="contact-icon purple"><FiMapPin /></div>
                <div><p className="contact-label">Location</p><p className="contact-value">Gurugram, Haryana</p></div>
              </div>
            </div>
            
            <div className={`contact-form ${isVisible['contact'] ? 'slide-in-right' : ''}`}>
              <form>
                <input type="text" placeholder="Your Name" className="form-input" />
                <input type="email" placeholder="Your Email" className="form-input" />
                <textarea rows="4" placeholder="Your Message" className="form-textarea"></textarea>
                <button type="submit" className="btn-primary full-width">
                  <span>Send Message</span>
                  <FiArrowRight />
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p className="footer-text">© 2025 Sagar Kaushik. Built with React.js</p>
          <div className="footer-social">
            <a href="#" className="footer-icon"><FiGithub /></a>
            <a href="#" className="footer-icon"><FiLinkedin /></a>
            <a href="#" className="footer-icon"><FiMail /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;