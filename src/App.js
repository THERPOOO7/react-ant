import React from 'react'
import '../src/App.css'
// import Sheader from '../src/Component/Sheader'
// import Header from './Component/Header';
import { BrowserRouter } from 'react-router-dom';
import AppHeader from './Component/AppHeader/Index';
import PageContent from './Component/PageContent/Index';
import AppFooter from './Component/AppFooter/Index'


const App = () => {
  return (
    <div>
      <BrowserRouter>
      <AppHeader/>
      <PageContent/>
      <AppFooter/>
      </BrowserRouter>
    </div>
  )
}

export default App;

      