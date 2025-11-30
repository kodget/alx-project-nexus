export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
            E-Commerce Store
          </h1>
          <nav className="hidden sm:flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Products
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900 text-sm">
              Categories
            </a>
          </nav>
          <button className="sm:hidden p-2">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </header>
  )
}