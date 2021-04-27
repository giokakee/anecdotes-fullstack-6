import Anecdotes from './components/anecdotes'
import Add from './components/add'
import Notification from './components/Notification'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import {initialize} from './reducers/anecdoteReducer'

const App = () => {
const dispatch = useDispatch()

useEffect(() => {
  dispatch(initialize())
},[dispatch])


  return (
    <div>
      <Notification />
      <Anecdotes />
      <Add />
    </div>
  )
}

export default App