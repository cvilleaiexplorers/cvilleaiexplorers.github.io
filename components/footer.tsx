export default function Footer() {
  return (
    <footer className="bg-gray-800 bg-opacity-50 backdrop-blur-lg text-gray-300 py-8 relative z-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold text-blue-400">Cville AI Explorers</h2>
            <p className="text-gray-400">Building with AI in Charlottesville, Virginia</p>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white transition-colors">
              Meetup
            </a>
            <a href="#" className="hover:text-white transition-colors">
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          &copy; {new Date().getFullYear()} Cville AI Explorers. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

