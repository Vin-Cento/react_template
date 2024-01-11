import { Counter } from "./components/Counter";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from './components/NavBar.tsx'

function App() {
  return (
    <>
      <NavBar />
      <div className="flex justify-center items-center p-2">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="w-28 animate-pulse-slow" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="w-28 animate-spin-slow" alt="React logo" />
        </a>
      </div>
      <h1 className="text-center">Vite + React</h1>
      <div className="text-center">
        <Counter />
      </div>
    </>
  );
}

export default App;
