import ReactDOM from 'react-dom'
import styles from './notification.module.css'

const Notification = ({notification}) => {
  const {status, title, message} = notification

  let statusstyles = ''
  if (status === 'success') statusstyles = styles.success
  if (status === 'error') statusstyles = styles.error
  const cssstyles = `${styles.notification} ${statusstyles}`

  return ReactDOM.createPortal(
    <div className={cssstyles}>
      <h2>{title}</h2>
      <p>{message}</p>
    </div>,
    document.getElementById('notifications')
  )
}

export default Notification
