import Link from "next/link"

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 bg-opacity-50 backdrop-blur-lg shadow-lg z-10">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-blue-400 hover:text-blue-300 transition-colors">
            Cville AI Explorers
          </Link>
        </div>
      </nav>
    </header>
  )
}

