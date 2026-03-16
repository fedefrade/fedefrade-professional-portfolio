import { Header } from './components/Header/Header'
import { Footer } from './components/Footer/Footer'
import { About } from './sections/About/About'
import { Experience } from './sections/Experience/Experience'
import { Technologies } from './sections/Technologies/Technologies'
import { Projects } from './sections/Projects/Projects'
import { I18nProvider } from './i18n/I18nContext'
import { ThemeProvider } from './context/ThemeContext'
import './styles/global.css'

function AppContent() {
  return (
    <>
      <Header />
      <main className="main" id="main">
        <About />
        <Experience />
        <Technologies />
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider defaultLocale="en">
        <AppContent />
      </I18nProvider>
    </ThemeProvider>
  )
}
