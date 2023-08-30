import { useState } from 'react'; // Importa el hook useState de React
import reactLogo from './assets/react.svg'; // Importa una imagen de logo de React
import viteLogo from '/vite.svg'; // Importa una imagen de logo de Vite
import './App.css'; // Importa el archivo CSS para estilos específicos de la aplicación
import Listado from './components/Listado'; // Importa el componente Listado
import Formulario from './components/Formulario'; // Importa el componente Formulario
import Buscador from './components/Buscador'; // Importa el componente Buscador
import Alert from './components/Alert'; // Importa el componente Alert
import 'bootstrap/dist/css/bootstrap.min.css'; // Importa los estilos CSS de Bootstrap

function App() {
 /* Define los estados de mensaje y tipo de alerta utilizando el hook useState */
  const [mensaje, setMensaje] = useState('');
  const [alertType, setAlertType] = useState('');

 /* Define una función de manejo para agregar colaboradores */
  const handleAgregarColaborador = (nuevoColaborador) => {
    /* Establece el mensaje y el tipo de alerta al agregar un colaborador exitosamente */
    setMensaje('Colaborador agregado exitosamente');
    setAlertType('success');
  };

/* El componente App devuelve la estructura de la interfaz de usuario */
  return (
    <div className="container">
      <h1>Lista de Colaboradores</h1>
      
      {/* Renderiza el componente Alert si hay un mensaje */}
      {mensaje && <Alert type={alertType} message={mensaje} />}
      
      <div className="row">
        <div className="col-md-9">
          <Listado /> 
          {/* Renderiza el componente Listado */}
        </div>
        <div className="col-md-3">
          <Formulario onAgregarColaborador={handleAgregarColaborador} /> 
          {/* Renderiza el componente Formulario */}
        </div>
      </div>
    </div>
  );
}

export default App;
/* Exporta el componente App como el componente principal de la aplicación */
