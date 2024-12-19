import { RowDataPacket } from "mysql2";

declare interface Item extends RowDataPacket{
    Id: number
    Name: string
    Description: string
}