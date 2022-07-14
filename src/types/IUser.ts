import {ErrorType} from "./generalTypes";


export interface ILoggedState {
    user: IUser | null
    error: ErrorType
}


export interface IUser {
    email : string
    uid: string
    name : string
    photoURL : string
}