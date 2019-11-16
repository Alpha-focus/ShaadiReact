import ShadiActionTypes from "../actions/shaadiactiontypes";
export default (state: any, action: any): any=>{
    switch (action.type) {
        case ShadiActionTypes.LOGINACTION_RESPONSE:
            if (action && action.payload && action.payload.payload) {
                let payloadResponse=action.payload.payload;
                state = Object.assign({}, state, {
                    login:payloadResponse    
                });
            console.log(state)
            }
            return state;
        default:
            return state || {}
    }
}