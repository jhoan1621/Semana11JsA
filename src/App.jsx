// Importamos el componente Login que creamos
import Login from './components/Login'
import './App.css'

function App() {
  return (
    <div className="App">
      <h1 className="text-center mt-3 mb-4">Mi Primera App React</h1>
      {/* Aquí usamos nuestro componente Login */}
      <Login />
    </div>
  )
}

export default App