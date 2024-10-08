import { createSlice } from "@reduxjs/toolkit"
import anecdoteService from '../../services/anecdotes'

const anecdoteSlice = createSlice({
  name:'anecdotes',
  initialState: [],
  reducers: {
    addVote(state, action){
      const id = action.payload.id
      return state.map(anecdote =>
        anecdote.id !== id ? anecdote : action.payload
      ).sort((a1, a2)=> a2.votes > a1.votes ? 1 : -1)
    },
    createAnecdote(state, action){
      return state.concat(action.payload)
    },
    setAnecdotes(state,action){
      return action.payload
    }
  }
})

export const { addVote, createAnecdote, setAnecdotes} = anecdoteSlice.actions

export const initializeAnecdotes = () => {
  return async dispatch => {
    const anecdotes = await anecdoteService.getAll()   
    dispatch(setAnecdotes(anecdotes))
  }
}
export const addAnecdote = (content) => {
  return async dispatch => {
    const anecdote = await anecdoteService.createNew(content)
    dispatch(createAnecdote(anecdote))
  }
}
export const changeVote = (object) => {
  return async dispatch => {
    const id = object.id
    const incrementVote = await anecdoteService.changeVote(id,object)
    dispatch(addVote(incrementVote))
  }
}
export default anecdoteSlice.reducer