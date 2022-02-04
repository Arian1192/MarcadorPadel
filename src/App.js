import './App.css';
import { useRef } from 'react';

// COMPONENTE

export default function App() {
    // CONSTANTES
  const refPunto1 = useRef();
  const refPunto2 = useRef();
 /**
  * Equipo 1
  */
  const refJuegoE1_1 = useRef();
  const refJuegoE1_2 = useRef();
  const refJuegoE1_3 = useRef();
  /**
   * Equipo 2
   */
  const refJuegoE2_1 = useRef();
  const refJuegoE2_2 = useRef();
  const refJuegoE2_3 = useRef();

  const suma = 1;
    // FUNCIONES
  function reset1() {
    refPunto1.current.innerHTML = '0';
  }
  function reset2() {
    refPunto2.current.innerHTML = '0';
  }
  function resetTotal() {
    refPunto1.current.innerHTML = '0';
    refPunto2.current.innerHTML = '0';
    refJuegoE1_1.current.innerHTML = '0';
    refJuegoE1_2.current.innerHTML = '0';
    refJuegoE1_3.current.innerHTML = '0';
    refJuegoE2_1.current.innerHTML = '0';
    refJuegoE2_2.current.innerHTML = '0';
    refJuegoE2_3.current.innerHTML = '0';
  }

  function Mensaje(){
    alert("Tu Equipo ha ganado el JUEGO");
  }

  // FUNCION QUE SUMA LOS PUNTOS DEL PRIMER EQUIPO

  function Punto1() {
    if (refPunto1.current.innerHTML == 0) {
      refPunto1.current.innerHTML = Number(refPunto1.current.innerHTML + 15);
      console.log(refPunto1.current.innerHTML);
    } else if (refPunto1.current.innerHTML == 15) {
      refPunto1.current.innerHTML = Number(refPunto1.current.innerHTML);
      refPunto1.current.innerHTML = 30;
      console.log(refPunto1.current.innerHTML);
    } else if (refPunto1.current.innerHTML == 30) {
      refPunto1.current.innerHTML = Number(refPunto1.current.innerHTML);
      refPunto1.current.innerHTML = 40;
      console.log(refPunto1.current.innerHTML);
    } else {
        refPunto1.current.innerHTML = 'JUEGO';
        // Mensaje();
        reset1();
        reset2();
        Juego();
      }
  }
  // FUNCION QUE SUMA LOS PUNTOS DEL SEGUNDO EQUIPO

  function Punto2() {
    if (refPunto2.current.innerHTML == 0) {
      refPunto2.current.innerHTML = Number(refPunto2.current.innerHTML + 15);
      console.log(refPunto2.current.innerHTML);
    } else if (refPunto2.current.innerHTML == 15) {
      refPunto2.current.innerHTML = Number(refPunto2.current.innerHTML);
      refPunto2.current.innerHTML = 30;
      console.log(refPunto2.current.innerHTML);
    } else if (refPunto2.current.innerHTML == 30) {
      refPunto2.current.innerHTML = Number(refPunto2.current.innerHTML);
      refPunto2.current.innerHTML = 40;
      console.log(refPunto2.current.innerHTML);
    } else {
      refPunto2.current.innerHTML = 'JUEGO';
      // Mensaje();
      reset2();
      reset1();
      Juego2();
      
    }
  }

  function Juego(){
    if(refJuegoE1_1.current.innerHTML < 7 && refJuegoE2_1.current.innerHTML != 6){
      refJuegoE1_1.current.innerHTML = Number(refJuegoE1_1.current.innerHTML) + suma;
    } else if (refJuegoE1_2.current.innerHTML < 7 && refJuegoE2_2.current.innerHTML != 6){
      refJuegoE1_2.current.innerHTML = Number(refJuegoE1_2.current.innerHTML) + suma;
    } else if (refJuegoE1_3.current.innerHTML < 7 && refJuegoE2_3.current.innerHTML != 6){
      refJuegoE1_3.current.innerHTML = Number(refJuegoE1_3.current.innerHTML) + suma;
    }
    
  }

  function Juego2(){
    if(refJuegoE2_1.current.innerHTML < 7 && refJuegoE1_1.current.innerHTML != 6){
      refJuegoE2_1.current.innerHTML = Number(refJuegoE2_1.current.innerHTML) + suma;
    } else if (refJuegoE2_2.current.innerHTML < 7 && refJuegoE1_2.current.innerHTML != 6){
      refJuegoE2_2.current.innerHTML = Number(refJuegoE2_2.current.innerHTML) + suma;
    } else if (refJuegoE2_3.current.innerHTML < 7 && refJuegoE1_3.current.innerHTML != 6){
      refJuegoE2_3.current.innerHTML = Number(refJuegoE2_3.current.innerHTML) + suma;
    }
    
  }
    

  return (
    <div className='Contenedor'> 
      <div ref={refPunto1} className="Puntos">
        0
      </div>
      <div className="MenuEquipo">
        <button onClick={Punto1} className='botonPunto'>Punto</button>
        <button onClick={reset1} className='botonReset'>Reset</button>
      </div>

      <div ref={refPunto2} className="Puntos">
        0
      </div>
      <div className='MenuEquipo'>
        <button onClick={Punto2} className='botonPunto'>Punto</button>
        <button onClick={reset2} className='botonReset'>Reset</button>
      </div>
      <br />
      <div className="MenuEquipo">
        <button onClick={resetTotal} className='GlobalReset'>Global Reset</button>
      </div>
    <table className='Tabla'>
      <tr>
        <td><div className='Equipo1'>Equipo1</div></td>
        <td ref={refJuegoE1_1} className='numeroJuegos'>0</td>
        <td ref={refJuegoE1_2} className='numeroJuegos'>0</td>
        <td ref={refJuegoE1_3} className='numeroJuegos'>0</td>
      </tr>
      <tr>
        <td><div className='Equipo2'>Equipo2</div></td>
        <td ref={refJuegoE2_1} className='numeroJuegos'>0</td>
        <td ref={refJuegoE2_2} className='numeroJuegos'>0</td>
        <td ref={refJuegoE2_3} className='numeroJuegos'>0</td>
      </tr>
    </table>

    
    </div>
  );
}
