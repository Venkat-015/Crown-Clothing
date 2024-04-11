import {put,call,all,takeLatest}from 'redux-saga/effects';
import { USER_ACTION_TYPES } from './user.type';
import { signInSuccess,signInFailed } from './user.action';
import {getCurrentUser,createUserDocumentFromAuth} from '../../../utils/firebase/firebase.util';

export function* getSnapshotFromUserAuth(userAuth,additionalDetails){
    try{
        const userSnapShot=yield call(createUserDocumentFromAuth,userAuth,additionalDetails)
        console.log(userSnapShot);
        console.log(userSnapShot.data());    
    }
    catch(error){
        yield put(signInFailed(error));
    }
}
export function* isUserAuthenticated(){
    try{
      const userAuth=yield call(getCurrentUser);
      if(!userAuth) return;
      yield call (getSnapshotFromUserAuth,userAuth);
    }
    catch(error){
        yield put(signInFailed(error));
    }
}

export function* onCheckUserSession(){
    yield takeLatest(USER_ACTION_TYPES.CHECK_USER_SESSION,);
}

export function* userSagas(){
    yield all([call(onCheckUserSession)]);
}