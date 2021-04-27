import {changeFilter} from '../reducers/filterReducer'
import {Vote, DeleteAnecdote} from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { setNotification } from "../reducers/notificationReducer"

const Anecdote = ({anecdote, handleClick, deleteOne}) => {
    return(
        <div>
           <div>
              {anecdote.content}
           </div>
           <div>
              has {anecdote.votes} <button onClick={handleClick}>Vote</button>
           <button onClick={deleteOne}>delete</button>
           </div>
        </div>
    )
}

const Anecdotes = (props) => {
    const anecdotes = props.anecdotes
    let filt = (e) => {
        let value = e.target.value
        props.changeFilter(value)
    }
    const deleteOne = (id) => {
        props.DeleteAnecdote(id)
    }

    let vote = (anecdote) => {
        clearTimeout(time)
        props.Vote(anecdote)
        props.setNotification('VOTED', `You voted for ${anecdote.content.slice(0,10)}`)
        timeout()
    }
    let time
    const timeout = () => {
            time = setTimeout(() => {
            props.setNotification('VOTED', '')
            },3000)
            return time
    }
    
    return(
        <div>
           filter <input onChange={(e) => filt(e)} />
            {anecdotes.map((mp) => {
                return(
                   <Anecdote
                   key={mp.id}
                   anecdote={mp}
                   handleClick={()=>vote(mp)}
                   deleteOne={() => deleteOne(mp.id)}
                   />
                )
            })}
        </div>
    )
}

const mapStateToProps = (state) => {
    const anecdotes = state.anecdotes.filter(filt=> filt.content.toLowerCase().indexOf(state.filter) >=0)
    return{
        anecdotes,
    }
  }

const mapDispatchProps = dispatch => {
    return {
        DeleteAnecdote: id => {
            dispatch(DeleteAnecdote(id))
        },
        changeFilter: value => {
            dispatch(changeFilter(value))
        },
        setNotification: (type,value) => {
            dispatch(setNotification(type,value))
        },
        Vote: anecdote => {
            dispatch(Vote(anecdote))
        }
    }
}

  const ConnectedAnecdotes = connect(mapStateToProps, mapDispatchProps)(Anecdotes)
  
  export default ConnectedAnecdotes