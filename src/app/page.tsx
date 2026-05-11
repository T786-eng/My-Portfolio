import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Projects from '@/components/Projects'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Certifications from '@/components/Certifications'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Loader from '@/components/Loader'
import Stars from '@/components/Stars'
import Ticker from '@/components/Ticker'

export default function Home() {
  return (
    <>
      <Loader />
      <Stars />
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <About />
        <Ticker />
        <Projects />
        <Experience />
        <Skills />
        <Certifications />
        <Contact />
        <Footer />
      </main>
    </>
  )
}
