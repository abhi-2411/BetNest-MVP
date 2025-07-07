import { useState } from 'react';
import { useAuth } from './contexts/AuthContext';
import { getRouteByRole } from './routes/routes';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  const { user } = useAuth();

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-center">
      {/* Branding section */}
      <div className="flex justify-center gap-4 mb-4">
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="h-16 hover:scale-105 transition" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="h-16 hover:scale-105 transition" alt="React logo" />
        </a>
      </div>

      {/* Title */}
      <h1 className="text-4xl font-bold text-blue-600 mb-4">Vite + React + BetNest</h1>

      {/* Button counter */}
      <div className="bg-white rounded-xl shadow-md p-6 w-fit mx-auto mb-6">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
        <p className="text-gray-500 mt-2">
          Edit <code>src/App.jsx</code> and save to test HMR.
        </p>
      </div>

      {/* Role-based dashboard rendering */}
      <div className="mt-10">
        {user ? (
          getRouteByRole(user.role)
        ) : (
          <p className="text-gray-600 italic">Loading user...</p>
        )}
      </div>
    </div>
  );
}

export default App;
