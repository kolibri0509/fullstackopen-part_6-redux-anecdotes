import { createSlice } from "@reduxjs/toolkit"

const getId = () => (100000 * Math.random()).toFixed(0)

const anecdoteSlice = createSlice({
  name:'anecdotes',
  initialState: [],
  reducers: {
    addVote(state, action){
      const id = action.payload
      const anecdoteToChange = state.find( a => a.id === id)
      const changedAnecdote = { 
        ...anecdoteToChange, 
        votes: anecdoteToChange.votes + 1
      }
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : changedAnecdote
      ).sort((a1, a2)=> a2.votes > a1.votes ? 1 : -1)
    },
    createAnecdote(state, action){
      const createdAnecdote = {
        content: action.payload,
        id: getId(),
        votes: 0
      }
      return state.concat(createdAnecdote)
    },
    setAnecdotes(state,action){
      return action.payload
    }
  }
})

export const { addVote, createAnecdote, setAnecdotes} = anecdoteSlice.actions
export default anecdoteSlice.reducer