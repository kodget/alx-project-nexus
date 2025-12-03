export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">
          Distinct Patterns PWA
        </h1>
        <div className="text-center">
          <p className="text-lg mb-4">
            Welcome to the Progressive Web App version of Distinct Patterns
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Offline Ready</h3>
              <p>Works offline with cached content</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Installable</h3>
              <p>Add to home screen for app-like experience</p>
            </div>
            <div className="p-6 border rounded-lg">
              <h3 className="text-xl font-semibold mb-2">Fast Loading</h3>
              <p>Optimized for performance and speed</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}