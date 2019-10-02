import {combineEpics} from 'redux-observable';
import {loginShaadiEpic} from './shaadidetails.epic';

export const RootEpic=combineEpics(
    loginShaadiEpic
);

