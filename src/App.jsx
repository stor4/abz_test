import { useState } from 'react'
import './App.scss'
import Header from './components/Header'
import Hero from './components/Hero'
import GetSection from './components/GetSection'
import PostSection from './components/PostSection'

function App() {
  const [reload, setReload] = useState(false)

  return (
    <div className='page'>
      <Header/>
      <main>
        <Hero/>
        <GetSection reload={reload} setReload={setReload}/>
        <PostSection reload={reload} setReload={setReload}/>
      </main>
    </div>
  )
}

export default App
