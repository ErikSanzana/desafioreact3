import React from 'react'; // Importa la biblioteca React
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos CSS de Bootstrap
import { BaseColaboradores } from './BaseColaboradores'; // Importa el arreglo BaseColaboradores desde el archivo BaseColaboradores.js

function Listado() { // Define el componente Listado
  return (
    <div className="container">
      <h2>Listado de Colaboradores</h2> {/* Título del listado */}
      <table className="table"> {/* Crea una tabla con la clase CSS de Bootstrap */}
        <thead>
          <tr>
            <th>ID</th> {/* Encabezado de columna */}
            <th>Nombre</th> {/* Encabezado de columna */}
            <th>Correo</th> {/* Encabezado de columna */}
            <th>Edad</th> {/* Encabezado de columna */}
            <th>Cargo</th> {/* Encabezado de columna */}
            <th>Teléfono</th> {/* Encabezado de columna */}
          </tr>
        </thead>
        <tbody>
          {/* Utiliza el método map para recorrer el arreglo BaseColaboradores y renderizar cada colaborador en una fila de la tabla */}
          {BaseColaboradores.map((colaborador) => (
            <tr key={colaborador.id}> {/* Asigna la clave "id" como propiedad clave a cada fila */}
              <td>{colaborador.id}</td> {/* Muestra el ID del colaborador */}
              <td>{colaborador.nombre}</td> {/* Muestra el nombre del colaborador */}
              <td>{colaborador.correo}</td> {/* Muestra el correo del colaborador */}
              <td>{colaborador.edad}</td> {/* Muestra la edad del colaborador */}
              <td>{colaborador.cargo}</td> {/* Muestra el cargo del colaborador */}
              <td>{colaborador.telefono}</td> {/* Muestra el teléfono del colaborador */}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Listado; // Exporta el componente Listado
