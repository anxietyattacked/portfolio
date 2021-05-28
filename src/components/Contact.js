import React, {useState} from 'react'


const Contact = () => {
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [message, setMessage] = useState('')
const [submitted, setSubmitted] = useState(false)

const handleSubmit = (e) => { 
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
          setBody('')
        }
      })
  }
    return (
        <div className="px-16 bg-gray-200 py-8">
            <h1 className="font-varela font-bold text-4xl mb-8">Contact</h1>
            <h2>Email</h2>
            <p>michaelbergerson@gmail.com</p>
            <form className="flex flex-col">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" onChange={(e)=>{setName(e.target.value)}}/>
                <label htmlFor="email">Email</label>
                <input className="mb-8" type="email" name="email" onChange={(e)=>{setEmail(e.target.value)}}/>
                <label htmlFor="message">Message</label>
                <textarea className="" name="message" id="" cols="20" rows="10" onChange={(e)=>{setMessage(e.target.value)}}></textarea>
                <div className="flex justify-center mt-8">
                <button className="px-6 py-3 bg-black text-white border-grad text-xl md:text-2xl w-1/2" 
                onClick={(e) => {handleSubmit(e)}}
                // onClick={() => console.log({name, email, message})}
                >Send</button>
                </div>
                

            </form>
        </div>
    )
}

export default Contact
