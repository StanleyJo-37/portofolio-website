import './App.css'
import './Page.css'
import Navbar from '../Util/Navbar'
import Button from '../Util/Button'
import ImageWithText from '../Util/ImageWithText'
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
      <div className='first-section' id='intro-content'>
        <div id="left">
          <img src='/images/png/main-photo.png' alt='My Photo' id='my-photo' />
        </div>
        <div id='right'>
          <h1 className='intro-text' id='intro-title' >Hi, my name is Stanley</h1>
          <br />
            <p className='intro-text' id='brief-intro'>
              I'm a 19 year-old student who is eager to contribute through
              projects and learn new things about programming and computer
              in general with the tendency to give my best effort for the
              responsibilities given to me. <Link to='/About'>Learn more.</Link>
            </p> 
          <br />
          <Button link='/Contacts' id='intro' color='bg-dark' label='Contact Me!' buttonType='button' />
        </div>
      </div>

      <div className='full-page' id='skills'>
        <ImageWithText src="/images/svg/python-logo-only.svg" alt='python' backgroundColor='#27282d' title='Python'>
          Understands basic syntax of Python alongside the usage of some popular modules, like Numpy, Pandas, Scikit, and more.
        </ImageWithText>
      </div>
    </>
  )
}

export default App
