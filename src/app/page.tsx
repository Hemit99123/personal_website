import Blog from '@/components/Blog'
import Hero from '@/components/Hero'
import Projects from '@/components/Projects'
import Testimonials from '@/components/Testimonials'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Blog />
      <Testimonials />
    </div>
  )
}

export default page