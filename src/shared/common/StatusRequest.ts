export type TStatusRequest = typeof StatusRequest[keyof typeof StatusRequest]

export enum StatusRequest {
    PENDING = 'pending',
    REJECT = 'rejected',
    SUCCESS = 'success',
}
