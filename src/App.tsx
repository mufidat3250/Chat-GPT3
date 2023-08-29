import './App.scss'
import Navbar from './components/navbar'
import { Header, Blog, Footer, Features, WhatsGpt, } from './container'
import { Brand } from './components'
import WhatGPT from './container/whatsGPT'
import Posibility from './container/Posibility'
import Cta from './components/cta'

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
        <Posibility/>
        <Cta/>
    </div>
  )
}

export default App
