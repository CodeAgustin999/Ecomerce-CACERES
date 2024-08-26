import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './css/index.css'

import { initializeApp } from "firebase/app";




const firebaseConfig = {
  apiKey: "AIzaSyCsnfmJBAS3-Fi89qxzw97EuK506_q1M0Y",
  authDomain: "futshop-39323.firebaseapp.com",
  projectId: "futshop-39323",
  storageBucket: "futshop-39323.appspot.com",
  messagingSenderId: "360936620693",
  appId: "1:360936620693:web:7c56c486ae10bafd98119c"
};


initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
