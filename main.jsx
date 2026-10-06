import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import posthog from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import App from './App.jsx'
import './styles.css'

const key = import.meta.env.VITE_POSTHOG_KEY
if (!key) console.warn('Missing VITE_POSTHOG_KEY: copy .env.example to .env')

posthog.init(key, {
  api_host: import.meta.env.VITE_POSTHOG_HOST || 'https://us.i.posthog.com',
  autocapture: true,
  capture_pageview: false, // SPA: we send $pageview on route changes (see App.jsx)
  // session replay is switched on in PostHog project settings
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <PostHogProvider client={posthog}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </PostHogProvider>
)
