import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Layout from './routes/Layout'
import DetailView from './routes/DetailView'
import NotFound from './routes/NotFound.jsx'

createRoot(document.getElementById('root')).render(
  //do not use StrictMode in developement as it will run useEffect twice
  // <StrictMode>
    <BrowserRouter>
    <Routes>
        <Route index={true} path="/" element={<App />} />
        <Route path="/recipe/:id" element={<DetailView />} />
        <Route path="*" element={ <NotFound /> } />
    </Routes>
  </BrowserRouter>
  // </StrictMode>,
)
