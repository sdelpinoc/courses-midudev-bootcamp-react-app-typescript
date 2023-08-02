import { useEffect, useRef, useState } from 'react'

import './App.css'
import List from './components/List'
import Form from './components/Form'

import { Sub } from './types'
// import axios from 'axios'
import { getAllSubs } from './services/gelAllSubs'

interface AppState {
  subs: Array<Sub>,
  newSubsNumber: number
}

function App () {
  const [subs, setSubs] = useState<AppState['subs']>([])
  const [newSubsNumber, setNewSubsNumber] = useState(0)
  const divRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    getAllSubs()
      .then(setSubs)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
    setNewSubsNumber(n => n + 1)
  }

  return (
    <div className='main' ref={divRef}>
      <h1>Subscribers</h1>
      <List subs={subs} />
      New Subs: {newSubsNumber}
      <Form onNewSub={handleNewSub} />
    </div>
  )
}

export default App
