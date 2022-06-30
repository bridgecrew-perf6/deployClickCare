import React from 'react'
import phone from "./Img/62.png"
import "./Phone.css"
function Phone() {
  return (
    <div className='phoneContainer'>
    <div className='Colum1'></div>
    <div className='phoneCall'>
          <img className='phoneImg' src={phone} alt=""/>
    </div>
    <div className='phoneTexto'>
      <p>Descarga ya nuestra app para llevar la seguridad a todas partes en todo momento.</p>
      <button className='buttonOne'>Descargar</button>
    </div>
   
    <div className='Colum1'></div>
    </div>
  )
}
export default Phone