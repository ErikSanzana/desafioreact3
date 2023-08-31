import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Table from "react-bootstrap/Table"

function Listado({ colaboradores, onEliminarColaborador }) {
  return (
    <div className="container shadow-lg pt-3 rounded table-responsive">
        <Table striped bordered hover responsive="md">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Correo</th>
              <th>Edad</th>
              <th>Cargo</th>
              <th>Teléfono</th>
              <th>Eliminar</th>
            </tr>
          </thead>
          <tbody>
            {colaboradores.map((colaborador) => (
              <tr key={colaborador.id}>
                <td>{colaborador.id}</td>
                <td>{colaborador.nombre}</td>
                <td>{colaborador.correo}</td>
                <td>{colaborador.edad}</td>
                <td>{colaborador.cargo}</td>
                <td>{colaborador.telefono}</td>
                <td>
                            {/* 3. En el componente Listado se deben mostrar los datos de los colaboradores
utilizando una tabla de Bootstrap.
(1 Punto)
 */}
                  <button
                    className="btn btn-danger"
                    onClick={() => onEliminarColaborador(colaborador.id)}
                  >
                    Eliminar
                  </button>
                  {/* 9. Agregar un botón a cada colaborador dentro del listado para eliminar los registros.
(Opcional)
 */}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
    </div>
  );
}

export default Listado;



