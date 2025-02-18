"use client"

import { useState } from "react"
import Image from "next/image"

export default function SponsorsCard() {
  const [isExpanded, setIsExpanded] = useState(false)

  return (
    <section className="bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg p-8 relative overflow-hidden">
      <h2 className="text-3xl font-bold section-header mb-6">Our Sponsors</h2>
      <div className="flex flex-col items-center">
        <a 
          href="https://www.studioix.co/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:opacity-80 transition-opacity"
        >
          <img 
            src={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/assets/STUDIO_IX_Logo_White.jpg`}
            alt="Studio IX Logo" 
            width={200} 
            height={100} 
            className="mb-4"
          />
        </a>
        <p className="text-gray-300 text-lg mb-4 text-center">
          Studio IX is a coworking space in downtown Charlottesville, Virginia, designed for freelancers, entrepreneurs,
          and remote workers.
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="px-3 py-1 text-sm bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition-colors"
        >
          {isExpanded ? "Show Less" : "Learn More"}
        </button>
        {isExpanded && (
          <div className="mt-4 text-gray-300">
            <p className="mb-2">
              Studio IX offers a flexible shared office environment with options for open workspaces, dedicated desks, and
              private offices. The space fosters a collaborative community through weekly events and mixers, featuring a
              'warm industrial' atmosphere with ample natural light.
            </p>
            <p className="mb-2">
              Amenities include high-speed internet, soundproof phone booths, conference rooms, and premium coffee.
              Studio IX is staffed by a community manager on weekdays and provides 24/7 access for members.
            </p>
            <p className="mb-4">Tours of the space are available; interested individuals can contact them via:</p>
            <ul className="list-disc list-inside">
              <li>
                Email:{" "}
                <a
                  href="mailto:COWORK@STUDIOIX.CO"
                  className="text-blue-400 hover:text-blue-300 underline transition-colors"
                >
                  COWORK@STUDIOIX.CO
                </a>
              </li>
              <li>
                Phone:{" "}
                <a href="tel:+14342603803" className="text-blue-400 hover:text-blue-300 underline transition-colors">
                  434.260.3803
                </a>
              </li>
              <li>
                Website:{" "}
                <a
                  href="https://www.studioix.co/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline transition-colors"
                >
                  https://www.studioix.co/
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

