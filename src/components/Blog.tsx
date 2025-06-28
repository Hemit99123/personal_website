import Link from 'next/link'
import React from 'react'

const Blog = () => {
  return (
    <div className="bg-black pb-28">
      <h1 className="text-4xl sm:text-6xl md:text-8xl lg:text-[100px] xl:text-[120px] text-amber-50 font-primary text-center pt-20">
        Read our blogs
      </h1>
        <p className="text-lg sm:text-2xl md:text-3xl text-gray-200 font-medium text-center px-4 sm:px-8 max-w-2xl md:max-w-4xl lg:max-w-6xl mx-auto mt-3">
            Writing is my passion, and this blog is where I share my thoughts, experiences, and insights on technology, development, and creativity. Dive in to explore articles that inspire, inform, and spark meaningful conversations.
        </p>
        <div className="flex justify-center">
          <Link href="https://hemitdev.wordpress.com/" className="uppercase cursor-pointer mt-14 flex items-center gap-3 px-10 py-2 border-2 border-blue-200 rounded-full bg-transparent text-blue-200 font-bold text-2xl">
              Explore today
              <span className="ml-3 text-3xl">&#8594;</span>
          </Link>
        </div>
    </div>
  )
}

export default Blog