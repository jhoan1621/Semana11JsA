// Importamos React y el hook useState para manejar el estado
import { useState } from 'react'

// Definimos nuestro componente Login
function Login() {
  // useState es un hook que nos permite tener estado en componentes funcionales
  // Creamos dos estados: uno para el email y otro para el mensaje
  const [email, setEmail] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [contra, setContra]=useState('')
  const [mensaje2, setMensaje2] = useState('')

  // Esta función se ejecuta cuando el usuario hace click en "Iniciar Sesión"
  const handleSubmit = (e) => {
    // Prevenimos que el formulario recargue la página
    e.preventDefault()


    if (contra.length>8) {
      // Si es válido, mostramos mensaje de bienvenida
      setMensaje2(`Contraseña valida`)
    } else {
      // Si no es válido, mostramos mensaje de error
      setMensaje2('Contraseña invalida debe tener almenos 9 letras')
    }
    
    // Validamos que el email termine en @utp.edu.pe
    if (email.endsWith('@utp.edu.pe')&&email.startsWith('u')) {
      // Si es válido, mostramos mensaje de bienvenida
      setMensaje(`¡Bienvenido estudiante universitario. Tu correo ${email} es válido.`)
    } else {
      // Si no es válido, mostramos mensaje de error
      setMensaje('Error: Solo estudiantes con correo universitario pueden ingresar.')
    };

    
  }

  // El JSX que retornamos es lo que se va a mostrar en pantalla
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-5">
          <div className="card">
            <div className="card-body p-4 p-md-5">
              <h2 className="card-title text-center mb-4">Login Universitario</h2>
              
              {/* Formulario de login */}
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Correo Institucional
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="tu.nombre@utp.edu.pe"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className='mt-3 mb-3'>
                  <label htmlFor="contra" className="form-label">
                    Contraseña Institucional
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="contra"
                    placeholder="Contraseña"
                    value={contra}
                    onChange={(e) => setContra(e.target.value)}
                    required
                  />
                  </div>
                  <div className="form-text">
                    Ingresa tu correo institucional de la UTP
                  </div>
                </div>
                
                <button type="submit" className="btn btn-primary w-100">
                  Iniciar Sesión
                </button>
              </form>
              
              {/* Mostramos el mensaje si existe */}
              {mensaje && (
                <div className={`alert mt-3 ${mensaje.includes('Error') ? 'alert-danger' : 'alert-success'}`}>
                  {mensaje}
                </div>
              )}
              {mensaje2 && (
                <div className={`alert mt-3 ${mensaje.includes('Error') ? 'alert-danger' : 'alert-success'}`}>
                  {mensaje2}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Exportamos el componente para poder usarlo en otros archivos
export default Login