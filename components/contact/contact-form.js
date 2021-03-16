import {useEffect, useState} from 'react'
import Notification from '../ui/notification'
import styles from './contact-form.module.css'

const sendData = async data => {
  const response = await fetch('/api/contact', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {'content-type': 'application/json'}
  })
  if (!response.ok) throw new Error(response.message || 'Something went wrong.')
} 

const ContactForm = () => {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  // status of request sent: 'pending', 'success' or 'error'
  const [reqStatus, setReqStatus] = useState()
  const [reqError, setReqError] = useState()

  useEffect(() => {
    if (reqStatus === 'success' || reqStatus === 'error') {
      const timer = setTimeout(() => {
        setReqStatus(null)
        setReqError(null)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [reqStatus])

  const sendMsgHandler = async e => {
    e.preventDefault()
    setReqStatus('pending')
    try {
      await sendData({email, name, message})
      setReqStatus('success')
      setEmail('')
      setName('')
      setMessage('')
    } catch (err) {
      setReqStatus('error')
      setReqError(err.message)
    }
  }

  let notification
  if (reqStatus === 'pending') notification = {status: 'pending', title: 'Sending message...', message: 'Your message is being sent.'}
  if (reqStatus === 'success') notification = {status: 'success', title: 'Success', message: 'Your message has been sent.'}
  if (reqStatus === 'error') notification = {status: 'error', title: 'Error', message: reqError}
  
  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form className={styles.form} onSubmit={sendMsgHandler}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor='email'>Your Email</label>
            <input type='email' id='email' required value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div className={styles.control}>
            <label htmlFor='name'>Your Name</label>
            <input type='text' id='name' required value={name} onChange={e => setName(e.target.value)} />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor='message'>Your Message</label>
          <textarea id='message' rows='5' required value={message} onChange={e => setMessage(e.target.value)}></textarea>
        </div>
        <div className={styles.actions}>
          <button type='submit'>Send</button>
        </div>
      </form>
      {notification && <Notification notification={notification} />}
    </section>
  )
}

export default ContactForm
