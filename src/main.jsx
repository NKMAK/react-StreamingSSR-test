// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
import { hydrateRoot } from 'react-dom/client';
import App from './App.jsx'

// hydrateRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <App />
//   </StrictMode>,
// )

hydrateRoot(document, <App />)
