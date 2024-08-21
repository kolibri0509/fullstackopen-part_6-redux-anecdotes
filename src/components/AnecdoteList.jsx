import { useDispatch, useSelector } from "react-redux"
import { changeVote } from "../reducers/anecdoteReducer"
import { setNotification } from "../reducers/notificationReducer"

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
    dispatch(changeVote(newObject))

    dispatch(setNotification(`you voted '${content}'`, 5))
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