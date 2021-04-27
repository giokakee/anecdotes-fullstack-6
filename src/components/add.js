import { connect } from "react-redux";
import {setNotification} from '../reducers/notificationReducer'
import {create} from '../reducers/anecdoteReducer'


const Add = (props) => {
    let genId = () => Number(Math.floor(Math.random() * 99999))
    let add = async (e) => {
        e.preventDefault()
        let content = e.target.anecdote.value
                      e.target.anecdote.value = ''
        let obj = {content, id:genId(), votes:0}   
        props.create(obj)
      //  Notification
        clearTimeout(time)
        props.setNotification('ADDED', `You added ${content}`)
        timeout()
    }
    let time
    const timeout = () => {
            time = setTimeout(() => {
            props.setNotification('ADDED', '')
            },3000)
            return time
    }

    return(
        <form onSubmit={add}>
            <input required name='anecdote'/>
            <button type='submit'> Add</button>
        </form>
    )
}

const mapDispatchToProps = dispatch => {
    return {
        create: value => {
            dispatch(create(value))
        },
        setNotification: (type,value) => {
            dispatch(setNotification(type,value))
        }
    }
}


const connected = connect(null,mapDispatchToProps)(Add)
export default connected