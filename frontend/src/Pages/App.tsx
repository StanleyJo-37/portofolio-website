import './App.css'
import Navbar from '../Util/Navbar'
import Button from '../Util/Button'
// import LineDecoration from './Decorations/LineDecoration'
import { Link } from 'react-router-dom'

function App() {
  return (
    <>
      <Navbar
        brand='Stanley'
        choices={[
            { label: 'Home', link:'/Home', active: true, openInNewTab: false, }, 
            { label: 'About', link:'/About', active: false, openInNewTab: false, },
            { label: 'Experiences', link:'/Experiences', active: false, openInNewTab: false, },
            { label: 'Achievements', link:'/Achievements', active: false, openInNewTab: false, },
            { label: 'Projects', link:'/Projects', active: false, openInNewTab: false },
            { label: 'Contact Me', link:'/Contacts', active: false, openInNewTab: false, },
            { label: 'CV', link: '/CV', active: false, openInNewTab: true, },
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
