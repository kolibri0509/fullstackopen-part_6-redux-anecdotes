import { useSelector } from 'react-redux'
const Notification = () => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1,
    marginBottom: 10
  }
  const notification = useSelector(({notification})=>{
    if(notification === null) {
      return null
    }
    if(notification){
      return (
        <div style={style}>
          {notification}
        </div>
      )
    }
  })
  return notification
}

export default Notification