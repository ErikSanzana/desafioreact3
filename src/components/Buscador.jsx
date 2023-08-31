import React, { useState } from "react"; // Importa React y el hook useState

function Buscador({ onBuscar }) {
  // Define el componente Buscador que recibe la función onBuscar como prop
  const [busqueda, setBusqueda] = useState(""); // Crea un estado llamado "busqueda" y su función de actualización "setBusqueda" con valor inicial vacío

  const handleInputChange = (event) => {
    // Define una función de manejo para el cambio en la entrada de búsqueda
    setBusqueda(event.target.value); // Actualiza el estado de búsqueda con el valor ingresado en el campo de entrada
    onBuscar(event.target.value); // Llama a la función onBuscar pasando el valor de búsqueda como argumento
  };

  return (
    <div className="mb-3">
{/*       <label htmlFor="busqueda" className="form-label">
        Buscar Colaborador
      </label> */}
      
      <input
        type="text"
        className="form-control"
        id="busqueda"
        placeholder="Buscar por nombre, correo, edad, cargo o teléfono"
        value={busqueda}
        onChange={handleInputChange}
      />
    </div>
    /* 6. Crear un componente para realizar una búsqueda de colaboradores por todos los
campos del formulario.
(1 Punto)
 */
  );
}

export default Buscador; // Exporta el componente Buscador
