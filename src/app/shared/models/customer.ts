export interface Customer {
    id: number;
    roomNo: number;
    cName: string;
    address: string;
    phone: string;
    email: string;
    checkin: Date;
    totalPersons: number;
    bookingDays: number;
    advance: number;
}