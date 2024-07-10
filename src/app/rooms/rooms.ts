export interface Room{
    availableRooms?:number;
    bookedRooms?:number;
    totalRooms?:number;
}

export interface RoomsList{
    roomNumber?:string,
    roomType: string;
    amenities: string;
    price: number;
    pictures: string;
    checkinTime: Date;
    checkoutTime: Date;
}