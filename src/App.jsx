import { Suspense } from 'react'
import './App.css'
import { CLoader, Footer, Header } from './components'
import { About, Contact, Home, Services, Work } from './pages'
import { Route, Routes } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <div style={{ height: '85px', padding: '0px' }}></div>

      <Suspense fallback={<CLoader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  )
}

export default App
