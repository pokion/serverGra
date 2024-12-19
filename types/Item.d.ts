import { RowDataPacket } from "mysql2";

declare interface Item extends RowDataPacket{
    id: number
    name: string
    description: string
}