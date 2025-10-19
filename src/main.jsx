import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './styles/global.scss'
import App from './App.jsx'
import { BrowserRouter as Router } from "react-router-dom";

// 🪄 Import AOS
import AOS from 'aos';
import 'aos/dist/aos.css';
import { AuthProvider } from '@contexts/AuthContext';

// Initialize AOS once when app loads
AOS.init({
  duration: 1000, // animation duration in ms
  easing: 'ease-in-out',
  once: true, // animate only once per scroll
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Router>
    <AuthProvider>
        <App />
    </AuthProvider>
      </Router>
  </StrictMode>,
)


