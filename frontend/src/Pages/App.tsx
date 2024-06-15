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
      <div className='w-screen h-screen flex flex-row flex-nowrap'>
        <img className='m-auto w-auto h-full' src='/images/png/main-photo.png' alt='My Photo' />
        <div className='w-1/2 h-full flex flex-col justify-center'>
          <h1 className='text-white text-4xl font-semibold' >Hi, my name is Stanley</h1>
          <br />
            <p className='w-3/4 text-secondary'>
              I'm a 19 year-old student who is eager to contribute through
              projects and learn new things about programming and computer
              in general with the tendency to give my best effort for the
              responsibilities given to me. <Link to='/About'>Learn more.</Link>
            </p>  
          <br />
          <Button link='/Contacts' id='intro' color='bg-dark' label='Contact Me!' buttonType='button' />
        </div>
      </div>

      <div className='one-half' id='skills'>
        <ImageWithText src="/images/svg/python-logo-only.svg" alt='C' backgroundColor='#27282d' title='C'>
          Understands most C programming, syntaxes, and data structures, for example Tree, Trie, Linked List, and more.
        </ImageWithText>
        <ImageWithText src="/images/svg/python-logo-only.svg" alt='C++' backgroundColor='#27282d' title='C++'>
          Understands most C++ programming, syantaxes, and project organizations with class abstraction in header and cpp file.
        </ImageWithText>
        <ImageWithText src="/images/svg/python-logo-only.svg" alt='Python' backgroundColor='#27282d' title='Python'>
          Understands basic syntax of Python alongside the usage of some popular modules, like Numpy, Pandas, Scikit, and more.
        </ImageWithText>
        <ImageWithText src="/images/svg/python-logo-only.svg" alt='HTML' backgroundColor='#27282d' title='HTML'>
          Understands the hierachy (parents-children) concepts and most tags in HTML.
        </ImageWithText>
        <ImageWithText src="/images/svg/python-logo-only.svg" alt='CSS' backgroundColor='#27282d' title='CSS'>
          Understands basic-intermediate CSS properties, specifities, and other concepts.
        </ImageWithText>
        <ImageWithText src="/images/svg/python-logo-only.svg" alt='Javascript' backgroundColor='#27282d' title='Javascript'>
          Familiar with Javascript usage for simple website interactions and React components (in .jsx).
        </ImageWithText>
        <ImageWithText src="/images/svg/python-logo-only.svg" alt='Typescript' backgroundColor='#27282d' title='Typescript'>
          Familiar with Typescript usage in React components (in .tsx) and the static typing.
        </ImageWithText>
        <ImageWithText src="/images/svg/python-logo-only.svg" alt='React' backgroundColor='#27282d' title='React'>
          Understands how to create React components and creating frontend UI with React in a website.
        </ImageWithText>
        <ImageWithText src="/images/svg/python-logo-only.svg" alt='Bootstrap' backgroundColor='#27282d' title='Bootstrap'>
          Understands what Bootstrap is, its usages, and some of its components and classes.
        </ImageWithText>
      </div>
    </>
  )
}

export default App
