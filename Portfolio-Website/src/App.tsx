import './App.scss'
import HeroCard from './components/project/HeroCard/HeroCard'
import Me from "./assets/HeroCard/Me.png";

function App() {
  return (
    <main>
    <section className='about'>
    <HeroCard heroTitleOne="Hi," heroTitleTwo="I am Gourav"  heroTitleThree="Web Developer" imgSrc={Me}/>
    </section>
    </main>
  )
}

export default App
