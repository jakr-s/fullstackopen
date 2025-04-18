const Notification = ({ message }) => {
  if (message === null) {
    return null
  }

  const style = {
    color: message.isError ? 'red' : 'green'
  }

  return (
    <div style={style} className="notification">
      {message.text}
    </div>
  )
}

export default Notification
