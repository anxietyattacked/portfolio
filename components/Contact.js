import React from 'react'

const Contact = () => {
    return (
        <div className="px-16 bg-gray-200 py-8">
            <h1 className="font-varela font-bold text-4xl mb-8">Contact</h1>
            <form className="flex flex-col" action="/">
                <label htmlFor="name">Name</label>
                <input type="text" name="name"/>
                <label htmlFor="email">Email</label>
                <input className="mb-8" type="email" name="email"/>
                <label htmlFor="message">Message</label>
                <textarea className="" name="message" id="" cols="20" rows="10"></textarea>
                <div className="flex justify-center mt-8">
                <button className="px-6 py-3 bg-black text-white border-grad text-xl md:text-2xl w-1/2" type="submit">Send</button>
                </div>
                

            </form>
        </div>
    )
}

export default Contact
