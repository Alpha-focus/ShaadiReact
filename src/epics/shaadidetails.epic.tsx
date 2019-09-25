import {ofType} from 'redux-observable';
import {map, switchMap, catchError} from 'rxjs/operators';
import OCCActionTypes from '../actions/OCCActionTypes';
import {Observable, of} from 'rxjs';
import {ajax} from 'rxjs/ajax';
import {loginActionResponse} from '../actions/shaadi.action'
import OCCDataService from '../services/Occ.data.service';
const apiCall =(): Observable<any>=>{
return ajax.get('http://localhost:8080/mock/OCC_Unbilled_Load_Data.json');
}
export const loginShaadiEpic=(action$:any) => action$.pipe(
ofType(OCCActionTypes.LOGIN_ACTION), switchMap(({payload})=> OCCDataService.Instance.validateUserDetails(payload)
.pipe(
map((response) => {
console.log('in unbilled resp api',response);
return loginActionResponse(response);
}),catchError((error: Error)=>{
console.log('Error occured!!- ',error);
return of({type:'',payload:{}});
})
))
);
