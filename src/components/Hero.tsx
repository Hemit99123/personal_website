import React from 'react'
import '@/app/font-config.css'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Hero = () => {
  return (
    <section className="bg-black min-h-screen text-amber-50 uppercase relative px-4 sm:px-6 lg:px-12 py-8 sm:py-12">
      {/* Name */}
      <h1 className="font-primary font-black text-center leading-tight 
        text-4xl sm:text-6xl md:text-8xl xl:text-[160px] break-words">
        Hemit Patel
      </h1>

      {/* Subtitle */}
      <div className="flex justify-center items-center mt-8 px-2">
        <div className="bg-amber-100 text-black rounded-lg px-4 py-2 sm:px-6 sm:py-3 shadow-lg text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-center">
          Full Stack Developer & Problem Solver
        </div>
      </div>

      {/* Tagline & Socials */}
      <div className="mt-10 flex flex-col md:flex-row md:items-center md:justify-center gap-6 text-center px-2">
        <p className="text-base sm:text-lg md:text-2xl font-medium max-w-xs sm:max-w-sm md:max-w-lg">
          Lead the change, don't let the change lead you.
        </p>

        <div className="flex justify-center gap-6">
          <Link href="https://github.com/Hemit99123" passHref>
            <span className="transform hover:scale-110 transition duration-200 ease-in-out cursor-pointer">
              <FaGithub className="text-3xl sm:text-4xl md:text-5xl" />
            </span>
          </Link>
          <Link href="https://www.linkedin.com/in/hemit-patel-383ab3271/" passHref>
            <span className="transform hover:scale-110 transition duration-200 ease-in-out cursor-pointer">
              <FaLinkedin className="text-3xl sm:text-4xl md:text-5xl" />
            </span>
          </Link>
        </div>
      </div>

      {/* Footer Info */}
      <div className="absolute bottom-4 left-4 md:bottom-8 md:left-8 max-w-xs">
        <p className="text-xs sm:text-sm md:text-lg font-medium">
          Software Engineer. Based in Toronto, Canada 🇨🇦🍁
        </p>
      </div>

      {/* CTA Button */}
      <Link href="https://tally.so/r/3x7Q9k/" passHref>
        <span className="absolute bottom-4 right-4 md:bottom-8 md:right-8 transform hover:scale-105 transition duration-200 ease-in-out cursor-pointer">
          <div className="bg-blue-700 rounded-full w-24 h-24 sm:w-28 sm:h-28 md:w-36 md:h-36 flex flex-col items-center justify-center text-center">
            <p className="font-bold text-white text-xs sm:text-sm md:text-lg">
              Let&apos;s
            </p>
            <p className="font-bold text-white text-xs sm:text-sm md:text-lg">
              connect!
            </p>
          </div>
        </span>
      </Link>
    </section>
  )
}

export default Hero
