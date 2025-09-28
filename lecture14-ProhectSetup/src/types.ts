export interface IUser {
    id: number
    name: string
    surname: string
    login: string
    password: string
    picture:string | null
}

export interface IResponse<T = unknown> {
    status: string
    message:string
    payload: T
}
export interface setPassword  {
    oldPassword:string
    newPassword:string
}
export type AuthUser =Pick<IUser,'login' | 'password'>

export type NewUser = Omit<IUser, 'id'>
export interface IContext {
    user:IUser
    setUser:(user:IUser) => void 
}