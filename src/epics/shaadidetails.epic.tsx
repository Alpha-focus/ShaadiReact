import { ofType } from 'redux-observable';
import { map, switchMap, catchError } from 'rxjs/operators';
import OCCActionTypes from '../actions/shaadiactiontypes';
import { of } from 'rxjs';
import { loginActionResponse } from '../actions/shaadi.action'
import ShaadiDataService from '../services/shaadi.data.service';


export const loginShaadiEpic = (action$: any) => action$.pipe(
    ofType(OCCActionTypes.LOGINACTION), switchMap(({ payload }) => ShaadiDataService.Instance.validateUserDetails(payload)
        .pipe(
            map((response) => {
                console.log('in unbilled resp api', response);
                return loginActionResponse(response);
            }), catchError((error: Error) => {
                console.log('Error occured!!- ', error);
                return of({ type: '', payload: {} });
            })
        ))
);
