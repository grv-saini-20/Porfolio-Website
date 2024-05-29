import "./App.scss";
import HeroCard from "./components/project/HeroCard/HeroCard";
import Me from "./assets/HeroCard/Me.png";
import JS from "./assets/SkillCard/JS.svg";
import TS from "./assets/SkillCard/TS.svg";;
import SCSS from "./assets/SkillCard/SCSS.svg";
import Svelte from "./assets/SkillCard/Svete.svg"
import React from "./assets/SkillCard/React.svg";
import HTML  from "./assets/SkillCard/HTML.svg";
import CSS from "./assets/SkillCard/CSS.svg";
import Github from "./assets/SkillCard/GIthub.svg";
import Phone from "./assets/Socials/Phone.svg";
import Instagram from "./assets/Socials/Instagram.svg";
import LinkedIn from "./assets/Socials/Linkedin.svg";
import GitHub from "./assets/Socials/Git-hub.svg";
import Email from"./assets/Socials/Email.svg";
import Typography from "./components/ui/Typography/Typography";
import ProjectCard from "./components/project/ProjectCard/ProjectCard";
import SkillCard from "./components/project/SkillCard/SkillCard";

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
    <main>
      <section className="about">
        <HeroCard
          heroTitleOne="Hi There!"
          heroTitleTwo="I am Developer"
          heroTitleThree="I make the complex simple."
          imgSrc={Me}
        />
      </section>
      <section className="skills">
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
            <SkillCard iconSrc={item.iconSrc} title={item.skill} />
          ))}
        </div>
      </section>
      <section className="my-works">
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
      </section>
      <section className="contact">
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
          <ul>
            <li>
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
            <li>
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
            <li>
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
            <li>
              <img className="social" src={LinkedIn} alt="linkedin" />
              <a href="/">
                <Typography
                  type="body"
                  _color="var(--primary-900)"
                  _fontweight="700"
                >
                  LinkedIn
                </Typography>
              </a>
            </li>
            <li>
              <img className="social" src={Instagram} alt="instagram" />
              <a href="/">
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
      </section>
    </main>
  );
}

export default App;
