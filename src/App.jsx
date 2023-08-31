import React, { useState } from "react";
import "./App.css";
import Listado from "./components/Listado";
import Formulario from "./components/Formulario";
import Alert from "./components/Alert";
import "bootstrap/dist/css/bootstrap.min.css";
import { BaseColaboradores } from "./components/BaseColaboradores";
import Buscador from "./components/Buscador";

function App() {
  const [busqueda, setBusqueda] = useState("");
  const [colaboradores, setColaboradores] = useState(BaseColaboradores);

  // El estado de alert es un objeto que tiene tres propiedades: error, msg y color.
  // Estas propiedades se utilizan para mostrar mensajes de alerta en la interfaz de usuario.
  const [alert, setAlert] = useState({
    error: "",
    msg: "",
    color: ""
  });

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
    <div className="container shadow-lg p-3 rounded">
      <h1>Lista de Colaboradores</h1>
      <Buscador onBuscar={handleBuscar} />
      <div className="row">
        <div className="col-lg-8 col-md-12">
          <Listado
            colaboradores={colaboradoresFiltrados}
            onEliminarColaborador={handleEliminarColaborador}
          />
        </div>
        <div className="col-lg-4 col-md-12 d-flex flex-column align-items-center">
          <Formulario
            onAgregarColaborador={handleAgregarColaborador}
            setAlert={setAlert}
          />
          {alert.msg && <Alert msg={alert.msg} color={alert.color} />}
        </div>
      </div>
    </div>
  );
}

export default App;
