import React, { useState } from 'react'; // Importa React y el hook useState
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos CSS de Bootstrap
import Alert from './Alert'; // Importa el componente Alert

function Formulario({ onAgregarColaborador }) { // Define el componente Formulario que recibe la función onAgregarColaborador como prop
  const [nombre, setNombre] = useState(''); // Crea un estado llamado "nombre" y su función de actualización "setNombre" con valor inicial vacío
  const [correo, setCorreo] = useState(''); // Crea un estado llamado "correo" y su función de actualización "setCorreo" con valor inicial vacío
  const [edad, setEdad] = useState(''); // Crea un estado llamado "edad" y su función de actualización "setEdad" con valor inicial vacío
  const [cargo, setCargo] = useState(''); // Crea un estado llamado "cargo" y su función de actualización "setCargo" con valor inicial vacío
  const [telefono, setTelefono] = useState(''); // Crea un estado llamado "telefono" y su función de actualización "setTelefono" con valor inicial vacío

  const [mensaje, setMensaje] = useState(''); // Crea un estado llamado "mensaje" y su función de actualización "setMensaje" con valor inicial vacío
  const [alertType, setAlertType] = useState(''); // Crea un estado llamado "alertType" y su función de actualización "setAlertType" con valor inicial vacío

  const handleSubmit = (event) => { // Define una función de manejo para el envío del formulario
    event.preventDefault(); // Previene el comportamiento predeterminado del envío del formulario
    if (nombre && correo && edad && cargo && telefono) { // Verifica si todos los campos requeridos están llenos
      const nuevoColaborador = { // Crea un objeto con la información del nuevo colaborador
        id: Date.now().toString(), // Genera un ID único basado en la marca de tiempo
        nombre,
        correo,
        edad,
        cargo,
        telefono,
      };
      onAgregarColaborador(nuevoColaborador); // Llama a la función onAgregarColaborador pasando el nuevo colaborador como argumento
      setNombre(''); // Reinicia los estados a valores vacíos
      setCorreo('');
      setEdad('');
      setCargo('');
      setTelefono('');
    }
  };

  return (
    <div className="container">
      <h2>Agregar Colaborador</h2>
      {mensaje && <Alert type={alertType} message={mensaje} />}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="correo" className="form-label">Correo</label>
          <input
            type="email"
            className="form-control"
            id="correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="edad" className="form-label">Edad</label>
          <input
            type="number"
            className="form-control"
            id="edad"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="cargo" className="form-label">Cargo</label>
          <input
            type="text"
            className="form-control"
            id="cargo"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="telefono" className="form-label">Teléfono</label>
          <input
            type="tel"
            className="form-control"
            id="telefono"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>
        
        <button type="submit" className="btn btn-primary">Agregar Colaborador</button>
      </form>
    </div>
  );
  
}

export default Formulario;
