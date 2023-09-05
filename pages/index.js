import Head from 'next/head';
import styles from '../styles/Home.module.css';
import Image from 'next/image';
import linkedin from '../public/icons/linkedin.png'
import mail from '../public/icons/mail.png'
import phone from '../public/icons/telephone.png'
import mainAsset from '../public/mainAsset.png'
import frontend from '../public/icons/frontend.png'
import backend from '../public/icons/backend.png'
import dataAnalysis from '../public/icons/dataAnalysis.png'
import proj1 from '../public/proj1.png'
import proj2 from '../public/proj2.png'
import { FaReact } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaCog } from "react-icons/fa";
import { FaRegCopyright } from "react-icons/fa";

export default function Home() {
  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch('CV.pdf').then(response => {
      response.blob().then(blob => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'Angala, Allen Kyle - Resume.pdf';
        alink.click();
      })
    })
  }
  return (
    <div className='container'>
      <div className='info'>
        <p className='name'>Front-End Developer in Progress </p>
        <div className='contacts'>
          <Image className="icons" src={phone} height={36} />
          <a href="tel:+639167882334">09167882334</a>
          <Image className="icons" src={mail} height={36} />
          <a href='mailto:akcangala@gmail.com'>akcangala@gmail.com</a>
          <Image className="icons" src={linkedin} height={36} />
          <a href='https://www.linkedin.com/in/allen-kyle-angala-8253aa243/'>Allen Kyle Angala</a>
        </div>
        <div className='buttons'>
          <button onClick={onButtonClick} class="button button1">Download CV</button>
          <a href="#port" className='port'><button class="button button2">See Projects</button></a>
        </div>
      </div>
      <Image className="mainAsset" src={mainAsset} />

      <div className='introduction'>
        <div className='bg-container'>
          <p className='greeting'>Hi! I'm Allen. Nice to meet you.</p>
          <p className='bg'>I graduated last June 2022 on Don Bosco Technical College with the course Bachelor of Science in Information Technology. Since last year, I was taking online courses on front-end development and data analysis to upskill my career. I'm quietly confident, naturally curious and always taking one step forward towards my goals.
          </p>
        </div>
      </div>

      <div className='skills'>
        <div className='skillsContainer'>
          <div className='area'>
            <Image className='skillsIcon mBottom' src={backend} />
            <p className='skillName mBottom'>Back-End</p>
            <p>Back-end is not my forte but have familiarity to some.</p>
            <p className='emp mBottom'>Skills:</p>
            <p className=' mBottom'>SQL, Basic PHP</p>
            <p className='emp mBottom'>Dev Tools:</p>
            <ul>
              <li>MySQL</li>
              <li>Oracle</li>
              <li>phpMyAdmin</li>
            </ul>
          </div>
          <div className='area'>
            <Image className='skillsIcon mBottom' src={frontend} />
            <p className='skillName mBottom'>Front-End</p>
            <p>I like to code things from scratch, and enjoy things from there.</p>
            <p className='emp mBottom'>Languages:</p>
            <p className='mBottom'>HTML, CSS, ReactJS, Git, WordPress</p>
            <p className='emp mBottom'>Dev Tools:</p>
            <ul>
              <li>Bootstrap</li>
              <li>Github</li>
              <li>MaterialUI</li>
              <li>Vercel</li>
              <li>Visual Studio Code</li>
            </ul>
          </div>
          <div className='area'>
            <Image className='skillsIcon mBottom' src={dataAnalysis} />
            <p className='skillName mBottom'>Data Analysis</p>
            <p>Designing and creating interactive dashboards amuses me.</p>
            <p className='emp mBottom'>Skills:</p>
            <p className=' mBottom'>Google Data Studio, Microsoft Excel</p>
            <p className='emp mBottom'>Dev Tools:</p>
            <ul>
              <li>Looker Studio</li>
              <li>Microsoft Excel</li>
            </ul>
          </div>
        </div>
      </div>

      <div id="port" className='projects'>
        <p className='recProjects'>My Recent Projects</p>
        <p>Here are the past projects I've worked on and currently working on.</p>
        <div className='projContainer'>
          <div className='proj proj1'>
            <div className='textBlock'>
              <p>Redesigned PH Training and Consultancy's website using WordPress Elementor.</p>
              <a href='https://phtrainingandconsultancy.com/'>
                <button className='visit'>
                  Visit Website
                  <FaChevronRight />
                </button>
              </a>
            </div>
          </div>
          <div className='proj proj2'>
            <div className='textBlock'>
              <p>Recreated Genshin Impact's Character Website using ReactJS.</p>
              <a href='https://phtrainingandconsultancy.com/'>
                <button className='visit'>
                  Visit Website
                  <FaChevronRight />
                </button>
              </a>
            </div>
          </div>
          <div className='proj proj3'>
            <div className='textBlock'>
              <p>Currently creating website for Jovald's Trucking Payroll System using ReactJS.</p>
              <button className='dontVisit'>
                Under Development
                <FaCog />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='quote'>
        <p>“Hard work betrays none, but dreams betray many.”</p>
        <p>- Hikigaya Hachiman (Oregairu)</p>
      </div> */}

      <div className='footer'>

        <p>Made with <FaReact className='FaReact' /></p>
        <p><FaRegCopyright className='FaRegCopyright' /> 2023 </p>
        <p>Allen Kyle Angala</p>

      </div>

    </div>
  )
}
