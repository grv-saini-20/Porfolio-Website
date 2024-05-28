import './App.scss'
import HeroCard from './components/project/HeroCard/HeroCard'
import Me from "./assets/HeroCard/Me.png";
import Typography from './components/ui/Typography/Typography';

function App() {
  return (
    <main>
    <section className='about'>
    <HeroCard heroTitleOne="Hi," heroTitleTwo="I am Gourav"  heroTitleThree="Web Developer" imgSrc={Me}/>
    </section>
    <section className="my-works">
      <h1 className='section-heading'>
      <Typography type="subheading" _color='var(--tertiary-900)' _fontweight='600'>My Works</Typography>
      </h1>
    </section>
    </main>
  )
}

export default App
