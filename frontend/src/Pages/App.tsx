import './App.css'
import Navbar from '../Navbar/Navbar'
import Button from '../Util/Button'
// import LineDecoration from './Decorations/LineDecoration'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar
        brand='Stanley'
        choices={[
            { label: 'Home', link:'/Home', active: true }, 
            { label: 'About', link:'/About', active: false },
            { label: 'Experiences', link:'/Experiences', active: false },
            { label: 'Achievements', link:'/Achievements', active: false },
            { label: 'Projects', link:'/Projects', active: false },
            { label: 'Contact Me', link:'/Contacts', active: false },
        ]}
      />
      <div id="main-content">
        <img src="/images/png/main-photo.png" alt="My Photo" id='my-photo' />
        <div id="right">
          <h1 id='intro-title' className='intro-text'>Hi, my name is Stanley</h1>
          <br />
            <p id='brief-intro' className='intro-text'>
            I'm a 19 year-old student who is eager to contribute through
            projects and learn new things about programming and computer
            in general with the tendency to give my best effort for the
            responsibilities given to me. <Link to='/About'>Learn more.</Link>
            </p> 
          <br />
          <Button link='/Contacts' id='intro' color='bg-dark' label='Contact Me!' buttonType='button' />
        </div>
      </div>
    </>
  )
}

export default App
