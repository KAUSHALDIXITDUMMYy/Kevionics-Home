import { useEffect } from 'react'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Features } from './components/Features'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Nav } from './components/Nav'
import { SceneBackground } from './components/SceneBackground'
import './App.css'

function App() {
  useEffect(() => {
    const handleScroll = () => {
      document.body.style.setProperty('--scroll-y', `${window.scrollY}px`)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <>
      <SceneBackground />
      <Nav />
      <main>
        <Hero />
        <About />
        <Features />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
