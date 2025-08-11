 import { useState, useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)

  // Charger le compteur depuis localStorage au démarrage
  useEffect(() => {
    const savedCount = localStorage.getItem('c-harr-click-count')
    if (savedCount) {
      setCount(parseInt(savedCount, 10))
    }
  }, [])

  // Sauvegarder le compteur dans localStorage à chaque changement
  useEffect(() => {
    localStorage.setItem('c-harr-click-count', count.toString())
  }, [count])

  const handleClick = () => {
    setCount(prevCount => prevCount + 1)
  }

  const resetCount = () => {
    setCount(0)
  }

  return (
    <div className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-12">
          <h1 className="text-6xl font-bold text-black mb-6">
            C-Harr ⭐
          </h1>
          <p className="text-2xl text-gray-700 mb-8">
            Quand c'est harr, faut lâcher une larme 🥲
          </p>
        </div>
        
        <div className="bg-gray-100 border-2 border-black rounded-lg p-8 mb-8 shadow-lg">
          <h2 className="text-3xl font-semibold text-black mb-6">
            Compteur de larmes
          </h2>
          
          <div className="mb-8">
            <div className="text-8xl font-bold text-black mb-4">
              {count}
            </div>
            <p className="text-lg text-gray-600">
              {count === 0 ? 'Aucun clic' : count === 1 ? '1 clic enregistré' : `${count} clics enregistrés`}
            </p>
          </div>
          
          <div className="flex flex-col sm:justify-center gap-4">
            <button 
              onClick={handleClick}
              className="bg-black hover:bg-gray-800 text-white font-medium py-4 px-8 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              Cliquez ici ! 👆
            </button>
            
            <button 
              onClick={resetCount}
              className="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg w-full sm:w-auto"
            >
              Reset 🔄
            </button>
          </div>
        </div>

        <div className="mt-8 text-xs text-gray-500">
          <p>Vos larmes sont sauvegardées localement dans votre navigateur</p>
          <p>Bon courage !</p>
        </div>
      </div>
    </div>
  )
}

export default App