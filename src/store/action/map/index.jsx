import axios from "axios";
import * as type from "./type";





export const handleOnLoading = () => {
    return {
        type: type.MAP_ON_LOADING
    };
};


export const handleOnActionLoading = () => {
    return {
        type: type.MAP_ON_ACTION_LOADING
    };
};





export const handleMapHistory = (data, callback) => {

    
  	return async dispatch => {
        dispatch(handleOnLoading());


        try {

            
            dispatch({
                type: type.MAP_HANDLE_HISTORY,
                payload: data
            });


        } catch (err) {
            console.log('map_history', err)
        }
    }


};





export const handleMapList = (data, callback) => {

    
  	return async dispatch => {
        dispatch(handleOnActionLoading());


        try {

            
            const response = await axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json`, {
                params: {
                    input: data,
                    type: 'establishment',
                    radius: 500,
                    key: 'AIzaSyBNUapuqzvxfhPw2lW1EO3M-MK-JjKskxw'
                }
            });
            if (response.status === 200) {

                
                const { predictions, status } = response.data;
                let promise = predictions.map((item, key) => {


                    item.label = item.description;
                    item.value = item.description;
                    return true;


                });
                await Promise.all(promise)


                dispatch({
                    type: type.MAP_HANDLE_LIST,
                });
                if (callback) {
                    callback({
                        list: predictions,
                        status,
                    });
                }
                
                
            }


        } catch (err) {


            console.log('map_list', err.response)


        }

    }


};





export const handleMapShow = (data, callback) => {

    
    return async dispatch => {
        dispatch(handleOnActionLoading());


        try {

            
            const response = await axios.get(`https://maps.googleapis.com/maps/api/place/details/json`, {
                params: {
                    placeid: data.place_id,
                    key: 'AIzaSyBNUapuqzvxfhPw2lW1EO3M-MK-JjKskxw'
                }
            });
            if (response.status === 200) {

                
                const { result, status } = response.data;
                dispatch({
                    type: type.MAP_HANDLE_SHOW,
                    payload: !data.history ? data : null,
                });
                if (callback) {
                    callback({
                        data: result.geometry,
                        status,
                    });
                }
                
                
            }


        } catch (err) {


            console.log('map_show', err.response)


        }

    }


};





export const handleMapReset = () => {
    return { type: type.MAP_RESET };
};






















