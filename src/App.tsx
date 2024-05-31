import "./App.scss";
import HeroCard from "./components/project/HeroCard/HeroCard";
import Me from "./assets/HeroCard/Me.png";
import Me2 from "./assets/HeroCard/Me2.jpeg";
import JS from "./assets/SkillCard/JS.svg";
import TS from "./assets/SkillCard/TS.svg";
import SCSS from "./assets/SkillCard/SCSS.svg";
import Svelte from "./assets/SkillCard/Svete.svg";
import React from "./assets/SkillCard/React.svg";
import HTML from "./assets/SkillCard/HTML.svg";
import CSS from "./assets/SkillCard/CSS.svg";
import Github from "./assets/SkillCard/GIthub.svg";
import Phone from "./assets/Socials/Phone.svg";
import Instagram from "./assets/Socials/Instagram.svg";
import LinkedIn from "./assets/Socials/Linkedin.svg";
import GitHub from "./assets/Socials/Git-hub.svg";
import Email from "./assets/Socials/Email.svg";
import Typography from "./components/ui/Typography/Typography";
import ProjectCard from "./components/project/ProjectCard/ProjectCard";
import SkillCard from "./components/project/SkillCard/SkillCard";
import AboutCard from "./components/project/AboutCard/AboutCard";
import CV from "./assets/HeroCard/Cv.pdf";

let skills = [
  { iconSrc: React, skill: "React" },
  { iconSrc: Svelte, skill: "Svelte" },
  { iconSrc: JS, skill: "JavaScript" },
  { iconSrc: TS, skill: "TypeScript" },
  { iconSrc: SCSS, skill: "SCSS" },
  { iconSrc: HTML, skill: "HTML5" },
  { iconSrc: CSS, skill: "CSS3" },
  { iconSrc: Github, skill: "Github" },
];

function App() {
  return (
    <main className="main">
      <section className="about">
        <HeroCard
          heroTitleOne="Hi There!"
          heroTitleTwo="I am a"
          heroTitleThree="I make the complex simple."
          imgSrc={Me}
          buttonLabel="Contact"
          specialHeading="Developer"
        />
      </section>
      <section className="about-me">
        <AboutCard
          imgSrc={Me2}
          heading="Who am I?"
          aboutMe="I'm Gourav Saini, a Web Developer"
          description="I am a frontend developer with one year of experience specializing in creating responsive, user-friendly web applications. My expertise includes HTML, CSS, JavaScript, and frameworks like React and Svelte. I have developed various projects, including a personal portfolio website, an e-commerce site, and a task management tool. I am proficient in using tools like Git, npm, and Visual Studio Code and have a solid understanding of UI/UX principles. I am passionate about coding, constantly learning new technologies, and eager to take on challenging projects to enhance my skills further."
          namelabel="Name:"
          name="Gourav Saini"
          ageLabel="Age:"
          age={27}
          emailLabel="Email:"
          email="gouravsaini9797@gmail.com"
          from="Ambala | India"
          fromLabel="From:"
          buttonLabel="Download CV"
          cvPath={CV}
        />
      </section>
      <section className="skills">
        <div className="container">
          <h1 className="section-heading">
            <Typography
              type="subheading"
              _color="var(--primary-900)"
              _fontweight="600"
            >
              My Skills
            </Typography>
          </h1>
          <div className="skill-cards">
            {skills.map((item) => (
              <div className="card">
                <SkillCard iconSrc={item.iconSrc} title={item.skill} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="my-works">
        <div className="container">
          <h1 className="section-heading">
            <Typography
              type="subheading"
              _color="var(--primary-900)"
              _fontweight="600"
            >
              My Works
            </Typography>
          </h1>
          <div className="projects">
            <ProjectCard
              title="StoneTEKK"
              description="StoneTEKK is here to revolutionize the Stone Industry with an automated management system. Using
		stone has always been an integral part of human civilization and plays a peculiar role in
		shaping the establishment. The stone industry has always worked conventionally and undoubtedly
		has been quite tedious for the employer and the client in getting the deals, a better
		understanding of stone, etc."
              link="https://www.stonetekk.in/"
            />
            <ProjectCard
              title="Wrkble"
              description="Wrkble is an online learning platform where users can purchase courses to enhance their skills. Each course is designed by experts and includes interactive materials like video lectures, readings, quizzes, and assignments to ensure an engaging learning experience. Learners can monitor their progress through assignments and projects, and upon completing a course, they receive a certificate. Wrkble's flexible, self-paced learning model allows users to study at their convenience."
              link="https://wrkble.com/"
            />
          </div>
        </div>
      </section>
      <section className="contact">
        <div className="container">
          <h1 className="section-heading">
            <Typography
              type="subheading"
              _fontweight="600"
              _color="var(--primary-900)"
            >
              Contact
            </Typography>
          </h1>
          <div className="contact-links">
            <ul className="links">
              <li className="link">
                <img className="social" src={Phone} alt="phone" />
                <a href="tel:+919671513142">
                  <Typography
                    type="body"
                    _color="var(--primary-900)"
                    _fontweight="700"
                  >
                    +919671513142
                  </Typography>
                </a>
              </li>
              <li className="link">
                <img className="social" src={Email} alt="email" />
                <a href="mailto:gouravsaini9797@gmail.com">
                  <Typography
                    type="body"
                    _color="var(--primary-900)"
                    _fontweight="700"
                  >
                    gouravsaini9797@gmail.com
                  </Typography>
                </a>
              </li>
              <li className="link">
                <img className="social" src={GitHub} alt="github" />
                <a href="https://github.com/grv-saini-20">
                  <Typography
                    type="body"
                    _color="var(--primary-900)"
                    _fontweight="700"
                  >
                    Github
                  </Typography>
                </a>
              </li>
              <li className="link">
                <img className="social" src={LinkedIn} alt="linkedin" />
                <a href="https://www.linkedin.com/in/gourav-saini-aa5454141?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">
                  <Typography
                    type="body"
                    _color="var(--primary-900)"
                    _fontweight="700"
                  >
                    LinkedIn
                  </Typography>
                </a>
              </li>
              <li className="link">
                <img className="social" src={Instagram} alt="instagram" />
                <a href="https://www.instagram.com/gouraaaaaav?igsh=YXR1YzBsYTQ5dTJm&utm_source=qr">
                  <Typography
                    type="body"
                    _color="var(--primary-900)"
                    _fontweight="700"
                  >
                    Instagram
                  </Typography>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

export default App;
