import { useDispatch, useSelector } from "react-redux"
import { addVote } from "../reducers/anecdoteReducer"

const AnecdoteList = () => {

  const dispatch = useDispatch()

  const anecdotes = useSelector(({filter, anecdotes}) => {
    if(filter === 'ALL'){
      return anecdotes
    }
    return anecdotes.filter(a => a.content.toLowerCase().includes(filter.toLowerCase()))      
    }
  )

  const vote = (id) => {
    console.log('vote', id)
    dispatch(addVote(id))
  }

  return (anecdotes.map(anecdote =>
      <div key={anecdote.id}>
        <div>
          {anecdote.content}
        </div>
        <div>
          has {anecdote.votes}
          <button onClick={() => vote(anecdote.id)}>vote</button>
        </div>
      </div>
    ))
}

export default AnecdoteList