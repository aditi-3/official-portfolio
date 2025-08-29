import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Home from './components/home.tsx'
import Aboutme from './components/aboutme.tsx'
import Projects from './components/projects.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Home />
    <Aboutme />
    <Projects />
  </StrictMode>,
)
