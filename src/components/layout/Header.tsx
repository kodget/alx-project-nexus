export default function Header() {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            E-Commerce Store
          </h1>
          <nav className="flex space-x-6">
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Products
            </a>
            <a href="#" className="text-gray-600 hover:text-gray-900">
              Categories
            </a>
          </nav>
        </div>
      </div>
    </header>
  )
}