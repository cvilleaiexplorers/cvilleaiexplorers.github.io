"use client"

import Layout from "../components/layout"
import AIGraphic from "../components/ai-graphic"
import SponsorsCard from "../components/sponsors-card"
import { useEffect } from "react"

export default function Home() {
  const nextMeetupDate = "August 26, 2025"

  useEffect(() => {
    const smoothScroll = (e: Event) => {
      e.preventDefault()
      const targetId = (e.currentTarget as HTMLAnchorElement).getAttribute("href")
      if (targetId) {
        const targetElement = document.querySelector(targetId)
        targetElement?.scrollIntoView({ behavior: "smooth" })
      }
    }

    const links = document.querySelectorAll('a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", smoothScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", smoothScroll)
      })
    }
  }, [])

  return (
    <Layout>
      <AIGraphic />
      <div className="space-y-6 relative">
        <div className="mb-8"></div>
        <section id="hero" className="min-h-[40vh] flex flex-col justify-center items-center text-center relative">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-4">
            Cville AI Explorers
          </h1>
          <p className="text-xl text-gray-300 mb-8">Building with AI in Charlottesville, Virginia</p>
          <p className="text-2xl font-semibold text-blue-400">
            Next Meetup:{" "}
            <a
              href="https://www.meetup.com/cville-tech/events/310284299"
              className="underline hover:text-blue-300 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              {nextMeetupDate}
            </a>
          </p>
        </section>
        <section
          id="about"
          className="bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg p-8 relative overflow-hidden"
        >
          <h2 className="text-3xl font-bold section-header mb-6">About Us</h2>
          <p className="text-gray-300 text-lg mb-4">
            We are a group of builders, learners, and enthusiasts who gather to:
          </p>
          <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
            <li>Build practical AI applications and tools</li>
            <li>Share technical knowledge and implementation experiences</li>
            <li>Learn about and explore emerging AI technologies</li>
            <li>Discover ways to enhance productivity and creativity</li>
            <li>Support each other in creating AI-powered solutions</li>
          </ul>
        </section>

        <section
          id="mission"
          className="bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg p-8 relative overflow-hidden"
        >
          <h2 className="text-3xl font-bold section-header mb-6">Our Mission</h2>
          <p className="text-gray-300 text-lg">
            Our mission is to foster a community where people can develop AI building skills through hands-on projects,
            technical sharing, and collaborative learning, and discover practical ways to integrate AI tools into their
            work and daily lives. While our focus is on active building and implementation, we welcome anyone interested
            in learning these skills.
          </p>
        </section>

        <section
          id="activities"
          className="bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg p-8 relative overflow-hidden"
        >
          <h2 className="text-3xl font-bold section-header mb-6">Activities and Directions</h2>
          <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
            <li>Exploring modern AI platforms and workflow tools</li>
            <li>Technical demos and talks from AI builders</li>
            <li>Technical book discussions and learning circles</li>
            <li>Collaborative building sessions and group projects</li>
          </ul>
        </section>

        <section
          id="join"
          className="bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg p-8 relative overflow-hidden"
        >
          <h2 className="text-3xl font-bold section-header mb-6">Join Us</h2>
          <p className="text-gray-300 text-lg mb-4">
            Whether you're actively building AI applications or eager to learn how, there's a place for you in our
            community. We emphasize practical skills and implementation while maintaining an inclusive environment for
            learning.
          </p>
          <h3 className="text-2xl font-semibold text-blue-400 mb-4">Get Involved</h3>
          <ul className="list-disc list-inside text-gray-300 text-lg space-y-2">
            <li>Attend our meetups</li>
            <li>Share your AI experiences</li>
            <li>Collaborate with other members</li>
            <li>Present your projects or findings</li>
            <li>Learn from peers</li>
          </ul>
        </section>

        <section
          id="contact"
          className="bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg p-8 relative overflow-hidden"
        >
          <h2 className="text-3xl font-bold section-header mb-6">Contact</h2>
          <p className="text-gray-300 text-lg">
            Cville AI Explorers operates under the{" "}
            <a
              href="https://www.meetup.com/cville-tech/"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Charlottesville Technologists meetup
            </a>
            . Contact organizers in the{" "}
            <a
              href="https://cville.slack.com/archives/C08DTL1TS1K"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              #cvilleaiexplorers
            </a>
            {" "}channel on{" "}
            <a
              href="https://cville.slack.com"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cville Slack
            </a>
            .
          </p>
        </section>

        <SponsorsCard />

        <section
          id="code-of-conduct"
          className="bg-gray-800 bg-opacity-50 backdrop-blur-lg shadow-lg rounded-lg p-8 relative overflow-hidden"
        >
          <h2 className="text-3xl font-bold section-header mb-6">Code of Conduct</h2>
          <p className="text-gray-300 text-lg">
            Cville AI Explorers follows the{" "}
            <a
              href="https://github.com/cville/conduct"
              className="text-blue-400 hover:text-blue-300 underline transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Cville Slack Code of Conduct
            </a>
            .
          </p>
        </section>
      </div>
    </Layout>
  )
}

