import { Room } from './room';
export interface Service {
    id: number;
    roomNo: number;
    sDesc: string;
    amount: number;
    serviceDate: Date;
    room: Room;
}