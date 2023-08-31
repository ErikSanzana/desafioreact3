import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Alert from "./Alert";

/* predeterminado para que no provoque mas dramas */
function Formulario({ onAgregarColaborador, setAlert }) {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [edad, setEdad] = useState("");
  const [cargo, setCargo] = useState("");
  const [telefono, setTelefono] = useState("");

  /* predeterminado para que no arroje error le mando un null*/

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nombre && correo && edad && cargo && telefono) {
      const nuevoColaborador = {
        id: Date.now().toString(),
        nombre,
        correo,
        edad,
        cargo,
        telefono,
      };
      onAgregarColaborador(nuevoColaborador);
      setAlert({
        error: false,
        msg: "¡Registro exitoso!",
        color: "success"
      })
      setNombre("");
      setCorreo("");
      setEdad("");
      setCargo("");
      setTelefono("");
      /* resetear cubiculos por que si */
    } else {
      setAlert({
        error: true,
        msg: "Completa los campos",
        color: "danger"
      })
    }
  };
  /* alerta error */

  return (
    <div className="container">
      <h2>Agregar Colaborador</h2>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="nombre"
            placeholder="Nombre del colaborador"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="email"
            className="form-control"
            id="Correo"
            placeholder="Email del colaborador"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="number"
            className="form-control"
            id="edad"
            placeholder="Edad del colaborador"
            value={edad}
            onChange={(e) => setEdad(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="text"
            className="form-control"
            id="cargo"
            placeholder="Cargo del colaborador"
            value={cargo}
            onChange={(e) => setCargo(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <input
            type="tel"
            className="form-control"
            id="telefono"
            placeholder="Teléfono del colaborador"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Agregar Colaborador
        </button>
        {/*       El componente formulario debe contener el formulario con los campos necesarios
para agregar colaboradores a la lista y un botón para agregar los campos, además se
debe validar que los campos no se encuentren vacíos.
(1 Punto) */}
      </form>
    </div>
  );
}

export default Formulario;
