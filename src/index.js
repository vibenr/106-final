import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { MoralisProvider } from 'react-moralis'
import { NotificationProvider } from 'web3uikit'

const APP_ID = process.env.NEXT_PUBLIC_APP_ID
const SERVER_URL = process.env.NEXT_PUBLIC_SERVER_URL
const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <MoralisProvider appId={APP_ID} serverUrl={SERVER_URL}>
      <NotificationProvider>
        <App />
      </NotificationProvider>
    </MoralisProvider>
    ,
  </React.StrictMode>,
)
