
import './App.css';
import { AboutMe, Footer, NavBar, Skills } from './components';

export const App = () => {
  return (
    <>
      <NavBar/>
      <main>
        <Skills/>
        <AboutMe/>
      </main>
      <Footer/>
    </>
  )
}
