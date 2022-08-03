import * as type from 'store/action/map/type';


const mapState = {
    map_loading: false,
    map_action_loading: false,
    

    maps: [],
    map_histories: [],
    map: null,
};





const on_loading = ( state, action ) => {
    return {
    	...state,
    	map_loading: true,
    }
};


const on_action_loading = ( state, action ) => {
    return {
        ...state,
        map_action_loading: true,
    }
};


const handle_history = ( state, action ) => {
    return {
        ...state,
        map_loading: false,


        map_histories: action.payload, 
    }
};


const handle_list = ( state, action ) => {
    return {
        ...state,
        map_action_loading: false,
    }
};


const handle_show = ( state, action ) => {
    return {
        ...state,
        map_action_loading: false,


        map_histories: action.payload !== null ? [
            action.payload,
            ...state.map_histories,
        ] : state.map_histories
    }
};


const reset = ( state, action ) => {
    return {
    	map_loading: false,
        map_action_loading: false,
        

        maps: [],
        map_histories: [],
        map: null,
    }
};





const reducer = ( state = mapState, action ) => {
    switch ( action.type ) {
        case type.MAP_ON_LOADING: return on_loading( state, action );
        case type.MAP_ON_ACTION_LOADING: return on_action_loading( state, action );


        case type.MAP_HANDLE_HISTORY: return handle_history( state, action );
        case type.MAP_HANDLE_LIST: return handle_list( state, action );
        case type.MAP_HANDLE_SHOW: return handle_show( state, action );


        case type.MAP_RESET: return reset( state, action );
        default: return state;
    }
};


export default reducer;

























