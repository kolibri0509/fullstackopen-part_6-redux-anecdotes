import { useDispatch } from "react-redux"
import { addAnecdote } from "../reducers/anecdoteReducer"
import { showNotification, hideNotification } from "../reducers/notificationReducer"

const AnecdoteForm = () => {

    const dispatch = useDispatch()

    const create = (event) => {
        event.preventDefault()
        const content = event.target.anecdote.value
        event.target.anecdote.value = ''
        dispatch(addAnecdote(content))
        dispatch(showNotification(`added anecdote '${content}'`))
        setTimeout(() => dispatch(hideNotification(null)), 5000)
      }
      
    return (
        <>
            <h2>create new</h2>
            <form onSubmit={create}>
                <div><input name='anecdote' /></div>
                <button type='submit'>create</button>
            </form>
        </>
    )
}

export default AnecdoteForm