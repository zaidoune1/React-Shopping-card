import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from "react-router-dom";
import App from './App'
import  ContexState from './context/ContextProvider';

ReactDOM.createRoot(document.getElementById('root')).render(

  <React.StrictMode>
    <BrowserRouter>
    <ContexState>
        <App/>
    </ContexState>
    </BrowserRouter>
  </React.StrictMode>,
)
