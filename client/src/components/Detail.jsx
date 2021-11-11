import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDetail } from "../actions";
import { useEffect } from "react";
import './styles/Detail.css'

export default function Detail(props) {
    const dispatch =  useDispatch();

useEffect(()=>{
    dispatch(getDetail(props.match.params.id));
},[dispatch, props.match.params.id]);

const Pais = useSelector((state)=> state.detail); //Mi estado con la informacion de los paises

return (
    <div >
        <div className="DivVolver">
            <Link to='/home'><button className="ButtonVolver">Volver</button></Link>
        </div>
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
                <div>{Pais.Activities?.map(activity => {
                    return(
                        <div className='actividad'>
                            <h6>Actividad: {activity.name} </h6>
                            <h6>Dificultad: {activity.dificultad} </h6>
                            <h6>Temporada: {activity.temporada} </h6>
                            <h6>Duracion: {activity.duracion}</h6>
                        </div>
                )})}
                </div>
            </div> : <p>No encontramos los detalles perdon:c</p>
        }
    </div>
);
};