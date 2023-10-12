import React, { useState } from 'react';
import CryptoJS from 'crypto-js';
import '../App.css'; // Asegúrate de tener un archivo CSS para los estilos.

function Home() {
  const [texto, setTexto] = useState('');
  const [accion, setAccion] = useState('cifrar'); // Establece "cifrar" como valor predeterminado
  const [resultado, setResultado] = useState('');
  const [bordeRojo, setBordeRojo] = useState(false);
  const [alerta, setAlerta] = useState('');

  const cifrar = (texto) => {
    const textoCifrado = CryptoJS.AES.encrypt(texto, '@angelscript').toString();
    return textoCifrado;
  };

  const descifrar = (texto) => {
    try {
      const bytes = CryptoJS.AES.decrypt(texto, '@angelscript');
      const textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
      return textoDescifrado;
    } catch (error) {
      return null;
    }
  };

  const handleTextoChange = (e) => {
    setTexto(e.target.value);
    setBordeRojo(false); // Restablecer el borde a su color original cuando se cambia el texto.
    setAlerta(''); // Borrar cualquier alerta existente.
  };

  const handleAccionChange = (nuevaAccion) => {
    if (accion !== nuevaAccion) {
      setAccion(nuevaAccion);
      setBordeRojo(false); // Restablecer el borde a su color original al cambiar la acción.
      setAlerta(''); // Borrar cualquier alerta existente al cambiar la acción.
    }
  };

  const handleObtenerResultado = () => {
    if (texto === '') {
      setBordeRojo(true); // Establecer el borde en rojo si no hay texto.
      setAlerta('');
      return;
    }

    if (accion === 'cifrar') {
      const tcifrado = cifrar(texto);
      if (tcifrado) {
        setResultado(tcifrado);
        setBordeRojo(false); // Restablecer el borde a su color original.
        setAlerta('');
      } else {
        setAlerta('El texto no es válido para cifrar.');
        setResultado(''); // Borrar cualquier resultado anterior.
      }
    } else if (accion === 'descifrar') {
      const tdescifrado = descifrar(texto);
      if (tdescifrado !== null) {
        setResultado(tdescifrado);
        setBordeRojo(false); // Restablecer el borde a su color original.
        setAlerta('El texto no es válido para descifrar.');
      } else {
        setAlerta('El texto no es válido para descifrar.');
        setResultado(''); // Borrar cualquier resultado anterior.
      }
    }
  };

  return (
    <div className="app-container">
      <h1 className='title'>Cifrado y Descifrado simétrico</h1>
      <h2 className='sub-title'>Biblioteca: crypto-js</h2>
      <h2 className='sub-title'>Método: AES (Advanced Encryption Standard)</h2>
      <div className="form-container">
        <div className='input-texto'>
          <label className='texto'>Texto:</label>
          <input
            className={`inputT ${bordeRojo ? 'borde-rojo' : ''}`}
            type="text"
            placeholder='Ingrese un texto'
            id="texto"
            value={texto}
            onChange={handleTextoChange}
          />
        </div>
        <div className="button-group">
          <div
            className={`action-button ${accion === 'cifrar' ? 'active' : ''}`}
            onClick={() => handleAccionChange('cifrar')}
          >
            Cifrar
          </div>
          <div
            className={`action-button ${accion === 'descifrar' ? 'active' : ''}`}
            onClick={() => handleAccionChange('descifrar')}
          >
            Descifrar
          </div>
        </div>
        <div className="result-button">
          <div onClick={handleObtenerResultado}>Obtener</div>
        </div>
        <div className="alerta">
          {alerta && <p>{alerta}</p>}
        </div>
      </div>
      <div className="resultado-container">
        <label>Resultado:</label>
        <textarea
          id="resultado"
          rows="4"
          cols="50"
          value={resultado}
          readOnly
        ></textarea>
      </div>
    </div>
  );
}

export default Home;
