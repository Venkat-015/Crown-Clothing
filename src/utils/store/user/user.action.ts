import { USER_ACTION_TYPES } from "./user.type";
import { UserData,AdditionalInformation} from "../../firebase/firebase.util";
import { createAction,withMatcher,Action,ActionWithPayload } from "../../reducer/reducer.utils";
import { User } from "firebase/auth";
export type CheckUserSession=Action<USER_ACTION_TYPES.CHECK_USER_SESSION>
export const checkUserSession=withMatcher(():CheckUserSession=>createAction(USER_ACTION_TYPES.CHECK_USER_SESSION));

export type SetCurrentUser=ActionWithPayload<USER_ACTION_TYPES.SET_CURRENT_USER,UserData>
export const setCurrentUser=withMatcher((user:UserData):SetCurrentUser=>{
    return createAction(USER_ACTION_TYPES.SET_CURRENT_USER,user);
});

export type GoogleSignInStart=Action<USER_ACTION_TYPES.GOOGLE_SIGN_IN_START>
export const googleSignInStart=withMatcher(():GoogleSignInStart=>createAction(USER_ACTION_TYPES.GOOGLE_SIGN_IN_START));

export type EmailSignInStart=ActionWithPayload<USER_ACTION_TYPES.EMAIL_SIGN_IN_START,{email:string,password:string}>
export const emailSignInStart=withMatcher((email:string,password:string):EmailSignInStart=>createAction(USER_ACTION_TYPES.EMAIL_SIGN_IN_START,{email,password}));

export type SignInSuccess=ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_SUCCESS,UserData>
export const signInSuccess=withMatcher((user:UserData & {id:string}):SignInSuccess=>createAction(USER_ACTION_TYPES.SIGN_IN_SUCCESS,user));

export type SignInFailed=ActionWithPayload<USER_ACTION_TYPES.SIGN_IN_FAILED,Error>
export const signInFailed=withMatcher((error:Error):SignInFailed=>createAction(USER_ACTION_TYPES.SIGN_IN_FAILED,error));

export type SignUpStart=ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_START,{email:string,password:string,displayName:string}>
export const signUpStart=withMatcher((email:string,password:string,displayName:string):SignUpStart=>createAction(USER_ACTION_TYPES.SIGN_UP_START,{email,password,displayName}));

export type SignUpSuccess=ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_SUCCESS,{user:User,additionalDetails:AdditionalInformation}>
export const signUpSuccess=withMatcher((user:User,additionalDetails:AdditionalInformation):SignUpSuccess=>createAction(USER_ACTION_TYPES.SIGN_UP_SUCCESS,{user,additionalDetails}));

export type SignUpFailed=ActionWithPayload<USER_ACTION_TYPES.SIGN_UP_FAILED,Error>
export const signUpFailed=withMatcher((error:Error):SignUpFailed=>createAction(USER_ACTION_TYPES.SIGN_UP_FAILED,error));

export type SignOutStart=Action<USER_ACTION_TYPES.SIGN_OUT_START>
export const signOutStart=(():SignOutStart=>createAction(USER_ACTION_TYPES.SIGN_OUT_START));

export type SignOutSuccess=Action<USER_ACTION_TYPES.SIGN_OUT_SUCCESS>
export const signOutSuccess=withMatcher(():SignOutSuccess=>createAction(USER_ACTION_TYPES.SIGN_OUT_SUCCESS));

export type SignOutFailed=ActionWithPayload<USER_ACTION_TYPES.SIGN_OUT_FAILED,Error>
export const signOutFailed=withMatcher((error:Error):SignOutFailed=>createAction(USER_ACTION_TYPES.SIGN_OUT_FAILED,error));