import React, { useState } from 'react';
import CryptoJS from 'crypto-js';

function Home() {
  const [texto, setTexto] = useState('');
  const [accion, setAccion] = useState('cifrar');
  const [resultado, setResultado] = useState('');

  const cifrar = (texto) => {
    var textoCifrado = CryptoJS.AES.encrypt(texto, '@angelscript').toString();
    return textoCifrado;
  }

  const descifrar = (texto) => {
    var bytes = CryptoJS.AES.decrypt(texto, '@angelscript');
    var textoDescifrado = bytes.toString(CryptoJS.enc.Utf8);
    return textoDescifrado;
  }

  const handleTextoChange = (e) => {
    setTexto(e.target.value);
  };

  const handleAccionChange = (e) => {
    setAccion(e.target.value);
  };

  const handleObtenerResultado = () => {
    // Ejemplo de implementación:
    if (accion === 'cifrar') {
      var tcifrado = cifrar(texto);
      setResultado(tcifrado)
    } else if (accion === 'descifrar') {
      var tdescifrado = descifrar(texto);
      setResultado(tdescifrado)
    }
  };

  return (
    <div className="App">
      <h1>Cifrado y Descifrado</h1>
      <div>
        <label htmlFor="texto">Texto:</label>
        <input
          type="text"
          id="texto"
          value={texto}
          onChange={handleTextoChange}
        />
      </div>
      <div>
        <input
          type="radio"
          id="cifrar"
          name="accion"
          value="cifrar"
          checked={accion === 'cifrar'}
          onChange={handleAccionChange}
        />
        <label htmlFor="cifrar">Cifrar</label>
        <input
          type="radio"
          id="descifrar"
          name="accion"
          value="descifrar"
          checked={accion === 'descifrar'}
          onChange={handleAccionChange}
        />
        <label htmlFor="descifrar">Descifrar</label>
      </div>
      <button onClick={handleObtenerResultado}>Obtener</button>
      <div>
        <label htmlFor="resultado">Resultado:</label>
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
