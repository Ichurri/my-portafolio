
import './App.css';
import { AboutMe, NavBar, Skills } from './components';

export const App = () => {
  return (
    <>
      <NavBar/>
      <main>
        <Skills/>
        <AboutMe/>
      </main>
    </>
  )
}
