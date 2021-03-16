import Head from 'next/head'
import ContactForm from '../components/contact/contact-form'

const ContactPage = () => {
  return (
    <>
      <Head>
        <meta name='description' content='Send me a message' />
        <title>Chi's Blog - Contact Me</title>
      </Head>
      <ContactForm />
    </>
  )
}

export default ContactPage
