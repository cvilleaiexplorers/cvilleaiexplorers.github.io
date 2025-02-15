import type React from "react"
import Head from "next/head"
import Header from "./header"
import Footer from "./footer"

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col min-h-screen bg-gray-900 text-gray-100 relative">
      <Head>
        <title>Cville AI Explorers</title>
        <meta name="description" content="Building with AI in Charlottesville, Virginia" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className="flex-grow container mx-auto px-4 sm:px-6 lg:px-8 py-8 relative z-10">{children}</main>
      <Footer />
    </div>
  )
}

