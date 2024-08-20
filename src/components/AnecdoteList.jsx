import { useDispatch, useSelector } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"
import { showNotification, hideNotification } from "../reducers/notificationReducer"
import anecdoteService from '../../services/anecdotes'

const AnecdoteList = () => {

  const dispatch = useDispatch()

  const anecdotes = useSelector(({filter, anecdotes}) => {
    if(filter === 'ALL'){
      return anecdotes
    }
    return anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))      
    }
  )

  const vote = async(id, content, votes) => {
    console.log('vote', id)
    const newObject = {id, content, votes: votes + 1}
    const changeVote = await anecdoteService.changeVote(id, newObject)
    dispatch(addVote(changeVote))
    console.log(`you voted '${content}'`)
    dispatch(showNotification(`you voted '${content}'`))
    setTimeout(() => dispatch(hideNotification(null)), 5000)
  }

  return (anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id, anecdote.content, anecdote.votes)}>vote</button>
        </div>
      </div>
    ))
}

export default AnecdoteList