import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
// Polices auto-hébergées : pas d'appel à Google Fonts (vitesse, et aucune
// donnée de visite transmise à un tiers). Archivo, avec ses axes de graisse
// et de chasse (des capitales très étroites pour la signalétique), et IBM
// Plex Mono pour les codes et les étiquettes.
import '@fontsource-variable/archivo/standard.css'
import '@fontsource/ibm-plex-mono/400.css'
import '@fontsource/ibm-plex-mono/500.css'
// Arabe : Noto Kufi, un coufique géométrique, comme une signalétique.
import '@fontsource-variable/noto-kufi-arabic'
import 'lenis/dist/lenis.css'
import './styles/tokens.css'
import App from './App'

const app = (
  <StrictMode>
    <App />
  </StrictMode>
)
const root = document.getElementById('root')!
// Page prérendue pour cette adresse : React reprend le HTML existant au lieu
// de le reconstruire (sinon le hero est réinséré et ses animations
// rejouent). Sinon (développement, page 404) : rendu complet.
const path = (p: string) => p.replace(/\/+$/, '') || '/'
if (root.dataset.route && path(root.dataset.route) === path(location.pathname)) hydrateRoot(root, app)
else createRoot(root).render(app)
