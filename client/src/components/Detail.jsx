import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";
import './styles/Detail.css'

export default function Detail(props) {
    const dispatch =  useDispatch();

useEffect(()=>{
    dispatch(getDetail(props.match.params.id)); //AUMENTAR TITULOS DE PAISES CENTRAR PAGINA
},[dispatch, props.match.params.id]);

const Pais = useSelector((state)=> state.detail); //Mi estado con la informacion de los paises
console.log(Pais.Activities, 'holisssssss')
/* 
return (
    <div >
        <div className="DivVolver">
            <Link to='/home'><button className="ButtonVolver">Volver</button></Link>
        </div>
        <div className='ContenedorDetalle'>
        {
            Pais? 
            
            <div className='detalle'>
                <h1>{Pais.name}</h1>
                <img src = {Pais.img} alt='Imagen no encontrada' width='250px' height='175px' />
                <h2>ID: {Pais.id}</h2>
                <h2>Continente: {Pais.continente}</h2>
                <h3 className='capital' alt='Capital no encontrada'>Capital: {Pais.capital || 'Capital no encontrada'}</h3>
                <h4 alt='Subregion no encontrada'>Subregion: {Pais.subregion}</h4>
                <h5>Area Km2: {Pais.area}</h5>
                <h5>Poblacion: {Pais.poblacion}</h5>
                <div className='ContenedorActividad'>
                    
                    {
                /*     Pais.Activities?.map(activity => {
                    return(
                        <div className='actividad'>
                            <h6>Actividad: {activity.name} </h6>
                            <h6>Dificultad: {activity.dificultad} </h6>
                            <h6>Temporada: {activity.temporada} </h6>
                            <h6>Duracion: {activity.duracion}</h6>
                        </div>
                )
                }
                ) */
                
         /*            Pais[0]?.Activities === undefined || Pais[0]?.Activities.length === 0 ? <div className="contenedorTuristico">
                        <h1 className='NoActivity'>NO HAY ACTIVIDADES</h1>
                        </div> : Pais[0].Activities.map((activity) => (
                        <div className="actividad" >
                                <h1 className="nameActividad">{activity.name}</h1>
                                <h2>temporada: {activity.temporada}</h2>
                                <h2>Dificultad: {activity.dificultad}</h2>
                                <h2>Duracion: {activity.duracion} Minutos</h2>
                        </div>
                            
                    ))
                
                }
                </div>
            </div> : <p>No encontramos los detalles perdon:c</p>
        }
    </div>
    </div> */



    return(
        <>
         <div className="DivVolver">
            <Link to='/home'><button className="ButtonVolver">Volver</button></Link>
        </div>
        <div className='ContenedorDetalle'>
            {
                Pais.Activities?
                <div className="detalle">
                <h1>{Pais.name}</h1>
                <img src = {Pais.img} alt='Imagen no encontrada' width='250px' height='175px' margin='3px'/>
                <h2>ID: {Pais.id}</h2>
                <h2>Continente: {Pais.continente}</h2>
                <h3 className='capital' alt='Capital no encontrada'>Capital: {Pais.capital || 'Capital no encontrada'}</h3>
                <h4 alt='Subregion no encontrada'>Subregion: {Pais.subregion}</h4>
                <h5>Area Km2: {Pais.area}</h5>
                <h5>Poblacion: {Pais.poblacion}</h5>

            {

            Pais?.Activities === undefined || Pais?.Activities?.length === 0 ? <div className='ContenedorActividad'>
                    <h1 className='NoActivity'>NO HAY ACTIVIDADES </h1>
                    <div className="DivActividad">
                    <Link to = '/actividades'>
                        <button className="ButtonActividades">Crear Actividades</button>
                    </Link>
                    </div>
                    </div> : 
                    
                    Pais?.Activities.map((activity) => (
                    <div className='actividad' >
                            <h6 className='datos'>Actividad: {console.log(Pais, 'puta madre')}{activity.name} </h6>
                            <h6 className='datos'>Dificultad: {activity.dificultad} </h6>
                            <h6 className='datos'>Temporada: {activity.temporada} </h6>
                            <h6 className='datos'>Duracion: {activity.duracion}</h6>
                    </div>
                    ))
                    
                    }

            </div> : <p>No encontramos los detalles perdon:c</p>
            }
            </div> 
        </>
    )


};