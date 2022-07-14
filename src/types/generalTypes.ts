export enum fetchStatus {
    IDLE = 'IDLE',
    PENDING = 'PENDING',
    REJECTED = 'REJECTED',
    FULFILLED = 'FULFILLED'
}

export type ErrorType = string | null


export interface IRawResponse {
    name: string
    url: string
}