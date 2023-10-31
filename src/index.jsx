import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './components/header/headercomponent.jsx' 
import About from './components/about/aboutcomponent.jsx'
import Project from './components/Project/projectcomponent.jsx'
import Skills from './components/skills/skillcomponent.jsx'
import Experience from './components/Experience/experiencecomponent.jsx'
import Contact from './components/contact/contactcomponent.jsx'
import Footer from './components/footer/footercomponent.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
    <Header />
    <About/>
    <Project />
    <Skills />
    <Experience />
    <Contact />
    <Footer />
	</React.StrictMode>
)