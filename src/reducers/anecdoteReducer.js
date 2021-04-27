import Service from '../service/anecdotesService'


const anecdotesReducer = (state = [], action) => {
 switch(action.type){
   case 'ADD':
     return [...state, action.data]
    case 'VOTE':
      let id = action.data.id
      let anecdote = state.find(fn => fn.id===id)
      let voted = {...anecdote, votes: anecdote.votes+1}
      return state.map(mp => mp.id===id?voted:mp)
    case 'INIT':
      return action.data
      case 'DELETE':
        return state.filter(filt=> filt.id !==action.data.id)
  default:
    return state
 }
}


export const initialize = (data) => {
  return async dispatch => {
    const anecdotes = await Service.getAll()
    dispatch({
      type: 'INIT',
      data:anecdotes
    })
  }
}

export const create = (data) => {
  return async dispatch => {
    const newNote = await Service.postAnecdote(data)
    dispatch({
      type: 'ADD',
      data: newNote
    })
  }
}

export const Vote = (anecdote) => {
  const id = anecdote.id
  return async dispatch => {
    let obj = {
      content: anecdote.content,
      id:id,
      votes: anecdote.votes +1
    }
    const updatedAnecdote = await Service.update(id,obj)
        dispatch({
      type: 'VOTE',
      data: updatedAnecdote
    })
  }
}
export const DeleteAnecdote =  (id) => {
  return async dispatch => {
    await Service.DeleteOne(id)
    dispatch({
      type: 'DELETE',
      data:{
        id
      }
    })
  }
}



export default anecdotesReducer