import React from 'react'
import Hero from './sections/Hero'
import Gallery from './sections/Gallery'
import Messages from './sections/Messages'
import Form from './sections/Form'

const Homepage = () => {
    return (
        <div className=' h-[100vh] overflow-y-scroll scroll-smooth pb-[20px] overflow-x-hidden'>
            <Hero />
            <Gallery />
            <Messages />
            <Form />
        </div>
    )
}

export default Homepage