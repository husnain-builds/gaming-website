import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import { Analytics } from '@vercel/analytics/react'
import { Navbar } from './components/Navbar'
import { Footer } from './components/Footer'
import { ScrollToTop } from './components/ScrollToTop'
import { ScrollProgressBar } from './components/ScrollProgressBar'
import { HomePage } from './pages/HomePage'
import { BlogsPage } from './pages/BlogsPage'
import { BlogDetailPage } from './pages/BlogDetailPage'
import { PortfolioPage } from './pages/PortfolioPage'
import { PortfolioDetailPage } from './pages/PortfolioDetailPage'
import { ServicesPage } from './pages/ServicesPage'
import { ServiceDetailPage } from './pages/ServiceDetailPage'
import { AboutPage } from './pages/AboutPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollProgressBar />
      <div className="overflow-x-hidden">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/blogs" element={<BlogsPage />} />
            <Route path="/blogs/:slug" element={<BlogDetailPage />} />
            <Route path="/portfolio" element={<PortfolioPage />} />
            <Route path="/portfolio/:slug" element={<PortfolioDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/:slug" element={<ServiceDetailPage />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
      <Analytics />
    </BrowserRouter>
  )
}
