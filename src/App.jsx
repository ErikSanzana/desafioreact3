import React, { useState } from "react";
import "./App.css";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Alert from "./components/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from "./components/BaseColaboradores";
import Buscador from "./components/Buscador";

function App() {
  const [mensaje, setMensaje] = useState("");
  const [alertType, setAlertType] = useState("");
  const [busqueda, setBusqueda] = useState("");
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  const handleAgregarColaborador = (nuevoColaborador) => {
    if (
      nuevoColaborador.nombre &&
      nuevoColaborador.correo &&
      nuevoColaborador.edad &&
      nuevoColaborador.cargo &&
      nuevoColaborador.telefono
    ) {
      const ultimaId = colaboradores.length > 0 ? parseInt(colaboradores[colaboradores.length - 1].id) : 0;
      const nuevaId = ultimaId + 1;
      
      setColaboradores([...colaboradores, { ...nuevoColaborador, id: nuevaId }]);
      setMensaje("Colaborador agregado exitosamente");
      setAlertType("success");
    } else {
      setMensaje("Por favor, complete todos los campos.");
      setAlertType("danger");
    }
  };

  const handleBuscar = (valorBusqueda) => {
    setBusqueda(valorBusqueda);
  };

  const handleEliminarColaborador = (colaboradorId) => {
    const nuevosColaboradores = colaboradores.filter(
      (colaborador) => colaborador.id !== colaboradorId
    );
    setColaboradores(nuevosColaboradores);
  };

  const colaboradoresFiltrados = colaboradores.filter((colaborador) => {
    return (
      colaborador.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      colaborador.correo.toLowerCase().includes(busqueda.toLowerCase()) ||
      colaborador.edad.toString().includes(busqueda) ||
      colaborador.cargo.toLowerCase().includes(busqueda.toLowerCase()) ||
      colaborador.telefono.includes(busqueda)
    );
  });

  return (
    <div className="container">
      <h1>Lista de Colaboradores</h1>
      <div className="row">
        <div className="col-md-9">
          <Buscador onBuscar={handleBuscar} />
          <Listado
            colaboradores={colaboradoresFiltrados}
            onEliminarColaborador={handleEliminarColaborador}
          />
        </div>
        <div className="col-md-3">
          <Formulario
            onAgregarColaborador={handleAgregarColaborador}
            mensaje={mensaje}
            alertType={alertType}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
