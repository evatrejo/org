import { useState } from 'react';
import { v4 as uuid } from 'uuid';
import './App.css';
import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg/MiOrg';
import Equipo from './componentes/Equipo/Equipo';
import Footer from './componentes/Footer/Footer';

function App() {

  //use state
  //definir Estado-Hook
  const [mostrarFormulario, actualizarMostrar] = useState(false);

  const [colaboradores, actualizarColaborador] = useState([
    {
      id: uuid(),
    equipo:"Front End",
    foto: "https://github.com/evatrejog.png",
    nombre: "Eva Trejo",
    puesto: "Programador",
    fav: true
  },
  {
    id: uuid(),
    equipo:"Front End",
    foto: "https://github.com/evatrejog.png",
    nombre: "Eva Trejo",
    puesto: "Programador",
    fav: false
  },
  {
    id: uuid(),
    equipo:"Programacion",
    foto: "https://github.com/evatrejog.png",
    nombre: "Eva Trejo",
    puesto: "Programador",
    fav: false
  },
  {
    id: uuid(),
    equipo:"Data Science",
    foto: "https://github.com/evatrejog.png",
    nombre: "Eva Trejo",
    puesto: "Programador",
    fav: false
  },
  {
    id: uuid(),
    equipo:"DevOps",
    foto: "https://github.com/evatrejog.png",
    nombre: "Eva Trejo",
    puesto: "Programador",
    fav: false
  },
])

  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: "Programacion",
      colorPrimario: "#57C278",
      colorSecundario:  "#D9F7E9"
    },
    {
      id: uuid(),
      titulo: "Front End",
      colorPrimario: "#82CFFA",
      colorSecundario:  "#E8F8FF"
    },
    {
      id: uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario:  "#F0F8E2"
    },
    {
      id: uuid(),
      titulo: "DevOps",
      colorPrimario: "#E06B69",
      colorSecundario:  "#FDE7E8"
    },
    {
      id: uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario:  "#FAE9F5"
    },
    {
      id: uuid(),
      titulo: "Movil",
      colorPrimario: "#FFBA05",
      colorSecundario:  "#FFF5D9"
    },
    {
      id: uuid(),
      titulo: "Innovacion y gestion",
      colorPrimario: "#FF8A29",
      colorSecundario:  "#FFEEDF"
    }
])
  
  //Ternario: condicion ? seMuestra : noSeMuestra

  const cambiarMostrar = () => {
    actualizarMostrar (!mostrarFormulario)
  }

//Registrar colaborador
const registrarColaborador = (colaborador) =>{
    console.log("nuevo colaborador", colaborador)
    //spread operator:crear un copia de los valores y agrear nuevo elemento
    actualizarColaborador([...colaboradores,colaborador])
}


//Eliminar colaborador
const eliminarColaborador = (id) => {
   console.log("eliminar colaborador", id)
   const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id !== id ) 
   //filter regresa un nuevo arreglo sin modificar el primero
   actualizarColaborador(nuevosColaboradores);
}

//Actualizar color del equipo
const actualizarColor = (color, id) => {
    console.log("actualizar: ", color, id)
    const equiposActualizados = equipos.map((equipo) => {
      if(equipo.id === id){
        equipo.colorPrimario = color
      }
      return equipo
    })

    actualizarEquipos (equiposActualizados)
}


//Like
const like = (id) => {
    const colaboradoresActualizados = colaboradores.map( (colaborador) => {
      if(colaborador.id === id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })
    actualizarColaborador(colaboradoresActualizados)
}


//Crear equipo
const crearEquipo = (nuevoEquipo) =>{
  actualizarEquipos([...equipos, {...nuevoEquipo,id: uuid()}])
}


  return (
    <div>
      <Header />
      {/* mostrarFormulario === true ? <Formulario /> : <div></div>*/}
      { mostrarFormulario && <Formulario 
          equipos={equipos.map( (equipo) => equipo.titulo)} 
          registrarColaborador={registrarColaborador}
          crearEquipo={crearEquipo}
        />
      }
      
      <MiOrg cambiarMostrar={cambiarMostrar}/>
      {
        //creacion de equipos
        equipos.map( (equipo) => 
          <Equipo 
              datos= {equipo} 
              key={equipo.titulo}
              colaboradores={colaboradores.filter(colaborador => colaborador.equipo === equipo.titulo)}
              eliminarColaborador={eliminarColaborador}
              actualizarColor={actualizarColor}
              like={like}
          />
        )
      }

      <Footer/>

    </div>

  );
}

export default App;
