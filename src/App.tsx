import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import LoginPage from './components/LoginPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="flex h-screen">
      {/* Left side - Main Content */}
      <div className="w-1/2 flex items-center justify-center bg-gray-900 text-white">
        <div className="text-center">
          <div className="flex justify-center gap-8 mb-8">
            <a href="https://vite.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1 className="text-4xl font-bold mb-8">Vite + React</h1>
          <div className="card">
            <button
              onClick={() => setCount((count) => count + 1)}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              count is {count}
            </button>
            <p className="mt-4 text-gray-300">
              Edit <code>src/App.tsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs mt-8 text-gray-400">
            Click on the Vite and React logos to learn more
          </p>
        </div>
      </div>

      {/* Right side - Login Page */}
      <div className="w-1/2">
        <LoginPage />
      </div>
    </div>
  )
}

export default App
