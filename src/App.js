import React from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import Character from './components/Character'
import './App.css'
function App() {

  const queryClint =new QueryClient()
  return (
    <div className='container'>
    <p className='app-p'><h1>CARDS</h1></p>
    <QueryClientProvider client={queryClint}>
      <Character/>
      </QueryClientProvider>
    </div>
  )
}

export default App