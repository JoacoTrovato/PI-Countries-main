const inicioState = {
  paises: [],
  allPaises: [],
  actividad: [],
  detail: []
};
//guardo dos veces los paises para que cuando los busque en options no se me pise paises con los paises filtrados
function rootReducer (state = inicioState, action) {
  switch(action.type){
  case 'GET_PAISES':
      return{
        ...state,
        paises: action.payload,
        allPaises : action.payload
      };
  case 'GET_SEARCH':
      return{
        ...state,
        paises: action.payload
      };
  case 'GET_ACTIVIDAD':
      return{
        ...state,
        actividad : action.payload
      };
  case 'FILTER_BY_CONTINENTE':
      const allPai = state.allPaises
      const estadoFiltrado = action.payload === 'All' ? allPai : allPai.filter(el => el.continente === action.payload)
      return{
        ...state,
        paises: estadoFiltrado
      };
  case 'POST_ACTIVIDAD':
      return {
        ...state
      };
  case 'FILTER_BY_POBLACION':
        const poblacion = action.payload === 'desendente' ? state.paises.sort((a,b) => a.poblacion - b.poblacion) :
        state.paises.sort((a,b) => b.poblacion - a.poblacion)
        return{
            ...state,
            paises: poblacion
        };
    case 'FILTER_BY_ACTIVITY':
        const array = []
        state.allPaises.map(el => el.Activities.forEach(element => {
        if (element.name === action.payload) {
            array.push(el)
        };
    }));
    return{
        ...state,
        paises: array
    };
  case 'FILTER_BY_ALFA': //declarar un estado nulo nuevo en el select de Home
    const alfaNombre = action.payload === 'asc' ? state.paises.sort(function (a, b) {
    if (a.name > b.name) {
        return 1;     
    };
    if (b.name > a.name) {
        return -1;
    };
        return 0;
    }) : state.paises.sort(function (a, b) {
    if (a.name > b.name) {
        return -1;
    };
    if (b.name > a.name) {
         return 1;
    };
      return 0;
    });
      return {
        ...state,
        paises: alfaNombre
      };
  case 'GET_DETAIL':
      return{
        ...state,
        detail: action.payload
      };
    default:
        return state;
  };
};

export default rootReducer;

















// const initialState = {
//     paisesDB: [],
//     filter: [],
//     activities: [],
//     paisDetallado: []
//   }
  
//   function paises(state = initialState, action) {
  
//     switch (action.type) {
  
//       case 'INIT':
//         return { ...state, paisesDB: action.payload }
  
//       case 'load_Activity':
//         let nombres = action.payload.map((e) => { return e.nombre })
//         let data = new Set(nombres);
//         let activitiesName = [...data];
//         return { ...state, activities: activitiesName }
  
//       case 'PAIS_DETALLADO': //paisDetallado es mi state para usar en Detalle.js
//         return { ...state, paisDetallado: action.payload }
  
//       case 'FILTER_AZ':
//         if(state.filter.length < 1){
//           let newfilter = state.paisesDB.sort(function (a, b) {
//             if (a.nombre > b.nombre) {
//               return 1;
//             }
//             if (a.nombre < b.nombre) {
//               return -1;
//             }
//             return 0;
//           });
//           return { ...state, filter: newfilter }
//         }
//         else{
//           let newfilter = state.filter.sort(function (a, b) {
//           if (a.nombre > b.nombre) {
//             return 1;
//           }
//           if (a.nombre < b.nombre) {
//             return -1;
//           }
//           return 0;
//         });
//         return { ...state, filter: newfilter }
//       }
  
//       case 'FILTER_ZA':
//         if(state.filter.length < 1){
//           return {
//           ...state, filter: state.paisesDB.sort(function (a, b) {
//             if (a.nombre < b.nombre) {
//               return 1;
//             }
//             if (a.nombre > b.nombre) {
//               return -1;
//             }
//             return 0;
//           })
//         }}
//         else{
//           return {
//           ...state, filter: state.filter.sort(function (a, b) {
//             if (a.nombre < b.nombre) {
//               return 1;
//             }
//             if (a.nombre > b.nombre) {
//               return -1;
//             }
//             return 0;
//           })
//         }}
  
//       case 'FILTER_CONTINENTE':
//         if (action.payload === 'API') {
//           return {...state, filter: state.paisesDB }
//         }
//         else {
//           return {...state, filter: state.paisesDB.filter(p => {
//             return p.region === action.payload }) }
//         }
     
//       case 'FILTER_ACTIVIDAD':
//         let filterPaises = [];
//         state.paisesDB.map(p => {
//           for (var i = 0; i < p.activities.length; i++) {
//             if (p.activities[i].nombre === action.payload) {
//               filterPaises.push(p)
//             }
//           } return false;
//         });
//         console.log('filterPaises', filterPaises)
//         return { ...state, filter: filterPaises }
  
//       case 'FILTER_POBLACION_MENOR':
//         //return state.sort();
//         if(state.filter.length < 1){
//           return {
//           ...state, filter: state.paisesDB.sort(function (a, b) {
//             if (a.poblacion > b.poblacion) {
//               return 1;
//             }
//             if (a.poblacion < b.poblacion) {
//               return -1;
//             }
//             return 0;
//           })
//         }}
//         else{return {
//           ...state, filter: state.filter.sort(function (a, b) {
//             if (a.poblacion > b.poblacion) {
//               return 1;
//             }
//             if (a.poblacion < b.poblacion) {
//               return -1;
//             }
//             return 0;
//           })
//         }}
  
//       case 'FILTER_POBLACION_MAYOR':
//         if(state.filter.length < 1){
//         return {
//         ...state, filter: state.paisesDB.sort(function (a, b) {
//           if (a.poblacion < b.poblacion) {
//             return 1;
//           }
//           if (a.poblacion > b.poblacion) {
//             return -1;
//           }
//           return 0;
//         })
//       }}
//         else{return {
//           ...state, filter: state.filter.sort(function (a, b) {
//             if (a.poblacion < b.poblacion) {
//               return 1;
//             }
//             if (a.poblacion > b.poblacion) {
//               return -1;
//             }
//             return 0;
//           })
//         }}
  
//       case 'SEARCH':
//         return { ...state, filter: action.payload }
  
//       default:
//         return state;
//     }
//   }
  
//   export default paises;