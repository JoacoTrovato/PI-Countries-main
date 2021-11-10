import axios from 'axios';

export function getPaises() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/paises");
        return dispatch({
            type:'GET_PAISES',
            payload: json.data
        })}};

export function getSearch(name) {
    return async function (dispatch) {
        try{
        var json = await axios.get("http://localhost:3001/paises?name=" + name)
        return dispatch ({
            type : "GET_SEARCH",
            payload : json.data
        })
        }catch(e){
            console.log(e);
}}};

export function getActividad() {
    return async function (dispatch) {
        var json = await axios.get("http://localhost:3001/actividades");
        console.log('json', json.data);
        return dispatch({
            type:'GET_ACTIVIDAD',
            payload: json.data
})}};

export function getDetail(id) {
    return async function (dispatch) {
        try{
            var json = await axios.get("http://localhost:3001/paises/"+id)
            return  dispatch({
                type: 'GET_DETAIL',
                payload : json.data
            });
        }catch(e){
        console.log(e);
}}};

export function postActividad(payload) {
    return async function (dispatch) {
        var json = await axios.post("http://localhost:3001/actividades", payload);
        return dispatch({
            type : 'POST_ACTIVIDAD',
            payload : json
})}};

export function filtradoPaises(payload) {
    return{
        type:'FILTER_BY_CONTINENTE',
        payload
}};

export function filtradoPoblacion(payload) {
    return{
        type: 'FILTER_BY_POBLACION',
        payload
}};

export function filtradoAlfa(payload) {
    return{
        type: 'FILTER_BY_ALFA',
        payload
}};

export function filtradoActividad(payload) {
    return{
        type: 'FILTER_BY_ACTIVITY',
        payload
}};