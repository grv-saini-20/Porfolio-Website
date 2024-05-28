import './App.scss'
import HeroCard from './components/project/HeroCard/HeroCard'
import Me from "./assets/HeroCard/Me.png";
import JS from "./assets/SkillCard/JS.svg";
import Typography from './components/ui/Typography/Typography';
import ProjectCard from './components/project/ProjectCard/ProjectCard';
import SkillCard from './components/project/SkillCard/SkillCard';

function App() {
  return (
    <main>
    <section className='about'>
    <HeroCard heroTitleOne="Hi," heroTitleTwo="I am Gourav"  heroTitleThree="Web Developer" imgSrc={Me}/>
    </section>
    <section className="skills">
    <h1 className='section-heading'>
      <Typography type="subheading" _color='var(--tertiary-900)' _fontweight='600'>My Skills</Typography>
      <SkillCard iconSrc={JS} title="JavaScript"/>
    </h1>
    </section>
    <section className="my-works">
      <h1 className='section-heading'>
      <Typography type="subheading" _color='var(--tertiary-900)' _fontweight='600'>My Works</Typography>
      </h1>
      <div className="projects">
      <ProjectCard title="StoneTEKK" description='StoneTEKK is here to revolutionize the Stone Industry with an automated management system. Using
		stone has always been an integral part of human civilization and plays a peculiar role in
		shaping the establishment. The stone industry has always worked conventionally and undoubtedly
		has been quite tedious for the employer and the client in getting the deals, a better
		understanding of stone, etc.' link='https://www.stonetekk.in/'/>
    <ProjectCard title="Wrkble" description="Wrkble is an online learning platform where users can purchase courses to enhance their skills. Each course is designed by experts and includes interactive materials like video lectures, readings, quizzes, and assignments to ensure an engaging learning experience. Learners can monitor their progress through assignments and projects, and upon completing a course, they receive a certificate. Wrkble's flexible, self-paced learning model allows users to study at their convenience." link='https://wrkble.com/'/>
    </div>
    </section>
    <section className="contact">
      <h1 className='section-heading'>
      <Typography type="subheading" _fontweight='600' _color="var(--tertiary-900)">Contact</Typography>
      </h1>
      <div className="contact-links">
        <ul>
          <li><a href="tel:+919671513142"><Typography type="body" _color='var(--tertiary-900)' _fontweight='700'>+919671513142</Typography></a></li>
          <li><a href="mailto:gouravsaini9797@gmail.com"><Typography type="body" _color='var(--tertiary-900)' _fontweight='700'>gouravsaini9797@gmail.com</Typography></a></li>
          <li><a href="https://github.com/grv-saini-20"><Typography type="body" _color='var(--tertiary-900)' _fontweight='700'>Github</Typography></a></li>
          <li><a href="/"><Typography type="body" _color='var(--tertiary-900)' _fontweight='700'>LinkedIn</Typography></a></li>
          <li><a href="/"><Typography type="body" _color='var(--tertiary-900)' _fontweight='700'>Instagram</Typography></a></li>
        </ul>
      </div>
    </section>
    </main>
  )
}

export default App
