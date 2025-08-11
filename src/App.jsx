import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">
            C-Harr ⭐
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Quand c'est harr, faut lâcher une larme 🥲
          </p>
          
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              React + Vite + Tailwind
            </h2>
            
            <div className="space-y-4">
              <button 
                onClick={() => setCount((count) => count + 1)}
                className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
              >
                Compteur: {count}
              </button>
              
              <p className="text-gray-600">
                Modifiez <code className="bg-gray-100 px-2 py-1 rounded text-sm">src/App.jsx</code> et sauvegardez pour tester le HMR
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">⚡ Vite</h3>
              <p className="text-gray-600 text-sm">Build tool rapide et moderne</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">⚛️ React</h3>
              <p className="text-gray-600 text-sm">Bibliothèque UI populaire</p>
            </div>
            <div className="bg-white rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">🎨 Tailwind</h3>
              <p className="text-gray-600 text-sm">Framework CSS utilitaire</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
