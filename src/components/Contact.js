import React, {useState} from 'react'


const Contact = () => {
const [name, setName] = useState('')
const [nameError, setNameError] = useState(false)
const [email, setEmail] = useState('')
const [emailError, setEmailError] = useState(false)
const [message, setMessage] = useState('')
const [messageError, setMessageError] = useState(false)
const [submitted, setSubmitted] = useState(false)

const  handleSubmit = async (e) => { 
  if(name === ""){
  setNameError(true)
  return
  }
  else if(email === ""){
    setEmailError(true)
    return
  }else if(message === ''){
    setMessageError(true)
    return
  }
    e.preventDefault()
    console.log('Sending')
  let data = {
      name,
      email,
      message
    }
    fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Accept': 'application/json, text/plain, */*',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      }).then((res) => {
        console.log('Response received')
        if (res.status === 200) {
          console.log('Response succeeded!')
          setSubmitted(true)
          setName('')
          setEmail('')
          setMessage('')
          setNameError(false)
          setEmailError(false)
          setMessageError(false)
        }
      })
  }
    return (
        <section id="contact" className="px-16 bg-gray-200 py-8">
            <h1 className="font-varela font-bold text-4xl mb-8">Contact</h1>
            {submitted ? <h1 className="text-center text-green-500 text-xl font-varela font-bold">Message Sent</h1> : null}
            <h2><strong>Email</strong></h2>
            <p>michaelbergerson@gmail.com</p>
            <form className="flex flex-col mt-8">
              <div className="flex flex-col">
                {nameError ? <p className="font-roboto text-red-500">Name Required</p> : null}
                <label className="font-roboto" htmlFor="name">Name</label>
                <input type="text" name="name" onChange={(e)=>{setName(e.target.value)}} required/>
                </div>
                <div className="flex flex-col">
                {emailError ? <p className="font-roboto text-red-500">Email Required</p> : null}
                <label className="font-roboto" htmlFor="email">Email</label>
                <input className="mb-8" type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}} required/>
                </div>
                <div className="flex flex-col">
                {messageError ? <p className="font-roboto text-red-500">Message Required</p> : null}
                <label className="font-roboto" htmlFor="message">Message</label>
                <textarea className="" name="message" id="" cols="20" rows="10" onChange={(e)=>{setMessage(e.target.value)}} required></textarea>
                </div>
                <div className="flex justify-center mt-8">
                <button className="px-6 py-3 bg-black font-varela text-white border-grad text-xl md:text-2xl w-full md:w-1/2" 
                aria-label="send message"
                onClick={(e) => {handleSubmit(e)}}
                >Send</button>
                </div>
                

            </form>
        </section>
    )
}

export default Contact
