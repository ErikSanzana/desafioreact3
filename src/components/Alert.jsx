import React from 'react'; // Importa la biblioteca React
import PropTypes from 'prop-types'; // Importa PropTypes para definir tipos de propiedades

function Alert({ type, message }) { // Define un componente funcional llamado Alert que toma dos propiedades: type y message
  return (
    <div className={`alert alert-${type}`} role="alert"> {/* Crea un contenedor de alerta con la clase CSS basada en el tipo */}
      {message} {/* Renderiza el mensaje proporcionado */}
    </div>
  );
}

Alert.propTypes = {
  type: PropTypes.oneOf(['success', 'danger']).isRequired, // Define el tipo de propiedad "type" como uno de los valores permitidos: 'success' o 'danger'
  message: PropTypes.string.isRequired, // Define el tipo de propiedad "message" como una cadena requerida
};

export default Alert;
/* Exporta el componente Alert como el componente predeterminado */ 
