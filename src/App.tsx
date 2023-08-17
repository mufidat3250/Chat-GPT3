import './App.scss'
import Navbar from './components/navbar'
import { Header, Blog, Footer, Features, WhatsGpt, } from './container'
import { Brand } from './components'
import WhatGPT from './container/whatsGPT'

function App() {

  return (
    <div className='App'>
        <div className='gradient__bg'>
          <Navbar/>
          <Header/>
        </div>
        <Brand/>
        <WhatGPT/>
        <Features/>
    </div>
  )
}

export default App
