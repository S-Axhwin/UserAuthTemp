import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { ThemeProvider } from "@/components/theme-provider"
import { HashRouter } from 'react-router-dom'
import './index.css'

createRoot(document.getElementById('root')!).render(
<HashRouter>
  <ThemeProvider defaultTheme='dark'>
    <App />
  </ThemeProvider>,
</HashRouter>
)
