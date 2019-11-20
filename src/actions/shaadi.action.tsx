import OCCActionTypes from "./shaadiactiontypes";

 export const loginAction=(payload: any) => {
  return {
      type:OCCActionTypes.LOGINACTION,
      payload:payload
  }
}

export const loginActionResponse=(payload: any) => {
    return {
        type:OCCActionTypes.LOGINACTION_RESPONSE,
        payload:payload
    }
  }
