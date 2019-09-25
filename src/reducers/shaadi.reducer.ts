import ShadiActionTypes from "../actions/shaadiactiontypes";
export default (state: any, action: any): any=>{
    switch (action.type) {
        case ShadiActionTypes.LOGINACTION:
            if (action && action.payload && action.payload.payload) {
                // let response = action.payload.payload;
                state = Object.assign({}, state, {
                });
            }
            return state;
        default:
            return state || {}
    }
}